import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    console.log('=== Contact Form Submission Started ===')
    const data = await request.json()
    console.log('Form data received:', { name: data.name, email: data.email, subject: data.subject })
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      console.error('Missing required fields:', data)
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate environment variables
    console.log('Checking environment variables...')
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
    console.log('CONTACT_EMAIL_TO:', process.env.CONTACT_EMAIL_TO)
    console.log('RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev')
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    if (!process.env.CONTACT_EMAIL_TO) {
      console.error('CONTACT_EMAIL_TO is not set')
      return NextResponse.json(
        { error: 'Email recipient not configured' },
        { status: 500 }
      )
    }

    console.log('Attempting to send email via Resend...')

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: data.email,
      subject: `Contact Form: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5f2d; border-bottom: 2px solid #2c5f2d; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${data.subject}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #2c5f2d;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Submitted: ${new Date().toLocaleString()}</p>
            <p>Reply directly to this email to respond to ${data.name}.</p>
          </div>
        </div>
      `,
    })

    console.log('Email sent successfully!')
    console.log('Email Result:', JSON.stringify(emailResult, null, 2))
    console.log('=== Contact Form Submission Completed ===')
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('=== ERROR processing contact form ===')
    console.error('Error type:', error instanceof Error ? error.constructor.name : typeof error)
    console.error('Error message:', error instanceof Error ? error.message : String(error))
    console.error('Full error:', error)
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}


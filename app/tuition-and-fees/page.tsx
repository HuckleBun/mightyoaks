export default function TuitionAndFees() {
  return (
    <div className="py-12">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-oak-50 to-white py-16 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-oak-800 text-center">
            Tuition and Fees
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-custom">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* FEES */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-oak-800 mb-6">FEES</h2>
            <hr className="border-oak-200 mb-6" />
            
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-oak-800">Non-Refundable Registration Fee:</strong> $50 per student
              </p>
              <p>
                <strong className="text-oak-800">Student Fee*:</strong> $100 per student
              </p>
              <p className="text-sm italic text-gray-600">
                *Some 7th-12th grade classes also have a curriculum/materials fee.
              </p>
            </div>
          </div>

          {/* TUITION */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-oak-800 mb-6">TUITION</h2>
            <hr className="border-oak-200 mb-6" />
            
            <div className="space-y-6 text-gray-700">
              <p className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
                For families with 3 or more full-time students in the program, we offer a discounted rate for the 3<sup>rd</sup> student and beyond of 50% per student. This is for full-time students only.
              </p>

              {/* K-6th Grade */}
              <div className="bg-oak-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-oak-800 mb-3">K-6<sup>th</sup> Grade</h3>
                <p className="mb-4">
                  Yearly fee of <strong>$1500 per student</strong> can be broken into 10 payments of $150 per month. Students starting midyear may choose to set up a monthly payment plan at the time of enrollment to be paid in full no later than May 15th of the current academic year.
                </p>
                <p className="text-sm">
                  Auto payments can be set-up through your bank to mail a check from one of your accounts. Families may also choose to pay via hand-written check or Autobooks which can process credit card and ACH payments.
                </p>
              </div>

              {/* 7th-12th Grade */}
              <div className="bg-oak-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-oak-800 mb-3">7th-12th Grade</h3>
                <p className="mb-4 text-sm">All amounts are yearly, and can be broken into 10 monthly payments.</p>
                
                <div className="space-y-2">
                  <p><strong>Full Time (6 hours):</strong> $1800</p>
                  <p><strong>Full Time plus 7th Hour:</strong> $2100</p>
                  <p className="mt-4"><strong>Part Time:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>1 Day Per Week Class: $150</li>
                    <li>2 Days Per Week Class: $300</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-oak-800 mb-6">PAYMENT</h2>
            <hr className="border-oak-200 mb-6" />
            
            <div className="text-gray-700">
              <p>
                MOEC accepts cash, check (either personal check or from your bank&apos;s bill pay service), and will also accept credit card payments and ACH payments via its Autobooks payment service through Central Bank of the Midwest. Click{' '}
                <a 
                  href="https://app.autobooks.co/pay/mighty-oaks-enrichment-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline font-semibold"
                >
                  HERE
                </a>
                {' '}to access this online payment service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


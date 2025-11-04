'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Our Program', href: '/our-program' },
  { name: 'Class Information', href: '/class-information' },
  { name: 'Tuition and Fees', href: '/tuition-and-fees' },
  { name: 'Enrollment', href: '/enrollment' },
  { name: 'Contact Us', href: '/contact-us' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        {/* Logo Row - centered */}
        <div className="relative flex justify-center items-center py-4">
          {/* Logo - centered */}
          <Link href="/" className="flex justify-center">
            <Image 
              src="/logo.png" 
              alt="Mighty Oaks Enrichment Center" 
              width={450}
              height={120}
              priority
              className="h-auto w-auto max-h-20 md:max-h-28"
            />
          </Link>

          {/* Mobile menu button - positioned absolute on mobile only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-0 p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop/Tablet Navigation - below logo, spread across */}
        <div className="hidden md:flex justify-center border-t border-gray-100 py-2">
          <div className="flex flex-wrap justify-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-oak-50 hover:text-oak-700 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - hamburger menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-oak-50 hover:text-oak-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}


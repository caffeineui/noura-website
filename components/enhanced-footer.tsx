"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"

/**
 * Enhanced Footer Component with Scroll Reveal Animations
 * 
 * This component demonstrates how to implement the recommended footer animations
 * while maintaining the original Noura footer design and size.
 */
export default function EnhancedFooter() {
  return (
    <footer className="footer bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Brand Section */}
          <ScrollReveal 
            animation="fadeInUp" 
            delay={0}
            className="md:col-span-3"
          >
            <div className="footer-brand-section">
              <Image 
                src="/noura-logo.png" 
                alt="Noura Logo" 
                width={120} 
                height={40}
                className="mb-4" 
              />
              <p className="text-gray-600 mt-4">
                Creating digital experiences that inspire and perform.
              </p>
            </div>
          </ScrollReveal>

          {/* Navigation Links - First Column */}
          <ScrollReveal 
            animation="fadeInUp" 
            delay={0.2}
            className="md:col-span-3"
          >
            <div className="footer-nav">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-purple-700 transition-colors">About Us</Link></li>
                <li><Link href="/team" className="text-gray-600 hover:text-purple-700 transition-colors">Our Team</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-purple-700 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-purple-700 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Navigation Links - Second Column */}
          <ScrollReveal 
            animation="fadeInUp" 
            delay={0.3}
            className="md:col-span-3"
          >
            <div className="footer-nav">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services/design" className="text-gray-600 hover:text-purple-700 transition-colors">Web Design</Link></li>
                <li><Link href="/services/development" className="text-gray-600 hover:text-purple-700 transition-colors">Development</Link></li>
                <li><Link href="/services/branding" className="text-gray-600 hover:text-purple-700 transition-colors">Branding</Link></li>
                <li><Link href="/services/strategy" className="text-gray-600 hover:text-purple-700 transition-colors">Strategy</Link></li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal 
            animation="fadeInUp" 
            delay={0.4}
            className="md:col-span-3"
          >
            <div className="footer-contact">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h4>
              <address className="not-italic text-gray-600">
                <p>123 Design Street</p>
                <p>Vancouver, BC, Canada</p>
                <p className="mt-2">Email: <a href="mailto:hello@noura.com" className="hover:text-purple-700 transition-colors">hello@noura.com</a></p>
                <p>Phone: <a href="tel:+1234567890" className="hover:text-purple-700 transition-colors">+1 (234) 567-890</a></p>
              </address>
            </div>
          </ScrollReveal>
        </div>

        {/* Social Media Icons */}
        <ScrollReveal 
          animation="fadeInUp" 
          delay={0.5}
          className="mt-12"
        >
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Image src="/instagram-icon.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Image src="/x-twitter-icon.png" alt="Twitter" width={24} height={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Image src="/youtube-icon.png" alt="YouTube" width={24} height={24} />
            </a>
          </div>
        </ScrollReveal>

        {/* Copyright and Bottom Section */}
        <ScrollReveal 
          animation="fadeInUp" 
          delay={0.6}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Noura™. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-purple-700 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-purple-700 transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-500 text-sm hover:text-purple-700 transition-colors">Sitemap</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}

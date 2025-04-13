"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Main product categories for dropdown menu
const productCategories = [
  {
    id: "barcode",
    name: "Barcode Solutions",
    subcategories: [
      { id: "barcode-printers", name: "Barcode Printers" },
      { id: "barcode-scanners", name: "Barcode Scanners" }
    ]
  },
  {
    id: "eas",
    name: "EAS Systems",
    subcategories: [
      { id: "eas-systems", name: "EAS Anti-Theft Systems" }
    ]
  },
  {
    id: "pos",
    name: "POS Systems",
    subcategories: [
      { id: "windows-pos", name: "Windows POS" },
      { id: "android-pos", name: "Android POS" },
      { id: "thermal-printers", name: "Thermal Printers" },
      { id: "waiter-calling", name: "Waiter Calling System" }
    ]
  },
  {
    id: "inkjet",
    name: "Handheld Inkjet Printer",
    subcategories: [
      { id: "inkjet-printer", name: "Inkjet Printer" }
    ]
  },
  {
    id: "consumables",
    name: "Consumables",
    subcategories: [
      { id: "labels-ribbons", name: "Labels & Ribbons" }
    ]
  }
];

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Close mobile menu if clicked outside
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }

      // Close products dropdown if clicked outside
      if (productsDropdownOpen && productsDropdownRef.current &&
          !productsDropdownRef.current.contains(target) &&
          !target.closest('.products-menu-trigger')) {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen, productsDropdownOpen]);

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <SpeedInsights />
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-gradient-to-r from-blue-600/90 to-blue-800/90 backdrop-blur-sm py-4'}`}>
          <div className="container mx-auto px-4">
            <div className={`rounded-full transition-all duration-300 flex justify-between items-center ${scrolled ? 'bg-blue-50/90 backdrop-blur-sm shadow-lg px-6 py-2' : 'bg-white/95 backdrop-blur-sm shadow-md px-6 py-3'}`}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Scantech Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>

              <nav className="hidden md:flex space-x-2">
                <Link href="/" className="px-4 py-2 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 font-medium transition-all duration-300">
                  Home
                </Link>
                <Link href="/about" className="px-4 py-2 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 font-medium transition-all duration-300">
                  About Us
                </Link>

                {/* Products dropdown */}
                <div className="relative">
                  <button
                    className="products-menu-trigger px-4 py-2 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 font-medium transition-all duration-300 flex items-center"
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                  >
                    Products
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {productsDropdownOpen && (
                    <div
                      ref={productsDropdownRef}
                      className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 py-2 border border-gray-100"
                      onMouseLeave={() => setProductsDropdownOpen(false)}
                    >
                      {productCategories.map((category) => (
                        <div key={category.id} className="px-4 py-2">
                          <Link
                            href={`/products?main=${category.id}`}
                            className="font-medium text-gray-800 hover:text-blue-600 block py-1"
                            onClick={() => setProductsDropdownOpen(false)}
                          >
                            {category.name}
                          </Link>
                          <div className="ml-4 mt-1 border-l-2 border-gray-200 pl-2 space-y-1">
                            {category.subcategories.map((subcat) => (
                              <Link
                                key={subcat.id}
                                href={`/products?category=${subcat.id}`}
                                className="text-sm text-gray-600 hover:text-blue-600 block py-1"
                                onClick={() => setProductsDropdownOpen(false)}
                              >
                                {subcat.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/downloads" className="px-4 py-2 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 font-medium transition-all duration-300">
                  Downloads
                </Link>
                <Link href="/contact" className="px-4 py-2 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 font-medium transition-all duration-300">
                  Contact Us
                </Link>
                <Link href="/e-waste-management" className="px-4 py-2 rounded-full text-gray-800 hover:text-white hover:bg-green-600 font-medium transition-all duration-300">
                  E-Waste Management
                </Link>
              </nav>

              <button
                className="md:hidden focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg overflow-hidden mobile-menu-container">
                <div className="py-2 px-4">
                  <Link
                    href="/"
                    className="block py-2 my-1 px-4 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block py-2 my-1 px-4 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  {/* Products with subcategories */}
                  <div className="py-2 my-1">
                    <Link
                      href="/products"
                      className="block px-4 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 transition-all duration-300 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Products
                    </Link>
                    <div className="ml-6 mt-2 space-y-1">
                      {productCategories.map((category) => (
                        <div key={category.id} className="mb-2">
                          <Link
                            href={`/products?main=${category.id}`}
                            className="block px-4 py-1 text-gray-700 hover:text-blue-600 font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/downloads"
                    className="block py-2 my-1 px-4 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Downloads
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-2 my-1 px-4 rounded-full text-gray-800 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/e-waste-management"
                    className="block py-2 my-1 px-4 rounded-full text-gray-800 hover:text-white hover:bg-green-600 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    E-Waste Management
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>

        <main className="flex-grow pt-24">
          {children}
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-1">
                <Image
                  src="/images/logo.png"
                  alt="Scantech Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto mb-4 invert"
                />
                <p className="text-gray-300 mt-4">
                  Scantech is a leading solution provider for all AIDC requirements. We are the pioneers in AIDC Industry.
                </p>
              </div>

              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-gray-300 hover:text-white transition">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads" className="text-gray-300 hover:text-white transition">
                      Downloads
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/e-waste-management" className="text-gray-300 hover:text-white transition">
                      E-Waste Management
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products?main=barcode" className="text-gray-300 hover:text-white transition">
                      Barcode Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?main=eas" className="text-gray-300 hover:text-white transition">
                      EAS Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?main=pos" className="text-gray-300 hover:text-white transition">
                      POS Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?main=inkjet" className="text-gray-300 hover:text-white transition">
                      Handheld Inkjet Printer
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?main=consumables" className="text-gray-300 hover:text-white transition">
                      Consumables
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <address className="not-italic text-gray-300">
                  <p className="mb-2">Flat No:202, Sai Krishna's Sai Ram Residency,</p>
                  <p className="mb-2">S.R.Nagar, Hyderabad-500038</p>
                  <p className="mb-2">
                    <a href="tel:+919392455260" className="hover:text-white transition">
                      +91 9392455260
                    </a>
                  </p>
                  <p>
                    <a href="mailto:Sales@scantech.co.in" className="hover:text-white transition">
                      Sales@scantech.co.in
                    </a>
                  </p>
                </address>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} SCANTECH. All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

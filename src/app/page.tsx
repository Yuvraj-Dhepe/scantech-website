"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Product categories data
const productCategories = [
  {
    id: "barcode",
    title: "Barcode Solutions",
    description: "High-quality barcode printers and scanners for all your needs",
    features: ["Thermal & Thermal Transfer Printers", "1D & 2D Barcode Scanners", "Wireless Connectivity"],
    bgColor: "from-blue-900 to-blue-700",
    products: [
      {
        name: "SBarco T4ES",
        image: "/images/products/SBarco-T4ES-Barcode-Printer.png"
      },
      {
        name: "ST-2040 2D Scanner",
        image: "/images/products/ST-2040-2D-Handheld-Barcode.png"
      }
    ]
  },
  {
    id: "eas",
    title: "EAS Anti-Theft Systems",
    description: "Protect your merchandise with our advanced EAS systems",
    features: ["RF & AM Technology", "Gate & Tag Solutions", "Easy Installation"],
    bgColor: "from-blue-800 to-purple-700",
    products: [
      {
        name: "EAS RF Antenna ST-180",
        image: "/images/products/EAS-RF-Antenna-ST180.png"
      },
      {
        name: "RF EAS Tags",
        image: "/images/products/RF-EAS-Tags.png"
      }
    ]
  },
  {
    id: "pos",
    title: "POS Systems",
    description: "Complete point of sale solutions for retail businesses",
    features: ["Windows & Android POS", "Thermal Printers", "Waiter Calling Systems"],
    bgColor: "from-purple-800 to-indigo-700",
    products: [
      {
        name: "ST-16 Windows POS",
        image: "/images/products/ST-16-WINDOWS.png"
      },
      {
        name: "ST-A12 Android POS",
        image: "/images/products/ST-A12.png"
      }
    ]
  },
  {
    id: "inkjet",
    title: "Handheld Inkjet Printer",
    description: "Portable inkjet printers for various surfaces and applications",
    features: ["Portable & Lightweight", "Multiple Ink Colors", "Customizable Printing"],
    bgColor: "from-indigo-800 to-blue-600",
    products: [
      {
        name: "Handheld Inkjet Printer",
        image: "/images/products/Handheld-Inkjet-Printer.png"
      },
      {
        name: "Inkjet Cartridges",
        image: "/images/products/Handheld-Inkjet-Printer.png"
      }
    ]
  },
  {
    id: "consumables",
    title: "Consumables",
    description: "Labels, ribbons and other consumables for your AIDC equipment",
    features: ["Thermal Transfer Ribbons", "Barcode Labels", "Long-lasting Quality"],
    bgColor: "from-green-800 to-blue-700",
    products: [
      {
        name: "Labels & Ribbons",
        image: "/images/products/Consumables.png"
      },
      {
        name: "Thermal Paper Rolls",
        image: "/images/products/Consumables.png"
      }
    ]
  }
];

// Industry data
const industries = [
  { name: "Retail", icon: "🛒", color: "bg-blue-400" },
  { name: "Healthcare", icon: "🏥", color: "bg-green-400" },
  { name: "Manufacturing", icon: "🏭", color: "bg-yellow-400" },
  { name: "Logistics", icon: "🚚", color: "bg-red-400" },
  { name: "Education", icon: "🎓", color: "bg-purple-400" },
  { name: "Government", icon: "🏛️", color: "bg-indigo-400" },
  { name: "Hospitality", icon: "🏨", color: "bg-pink-400" },
  { name: "Finance", icon: "💰", color: "bg-emerald-400" },
  { name: "Automotive", icon: "🚗", color: "bg-orange-400" },
  { name: "Pharmaceuticals", icon: "💊", color: "bg-cyan-400" }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const industriesRef = useRef<HTMLDivElement>(null);

  // Auto-advance categories with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev === productCategories.length - 1 ? 0 : prev + 1));
    }, 8000); // Longer duration for better reading experience
    return () => clearInterval(interval);
  }, []);

  // Enhanced industry animation
  useEffect(() => {
    if (industriesRef.current) {
      const container = industriesRef.current;
      const scrollWidth = container.scrollWidth;
      const viewportWidth = container.offsetWidth;

      // Only animate if content is wider than container
      if (scrollWidth > viewportWidth) {
        let scrollPosition = 0;
        const scrollSpeed = 1.5; // Slightly faster animation

        const animate = () => {
          scrollPosition = (scrollPosition + scrollSpeed) % (scrollWidth / 2);
          container.scrollLeft = scrollPosition;
          requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", inquiry: "" });

    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Hero Section with Product Categories */}
      <section className="relative h-[85vh] min-h-[650px] overflow-hidden">
        {/* Dynamic background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${productCategories[activeCategory].bgColor} transition-all duration-1000`}></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-white/20 blur-3xl"></div>
            <div className="absolute top-[60%] -right-[5%] w-[30%] h-[30%] rounded-full bg-white/20 blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 w-full max-w-6xl shadow-2xl border border-white/20 transition-all duration-300 hover:shadow-purple-500/30 hover:border-purple-300/30 group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fadeIn">
                  {productCategories[activeCategory].title}
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-6 animate-fadeIn animation-delay-200">
                  {productCategories[activeCategory].description}
                </p>

                {/* Features list */}
                <ul className="mb-8 space-y-2 animate-fadeIn animation-delay-300">
                  {productCategories[activeCategory].features.map((feature, i) => (
                    <li key={i} className="flex items-center text-blue-100">
                      <svg className="w-5 h-5 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-400">
                  <Link
                    href={`/products?main=${productCategories[activeCategory].id}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 text-center bg-white text-blue-800 hover:bg-gray-100 hover:scale-105 shadow-lg group-hover:shadow-purple-300/50"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    Explore {productCategories[activeCategory].title}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 text-center bg-transparent text-white border-2 border-white hover:bg-white/10 hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {productCategories[activeCategory].products.map((product, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-36 h-36 md:w-44 md:h-44 animate-float transition-all duration-500 group-hover:shadow-purple-500/50 group-hover:drop-shadow-2xl bg-white/10 rounded-xl p-2 hover:bg-white/20">
                      <div className="absolute inset-0 rounded-xl bg-white/5 blur-sm transform scale-95 group-hover:bg-purple-500/10"></div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={160}
                        height={160}
                        className="object-contain drop-shadow-xl group-hover:drop-shadow-2xl z-10 relative"
                      />
                    </div>
                    <p className="mt-2 text-white text-center text-sm font-medium">{product.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {productCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    index === activeCategory ? "bg-white w-10" : "bg-white/50 w-3 hover:bg-white/80"
                  } ${index === activeCategory ? "group-hover:bg-purple-400 group-hover:w-10" : "group-hover:bg-purple-300/50 group-hover:w-3 hover:group-hover:bg-purple-300/80"}`}
                  aria-label={`View ${category.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Centralized */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 relative inline-block">
              Why Choose Scantech?
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              We are the pioneers in AIDC Industry with over 15 years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Quality Products</h3>
              <p className="text-gray-600 text-center text-lg">
                We offer high-quality AIDC products that are reliable, durable, and designed for optimal performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Expert Support</h3>
              <p className="text-gray-600 text-center text-lg">
                Our team of experts provides comprehensive support to ensure your AIDC solutions work seamlessly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Industry Experience</h3>
              <p className="text-gray-600 text-center text-lg">
                With over 15 years in the industry, we have the expertise to provide the best solutions for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Enhanced Animation */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative inline-block">
              Industries We Serve
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-blue-400 rounded-full"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Our solutions are used across various industries to improve efficiency and accuracy
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden py-8">
          <div
            ref={industriesRef}
            className="flex space-x-8 py-6 whitespace-nowrap overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {/* Duplicate the industries array to create a seamless loop */}
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center justify-center min-w-[180px] p-6 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg transform transition-all hover:scale-105 hover:bg-white/30"
              >
                <div className={`text-5xl mb-4 p-4 rounded-full ${industry.color} bg-opacity-20 shadow-inner`}>{industry.icon}</div>
                <h3 className="text-xl font-medium text-white">{industry.name}</h3>
              </div>
            ))}
          </div>

          {/* Enhanced gradient overlays for smooth fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-blue-800 via-blue-800/90 to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-indigo-900 via-indigo-900/90 to-transparent z-10"></div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 relative inline-block">
              Get In Touch
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Have questions or need assistance? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Form</h2>
                </div>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-6 flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Thank you for your message! We'll get back to you soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-500 font-medium"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-500 font-medium"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="inquiry" className="block text-gray-700 font-medium mb-2">
                        Your Inquiry
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <textarea
                          id="inquiry"
                          name="inquiry"
                          value={formData.inquiry}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-500 font-medium"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl overflow-hidden text-white transform transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Our Commitment</h3>
                </div>

                <p className="mb-8 text-blue-100 text-lg">
                  We are committed to providing the best AIDC solutions tailored to your specific business needs.
                </p>

                <ul className="space-y-4">
                  {[
                    "Quality products at competitive prices",
                    "Excellent customer service",
                    "Technical support and maintenance",
                    "Custom solutions for unique requirements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-300 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-blue-500">
                  <div className="flex items-center mb-4 hover:text-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-lg">+91 9392455260</span>
                  </div>
                  <div className="flex items-center hover:text-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg">Sales@scantech.co.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

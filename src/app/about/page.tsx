import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Scantech</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Leading solution provider for all AIDC requirements
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Story
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Pioneers in the AIDC Industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Scantech is a leading solution provider for all AIDC (Automatic Identification and Data Capture) requirements. We are the pioneers in the AIDC Industry and are proud to have prestigious customers in retail, pharma, manufacturing, transportation & logistics, education, government, and healthcare industries.
              </p>
              <p className="text-gray-700 mb-6">
                With over 15 years of experience, we have established ourselves as a trusted partner for businesses looking to implement efficient data capture solutions. Our team of experts is dedicated to providing high-quality products and exceptional service to meet the unique needs of each client.
              </p>
              <p className="text-gray-700">
                We are thankful to our customers for having faith in us and for giving us an opportunity to serve them better than others. Our commitment to excellence and customer satisfaction has been the cornerstone of our success.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about_us.jpeg"
                  alt="Scantech Team"
                  fill
                  className="object-cover"
                />
                {/* Experience badge */}
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <div className="text-center text-white">
                    <div className="text-lg font-bold">15+</div>
                    <div className="text-xs">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Mission
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Providing innovative AIDC solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 text-lg mb-8">
              Our mission is to provide innovative and reliable AIDC solutions that help businesses streamline their operations, improve efficiency, and enhance customer experiences. We strive to be at the forefront of technological advancements in the industry and deliver products and services that exceed our customers' expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We continuously explore new technologies and solutions to stay ahead in the rapidly evolving AIDC industry.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-300">
                  We are committed to providing high-quality products that are reliable, durable, and designed for optimal performance.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-gray-300">
                  We prioritize our customers' needs and strive to build long-lasting relationships based on trust and mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section - Redesigned */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 relative inline-block">
              Our Expertise
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Comprehensive AIDC solutions tailored for your industry needs
            </p>
          </div>

          {/* Products Section with Icons and Cards */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Our Products</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Barcode Printers */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">Barcode Printers</h4>
                <p className="text-gray-600 text-center text-sm">High-quality thermal and thermal transfer printers</p>
              </div>

              {/* Barcode Scanners */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">Barcode Scanners</h4>
                <p className="text-gray-600 text-center text-sm">Wired, wireless, and 2D scanning solutions</p>
              </div>

              {/* EAS Systems */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">EAS Systems</h4>
                <p className="text-gray-600 text-center text-sm">Advanced anti-theft protection for retail</p>
              </div>

              {/* POS Systems */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">POS Systems</h4>
                <p className="text-gray-600 text-center text-sm">Windows & Android point of sale solutions</p>
              </div>

              {/* Thermal Printers */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">Thermal Printers</h4>
                <p className="text-gray-600 text-center text-sm">Fast and reliable receipt printing solutions</p>
              </div>

              {/* Waiter Calling */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">Waiter Calling</h4>
                <p className="text-gray-600 text-center text-sm">Efficient restaurant service management</p>
              </div>

              {/* Inkjet Printers */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">Inkjet Printers</h4>
                <p className="text-gray-600 text-center text-sm">Handheld printing for various surfaces</p>
              </div>

              {/* Consumables */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">Consumables</h4>
                <p className="text-gray-600 text-center text-sm">Labels, ribbons, and other supplies</p>
              </div>
            </div>
          </div>

          {/* Industries Section with Hexagon Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Industries We Serve</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Retail */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-white">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🛒</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Retail</h4>
                <p className="text-blue-100 text-center text-sm">Streamline checkout and inventory management</p>
              </div>

              {/* Pharmaceutical */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-white">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">💊</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Pharmaceutical</h4>
                <p className="text-green-100 text-center text-sm">Ensure accuracy in medication tracking</p>
              </div>

              {/* Manufacturing */}
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-white">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🏭</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Manufacturing</h4>
                <p className="text-yellow-100 text-center text-sm">Optimize production and quality control</p>
              </div>

              {/* Logistics */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-white">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🚚</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Logistics</h4>
                <p className="text-red-100 text-center text-sm">Track shipments and manage supply chain</p>
              </div>

              {/* Education */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-white">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🎓</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Education</h4>
                <p className="text-purple-100 text-center text-sm">Manage assets and student identification</p>
              </div>

              {/* Government */}
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-white">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🏛️</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Government</h4>
                <p className="text-indigo-100 text-center text-sm">Secure document and asset tracking</p>
              </div>

              {/* Healthcare */}
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-white">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🏥</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Healthcare</h4>
                <p className="text-pink-100 text-center text-sm">Patient safety and medical inventory</p>
              </div>

              {/* Hospitality */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-white">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🏨</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Hospitality</h4>
                <p className="text-teal-100 text-center text-sm">Enhance guest experience and operations</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6">Let our expertise work for you. We provide tailored AIDC solutions for businesses of all sizes.</p>
              <a href="/contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Contact Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

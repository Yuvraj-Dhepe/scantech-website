"use client";
import Link from "next/link";

export default function BenefitsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Benefits of E-waste Recycling</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Environmental and economic advantages of proper electronic waste management
            </p>
            <Link href="/e-waste-management" className="inline-flex items-center text-white hover:text-green-200 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to E-Waste Management
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits of E-waste Recycling Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
              <span className="relative inline-block">
                Benefits of E-waste Recycling
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"></div>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Conserves Natural Resources</h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Materials recovered from old electronics can be used to make new products, reducing the need to mine for new raw materials. Various metals, plastics, and glass can be recycled and reused.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Supports the Community</h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Donating old electronics helps provide refurbished products to low-income families, schools, and non-profit organizations, giving them access to technology they might not otherwise afford.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Creates Employment</h3>
                </div>
                <p className="text-gray-600 ml-16">
                  With approximately 90% of electronic equipment being recyclable, the e-waste recycling industry creates new jobs in collection, processing, and manufacturing using recovered materials.
                </p>
              </div>
              
              {/* Benefit 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Protects Health & Environment</h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Proper e-waste recycling keeps toxic materials like lead, mercury, and cadmium from harming humans or the environment. These hazardous materials are present in many electronics and can be dangerous if disposed of improperly.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-green-600 text-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-2xl font-bold">Our Commitment</h3>
              </div>
              <p className="text-green-100 mb-4">
                Instead of keeping old electronics in the house or dumping them in landfills, recycling or reusing them is the appropriate option that should be supported by individuals and organizations. At Scantech, we are committed to responsible e-waste management and recycling.
              </p>
              <p className="text-green-100 font-semibold">
                Considering the benefits of electronics recycling, it is very important that people in various parts around the world embrace this concept.
              </p>
            </div>
            
            {/* Navigation */}
            <div className="mt-12 flex flex-wrap justify-between items-center">
              <Link href="/e-waste-management" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Overview
              </Link>
              <Link href="/e-waste-management/collection-mechanism" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                Next: Collection Mechanism
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

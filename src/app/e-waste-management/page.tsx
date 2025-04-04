"use client";
import Link from "next/link";

export default function EWasteManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">E-Waste Management</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Our commitment to responsible electronic waste disposal
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-4 border-green-200">
                  Introduction to E-Waste
                </h2>

                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-4">
                    Electronic waste, or e-waste, is a term for electronic products that have become unwanted, non-working or obsolete, and have essentially reached the end of their useful life.
                  </p>

                  <p className="mb-4">
                    As per E-waste Rule 2016, the E-waste is defined as 'electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejects from manufacturing, refurbishment and repair processes'.
                  </p>

                  <div className="flex flex-col md:flex-row gap-8 items-center my-8">
                    <div className="md:w-1/2">
                      <p className="mb-4">
                        E-waste contains many valuable, recoverable materials such as aluminum, copper, gold, silver, plastics, and ferrous metals. In order to conserve natural resources and the energy needed to produce new electronic equipment from virgin resources, electronic equipment can be refurbished, reused, and recycled instead of being land-filled.
                      </p>

                      <p className="mb-4">
                        E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water.
                      </p>
                    </div>

                    <div className="md:w-1/2 bg-green-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Why E-Waste Management Matters</h3>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Prevents toxic materials from harming the environment</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Recovers valuable materials for reuse</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Reduces the need for landfill space</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conserves natural resources and energy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation to other sections */}
            <div className="mt-8 mb-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">Explore Our E-Waste Management Sections</h3>
              <p className="text-gray-600">Click on any section below to learn more</p>
              <div className="mt-2 flex justify-center">
                <svg className="w-6 h-6 text-green-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/e-waste-management/benefits" className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center relative z-10">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Benefits of E-waste Recycling
                </h3>
                <p className="text-gray-600 relative z-10">Learn about the environmental and economic benefits of recycling electronic waste.</p>
                <div className="mt-4 text-green-600 flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>

              <Link href="/e-waste-management/collection-mechanism" className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center relative z-10">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Collection Mechanism
                </h3>
                <p className="text-gray-600 relative z-10">Discover how we collect e-waste through our buy-back scheme and direct collection.</p>
                <div className="mt-4 text-green-600 flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>

              <Link href="/e-waste-management/recycling-process" className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center relative z-10">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Recycling Process
                </h3>
                <p className="text-gray-600 relative z-10">Understand our step-by-step process for recycling electronic waste responsibly.</p>
                <div className="mt-4 text-green-600 flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>

              <Link href="/e-waste-management/dos-and-donts" className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center relative z-10">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Do's and Don'ts
                </h3>
                <p className="text-gray-600 relative z-10">Learn the best practices for handling and disposing of electronic waste.</p>
                <div className="mt-4 text-green-600 flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>

              <Link href="/e-waste-management/collection-points" className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden md:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center relative z-10">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Collection Points
                </h3>
                <p className="text-gray-600 relative z-10">Find the nearest collection center to drop off your electronic waste.</p>
                <div className="mt-4 text-green-600 flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                  View all collection points
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

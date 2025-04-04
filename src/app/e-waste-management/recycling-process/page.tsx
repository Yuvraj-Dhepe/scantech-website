"use client";
import Link from "next/link";

export default function RecyclingProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Recycling Process</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Our step-by-step approach to recycling electronic waste
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

      {/* Recycling Process Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
              <span className="relative inline-block">
                Our Recycling Process
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"></div>
              </span>
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-10">
              <div className="p-8">
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-6">
                    We have partnered with <span className="font-semibold">E-Waste Recyclers India</span>, an authorized e-waste recycler, to ensure proper disposal and recycling of electronic waste. Our recycling process follows environmentally sound practices and complies with all regulatory requirements.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Recycling Partner</h3>
                    <p className="mb-2">
                      <span className="font-semibold">E-Waste Recyclers India</span><br />
                      Plot No. 1, Khasra No. 45, Mundka Industrial Area, Near Karala Mod, New Delhi - 110041
                    </p>
                    <p>
                      <span className="font-semibold">Registration No:</span> B-29016(2021)/2-HCL-3124
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-6">The Recycling Process</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-green-600">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Collection</h4>
                      <p className="text-gray-600">E-waste is collected through our buy-back scheme, direct collection from customer premises, or drop-off at collection centers.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Transportation</h4>
                      <p className="text-gray-600">The collected e-waste is transported to our recycling partner's facility using environmentally safe methods.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Sorting & Dismantling</h4>
                      <p className="text-gray-600">E-waste is sorted by type and dismantled to separate different components like circuit boards, plastics, metals, and batteries.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-green-600">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Material Recovery</h4>
                      <p className="text-gray-600">Valuable materials like gold, silver, copper, and aluminum are recovered using specialized processes.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-green-600">5</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Hazardous Material Handling</h4>
                      <p className="text-gray-600">Hazardous materials are carefully handled and disposed of according to environmental regulations.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-green-600">6</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Recycling & Reuse</h4>
                      <p className="text-gray-600">Recovered materials are sent to manufacturers for recycling and reuse in new products.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-600 text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Commitment to Sustainability</h3>
              <p className="text-green-100 mb-4">
                At Scantech, we are committed to reducing the environmental impact of electronic waste. Our recycling process ensures that valuable resources are recovered and hazardous materials are properly handled, contributing to a more sustainable future.
              </p>
              <p className="text-green-100">
                We continuously work to improve our e-waste management practices and encourage our customers to participate in responsible disposal of electronic products.
              </p>
            </div>
            
            {/* Navigation */}
            <div className="mt-12 flex flex-wrap justify-between items-center">
              <Link href="/e-waste-management/collection-mechanism" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Previous: Collection Mechanism
              </Link>
              <Link href="/e-waste-management/dos-and-donts" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                Next: Do's and Don'ts
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

"use client";
import Link from "next/link";

export default function CollectionMechanismPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Collection Mechanism</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              How we collect and manage electronic waste
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

      {/* Collection Mechanism Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
              <span className="relative inline-block">
                Collection Mechanism of E-waste
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"></div>
              </span>
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-10">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Buy-back Scheme</h3>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600 ml-16">
                  <p className="mb-4">
                    Under our Buy-back Scheme, if you want to discard your old product, you may call at our Toll Free number <span className="font-bold text-green-600">(1800-102-5679)</span> and our representatives will approach you to buy the discarded product.
                  </p>
                  
                  <p className="mb-4">
                    You are also free to deposit the discarded product at the nearest collection point and receive a discount voucher, making you eligible for a discount on the purchase of selected new products from our company.
                  </p>
                  
                  <p>
                    We coordinate with independent vendors who may sell the e-waste/EOL products collected by them. We continuously update our scheme based on implementation experience on a quarterly basis.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Direct Collection from Customer's Premises</h3>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600 ml-16">
                  <p className="mb-4">
                    For e-waste collection, we have set up a toll-free number where any customer may call and register to either deposit their old product free of cost or participate in our buy-back program.
                  </p>
                  
                  <p className="mb-4">
                    Our toll-free number is available on product manuals, our website, social networking platforms, and at various connected premises for customer information regarding e-waste disposal.
                  </p>
                  
                  <p>
                    Customers can directly call these numbers, and the e-waste will be collected by our company or our recycler partner. We have partnered with recyclers who manage logistics services through TCI EXPRESS LIMITED, available at most locations through their collection centers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-green-50 rounded-xl p-8 border border-green-200 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Need to dispose of e-waste?</h3>
                <p className="text-gray-600">Call our toll-free number for assistance with e-waste disposal</p>
              </div>
              <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-md">
                <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-2xl font-bold text-green-600">1800-102-5679</span>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="mt-12 flex flex-wrap justify-between items-center">
              <Link href="/e-waste-management/benefits" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Previous: Benefits
              </Link>
              <Link href="/e-waste-management/recycling-process" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                Next: Recycling Process
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

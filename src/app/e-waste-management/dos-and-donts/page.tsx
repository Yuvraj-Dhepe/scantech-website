"use client";
import Link from "next/link";

export default function DosAndDontsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Do's and Don'ts</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Best practices for handling and disposing of electronic waste
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

      {/* Do's and Don'ts Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
              <span className="relative inline-block">
                Do's and Don'ts for E-waste Disposal
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"></div>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Do's */}
              <div className="bg-green-50 rounded-xl shadow-lg overflow-hidden border border-green-200">
                <div className="bg-green-600 py-4 px-6">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Do's
                  </h3>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Look for information on the catalog with your product for end-of-life equipment handling.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Ensure that only the authorized recyclers/dismantlers handle your electronic products.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Call our toll-free number or visit our website to dispose of electronic waste.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Always drop your used electronic products, batteries, or accessories at authorized collection points.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Keep the e-waste in an isolated area, after it becomes non-functional or unrepairable.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Don'ts */}
              <div className="bg-red-50 rounded-xl shadow-lg overflow-hidden border border-red-200">
                <div className="bg-red-600 py-4 px-6">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Don'ts
                  </h3>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">Do not dismantle your electronic products on your own.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">Do not dispose of e-waste in garbage bins along with municipal waste.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">Do not sell e-waste to informal and unorganized sectors like scrap dealers.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">Do not keep e-waste in open and expose it to extreme weather conditions.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">Do not attempt to burn or dispose of your e-waste if it is not working or repairable.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why These Guidelines Matter</h3>
              <p className="text-gray-600 mb-4">
                Following these guidelines ensures that e-waste is handled in an environmentally responsible manner. Proper disposal prevents toxic materials from entering the environment and allows valuable resources to be recovered and reused.
              </p>
              <p className="text-gray-600">
                By adhering to these do's and don'ts, you contribute to a more sustainable future and help protect both human health and the environment from the potential hazards of improperly disposed electronic waste.
              </p>
            </div>
            
            {/* Navigation */}
            <div className="mt-12 flex flex-wrap justify-between items-center">
              <Link href="/e-waste-management/recycling-process" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Previous: Recycling Process
              </Link>
              <Link href="/e-waste-management/collection-points" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                Next: Collection Points
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

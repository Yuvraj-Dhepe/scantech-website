"use client";
import Link from "next/link";
import { useState } from "react";

// Define types for our collection point and sort fields
type CollectionPoint = {
  state: string;
  city: string;
  address: string;
  contactPerson: string;
  contactNumber: string;
};

type SortField = 'state' | 'city' | 'contactPerson' | 'contactNumber' | '';

export default function CollectionPointsPage() {
  // State for filters
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [contactPersonFilter, setContactPersonFilter] = useState("");
  const [contactNumberFilter, setContactNumberFilter] = useState("");
  
  // State for sorting
  const [sortField, setSortField] = useState<SortField>("");
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>("asc");
  
  // Collection points data
  const collectionPoints: CollectionPoint[] = [
    { state: "Andhra Pradesh", city: "Vishakhapatnam", address: "TCI EXPRESS LIMITED, C/o-TRANSPORT HOUSE JAIL ROAD OPP JUDGE COURT BESIDE CMR SHOPPING MALL, VISHAKHAPATNAM – 530020", contactPerson: "Vikram", contactNumber: "8912513411" },
    { state: "Assam", city: "Guwahati", address: "TCI EXPRESS LTD, DAG NO 3488,3489 AND 3513, PATTA NO 2334,1815 AND 115. VILLAGE: SASUAJAI MOUZA, BEHARBARI OPPOSITE OLD ABC INDIA LTD. GODOWN, BELTOLA, GUWAHATI – 781028", contactPerson: "Hirdyesh", contactNumber: "7578011627" },
    { state: "Bihar", city: "Patna", address: "TCI EXPRESS LIMITED, Plot No-B26,28, TRANSPORT HOUSE TRANSPORT NAGAR GATE. NO 2, NEW BY PASS NEAR ZERO MILE, PATNA – 800026", contactPerson: "Sharavan Dubai", contactNumber: "8051237580" },
    { state: "Haryana", city: "Ambala", address: "TCI EXPRESS LIMITED, PLOT NO. 139/139A, NR.DHUULKOT VILLAGE, MODEL TOWN CROSSING, AMBALA CITY, AMBALA- 134003", contactPerson: "Amresh", contactNumber: "7027546203" },
    { state: "Chandigarh", city: "Chandigarh", address: "TCI EXPRESS LIMITED, Plot No-21 TRANSPORT HOUSE, SEC-26, TRANSPORT AREA, CHANDIGARH – 160019", contactPerson: "Varun", contactNumber: "8558896108" },
    { state: "Delhi", city: "New Delhi", address: "TCI EXPRESS LIMITED, Plot No-10, RAMBAGH, OLD ROHTAK ROAD, NEW_DELHI- 110007", contactPerson: "Sati Ram", contactNumber: "9711626380" },
    { state: "Goa", city: "Goa", address: "TCI EXPRESS LIMITED, SHOP NO-7 ASMAS ARCADE, CHAR-RASTA, KARASWADA BARDEZ, GOA- 403526", contactPerson: "Ajay", contactNumber: "8368858693" },
    { state: "Gujarat", city: "Ahmedabad", address: "TCI EXPRESS LIMITED, Plot No-5, GANESH ESTATE, BEHIND SURBHI GUEST HOUSE, SARKHEJ BAVLA HIGHWAY, MORAIYA PATIYA, TEH.SANAND AHMEDABAD – 382213", contactPerson: "Praveen Sharma", contactNumber: "7574898428" },
    { state: "Haryana", city: "Gurgaon", address: "TCI EXPRESS LIMITED, PLOT NO 9, JATAULI HALEY MANDI, TEH. PATAUDI, GURGAON-122504", contactPerson: "Santosh", contactNumber: "9582336268" },
    { state: "Jammu & Kashmir", city: "Jammu", address: "TCI EXPRESS LTD, C/0-BALI ESTATE OPP. J&K BANK, NEAR BATA SHOWROOM, NATIONAL HIGHWAY 1A GANGYAL, JAMMU- 180010", contactPerson: "Hemraj", contactNumber: "7291961858" },
    { state: "Karnataka", city: "Bangalore", address: "TCI EXPRESS LIMITED, PLOT NO-C-327, PENEYA INDUSTRIAL ESTATE, FIRST STAGE, BANGALORE- 560058", contactPerson: "Ashok", contactNumber: "9538893472" },
    { state: "Karnataka", city: "Mysore", address: "TCI EXPRESS LIMITED, PLOT NO-92 P, BELAGOLA IND AREA SY NO 50 HEBBAL VILLAGE KRS ROAD MYSORE-570016", contactPerson: "Ligin Raju", contactNumber: "9538893477" },
    { state: "Kerala", city: "Ernakulam", address: "TCI EXPRESS LIMITED, PLOT NO-C NO. 155, B, ANJIKATH VMB ROAD, PATHADIPPALAM, ERNAKULAM, KOCHI, ERNAKULAM- 682033", contactPerson: "Abdul Rahman", contactNumber: "9643549389" },
    { state: "Maharashtra", city: "Mumbai", address: "TCI EXPRESS LIMITED, UNIT NO - 76-97, GROUND FLOOR, F-WING SOLARIS-1 SAKIVAH ROAD, OPP - L&T GATE NO-6 TUNGA GAON, POWAI, MUMBAI – 400072", contactPerson: "Amish", contactNumber: "7827746144" },
    { state: "Orissa", city: "Cuttak", address: "TCI EXPRESS LIMITED, PLOT NO 1762 & 344, BETWEEN SARSTI HOSPITAL AND SAHARA OFFICE CUTTAK – 753012", contactPerson: "Naveen", contactNumber: "7381064961" },
    { state: "Pondicheri", city: "Puducherry", address: "TCI EXPRESS LIMITED, RS NO 111/3, ARYA COMPLEX THIRUMALA NAGAR, VILLIANUR ROAD, MOLLAKULAM, PUDUCHERRY – 605010", contactPerson: "Pawan Kumar", contactNumber: "8098819911" },
    { state: "Punjab", city: "Rajpura", address: "TCI EXPRESS LIMITED, SCO - 102 CHAURA BAZAR NEAR STAR HOTEL RAJPURA – 140401", contactPerson: "Satveer Singh", contactNumber: "8558899896" },
    { state: "Rajasthan", city: "Jaipur", address: "TCI EXPRESS LIMITED, C/O-NARAYAN CAMPUS, NR. APPOLO TYRE GODOWN, JAIPUR - AJMER ROAD, BHANKROTA, JAIPUR – 302026", contactPerson: "Anil", contactNumber: "7665020265" },
    { state: "Tamil Nadu", city: "Coimbatore", address: "TCI EXPRESS LIMITED, PLOT NO-2/264, N.G.G.O COLONY, IDIGARAI ROAD, COIMBATORE – 641022", contactPerson: "Ram", contactNumber: "8939865927" },
    { state: "Telangana", city: "Hyderabad", address: "TCI EXPRESS LTD, BEARING NO. 12-85/1 MEDCHAL INDUSTRIAL AREA, MEDCHAL CHECK POST, BACKSIDE SBI INDUSTRIAL BRANCH, DISTRICT- MEDCHAL HYDERABAD – 501401", contactPerson: "Hasnain", contactNumber: "8886611291" },
    { state: "Uttar Pradesh", city: "Lucknow", address: "TCI EXPRESS LIMITED, TCI HOUSE PLOT NO. A-332, GROUND FLOOR TRANSPORT NAGAR, KANPUR ROAD LUCKNOW – 226012", contactPerson: "Naveen", contactNumber: "7570004560" },
    { state: "Uttar Pradesh", city: "Meerut", address: "TCI EXPRESS LIMITED, PLOT NO B-14, BEHIND SHEKHU PETROL PUMP, TRANSPORT NAGAR MEERUT – 250001", contactPerson: "Jitender Singh", contactNumber: "7570004577" },
    { state: "Uttaranchal", city: "Dehradun", address: "TCI EXPRESS LIMITED, PLOT NO B 1 TRANSPORT NAGAR SAHARANPUR ROAD DEHRADUN – 248001", contactPerson: "Bajrangi Yadav", contactNumber: "7570004581" },
    { state: "Uttaranchal", city: "Haridwar", address: "TCI EXPRESS LIMITED, G-01/03 AND 04 TRANSPORT NAGAR VILLAGE- SARAI NEAR SABJI MANDI JWALAPUR. HARIDWAR – 249404", contactPerson: "Pankaj Kumar", contactNumber: "7570004570" },
    { state: "West Bengal", city: "Kolkata", address: "TCI EXPRESS LIMITED, PLOT NO-3A, MAHENDRALOY LANE, MARUTI BAGAN NEAR MS MOTOR TOPSIA KOLKATA – 700046", contactPerson: "Vismay", contactNumber: "8336937705" }
  ];
  
  // Function to handle sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // New field, set to ascending
      setSortField(field);
      setSortDirection("asc");
    }
  };
  
  // Filter and sort the collection points
  const filteredPoints = collectionPoints
    .filter(point => {
      return (
        point.state.toLowerCase().includes(stateFilter.toLowerCase()) &&
        point.city.toLowerCase().includes(cityFilter.toLowerCase()) &&
        point.contactPerson.toLowerCase().includes(contactPersonFilter.toLowerCase()) &&
        point.contactNumber.toLowerCase().includes(contactNumberFilter.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (!sortField) return 0;
      
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (sortDirection === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
    
  // Get sort icon based on current sort state
  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return (
        <svg className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    } else if (sortDirection === "asc") {
      return (
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      );
    } else {
      return (
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Collection Points</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Locations where you can drop off your electronic waste
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

      {/* Collection Points Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
              <span className="relative inline-block">
                Collection Points
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"></div>
              </span>
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-10">
              <div className="p-8">
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    We have partnered with TCI EXPRESS LIMITED for the collection of e-waste. You can drop off your e-waste at any of the following collection centers:
                  </p>
                </div>
                
                {/* Search Filters */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label htmlFor="stateFilter" className="block text-sm font-medium text-gray-700 mb-1">Filter by State/UT</label>
                    <input
                      type="text"
                      id="stateFilter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Search state..."
                      value={stateFilter}
                      onChange={(e) => setStateFilter(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="cityFilter" className="block text-sm font-medium text-gray-700 mb-1">Filter by City</label>
                    <input
                      type="text"
                      id="cityFilter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Search city..."
                      value={cityFilter}
                      onChange={(e) => setCityFilter(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPersonFilter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Contact Person</label>
                    <input
                      type="text"
                      id="contactPersonFilter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Search contact person..."
                      value={contactPersonFilter}
                      onChange={(e) => setContactPersonFilter(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactNumberFilter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Contact Number</label>
                    <input
                      type="text"
                      id="contactNumberFilter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Search contact number..."
                      value={contactNumberFilter}
                      onChange={(e) => setContactNumberFilter(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <thead className="bg-gradient-to-r from-green-700 to-green-600 text-white">
                      <tr>
                        <th
                          className="py-4 px-4 text-left font-bold border-b relative cursor-pointer group text-lg"
                          onClick={() => handleSort('state')}
                        >
                          <div className="flex items-center">
                            <span className="border-b-2 border-white pb-1">State/UT</span>
                            {getSortIcon('state')}
                          </div>
                        </th>
                        <th
                          className="py-4 px-4 text-left font-bold border-b relative cursor-pointer group text-lg"
                          onClick={() => handleSort('city')}
                        >
                          <div className="flex items-center">
                            <span className="border-b-2 border-white pb-1">City</span>
                            {getSortIcon('city')}
                          </div>
                        </th>
                        <th className="py-4 px-4 text-left font-bold border-b text-lg">Address</th>
                        <th
                          className="py-4 px-4 text-left font-bold border-b relative cursor-pointer group text-lg"
                          onClick={() => handleSort('contactPerson')}
                        >
                          <div className="flex items-center">
                            <span className="border-b-2 border-white pb-1">Contact Person</span>
                            {getSortIcon('contactPerson')}
                          </div>
                        </th>
                        <th
                          className="py-4 px-4 text-left font-bold border-b relative cursor-pointer group text-lg"
                          onClick={() => handleSort('contactNumber')}
                        >
                          <div className="flex items-center">
                            <span className="border-b-2 border-white pb-1">Contact Number</span>
                            {getSortIcon('contactNumber')}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredPoints.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-gray-500 bg-gray-50">
                            <div className="flex flex-col items-center justify-center">
                              <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <p className="text-lg font-medium">No collection points found</p>
                              <p className="text-sm">Try adjusting your search filters</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredPoints.map((point, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 transition-all duration-150 hover:shadow-md"
                          >
                            <td className="py-3 px-4 border-b font-medium text-green-800 bg-green-100">{point.state}</td>
                            <td className="py-3 px-4 border-b font-medium text-blue-800 bg-blue-50">{point.city}</td>
                            <td className="py-3 px-4 border-b text-gray-700 bg-white">{point.address}</td>
                            <td className="py-3 px-4 border-b font-medium text-purple-800 bg-purple-50">{point.contactPerson}</td>
                            <td className="py-3 px-4 border-b font-medium text-orange-800 bg-orange-50">{point.contactNumber}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="italic text-sm text-gray-600">
                    Note: Please call the respective collection center before visiting to confirm operating hours and availability.
                  </p>
                  <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    Showing <span className="font-semibold">{filteredPoints.length}</span> of <span className="font-semibold">{collectionPoints.length}</span> collection points
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-600 text-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold">Important Information</h3>
              </div>
              <p className="text-green-100 mb-4">
                For any queries related to e-waste management or to request a pickup, please contact us at our toll-free number <span className="font-bold">1800-102-5679</span> or email us at <span className="font-bold">ewaste@scantech.co.in</span>.
              </p>
              <p className="text-green-100">
                Together, we can make a difference in reducing electronic waste and protecting our environment for future generations.
              </p>
            </div>
            
            {/* Navigation */}
            <div className="mt-12 flex flex-wrap justify-between items-center">
              <Link href="/e-waste-management/dos-and-donts" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Previous: Do's and Don'ts
              </Link>
              <Link href="/e-waste-management" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                Back to Overview
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

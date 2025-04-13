"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Define download item type
interface DownloadItem {
  name: string;
  url: string;
  category: string;
  subcategory: string;
  type: "pdf" | "exe" | "rar" | "jpg" | "other";
}

export default function DownloadsPage() {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredDownloads, setFilteredDownloads] = useState<DownloadItem[]>([]);

  // All downloads data
  const allDownloads: DownloadItem[] = [
    // Barcode Printer Brochures
    { name: "Scantech Brochure ST-500U-UB", url: "/assets/downloads/brochures/barcode-printer/Scantech-Broucher-ST-500U-UB.pdf", category: "brochures", subcategory: "barcode-printer", type: "pdf" },
    { name: "SBarco T4eS", url: "/assets/downloads/brochures/barcode-printer/SBarco-T4eS.pdf", category: "brochures", subcategory: "barcode-printer", type: "pdf" },
    { name: "T4", url: "/assets/downloads/brochures/barcode-printer/T4.jpg", category: "brochures", subcategory: "barcode-printer", type: "jpg" },
    { name: "Scantech Brochure ST-428B", url: "/assets/downloads/brochures/barcode-printer/Scantech-Broucher-ST-428B.pdf", category: "brochures", subcategory: "barcode-printer", type: "pdf" },

    // Barcode Scanner Brochures
    { name: "ST-1011 Laser Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-1011-Laser-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-1021 Linear CCD Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-1021-Linear-CCD-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-1011W Wireless Laser Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-1011W-Wireless-Laser-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-1021W Wireless CCD Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-1021W-Wireless-CCD-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-904 Wireless Laser Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-904-Wireless-Laser-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-1503 Wireless CCD Barcode Scanner New", url: "/assets/downloads/brochures/barcode-scanner/ST-1503-Wireless-CCD-Barcode-Scanner-New.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-1402 Bluetooth Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-1402-Bluetooth-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-2040 2D Wire Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-2040-2D-Wire-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-2403WB Wireless Bluetooth Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-2403WB-Wireless-Bluetooth-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-2010W 2D Wireless Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-2010W-2D-Wireless-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-2020W 433 Wireless 2D Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-2020W-433-Wireless-2D-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-2503 2D Wireless Barcode Scanner", url: "/assets/downloads/brochures/barcode-scanner/ST-2503-2D-Wireless-Barcode-Scanner.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-2100 2D Omnidirectional Barcode Scanner New", url: "/assets/downloads/brochures/barcode-scanner/ST-2100-2D-Omnidirectional-Barcode-Scanner-New.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-3000 2D Omni New", url: "/assets/downloads/brochures/barcode-scanner/ST-3000-2D-Omni-New.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },
    { name: "ST-523 PDA", url: "/assets/downloads/brochures/barcode-scanner/ST-523-PDA.pdf", category: "brochures", subcategory: "barcode-scanner", type: "pdf" },

    // POS Printer Brochures
    { name: "Scantech ST-82USE", url: "/assets/downloads/brochures/pos-printer/Scantech-ST-82USE.pdf", category: "brochures", subcategory: "pos-printer", type: "pdf" },
    { name: "ST-58BT Mobile Bluetooth Printer", url: "/assets/downloads/brochures/pos-printer/ST-58BT-Mobile-Bluetooth-Printer.pdf", category: "brochures", subcategory: "pos-printer", type: "pdf" },
    { name: "ST-80BT specification", url: "/assets/downloads/brochures/pos-printer/ST-80BT-specification.pdf", category: "brochures", subcategory: "pos-printer", type: "pdf" },
    { name: "ST-81BT Bluetooth Mobile Printer", url: "/assets/downloads/brochures/pos-printer/ST-81BT-Bluetooth-Mobile-Printer.pdf", category: "brochures", subcategory: "pos-printer", type: "pdf" },
    { name: "ST-81UE UBW Thermal Receipt Printer", url: "/assets/downloads/brochures/pos-printer/ST-81UE-UBW-Thermal-Receipt-Printer.pdf", category: "brochures", subcategory: "pos-printer", type: "pdf" },

    // POS Brochures
    { name: "ST-520 Android PDA", url: "/assets/downloads/brochures/pos/ST-520-Android-PDA.pdf", category: "brochures", subcategory: "pos", type: "pdf" },
    { name: "ST-521 522 PDA", url: "/assets/downloads/brochures/pos/ST-521-522-PDA-.pdf", category: "brochures", subcategory: "pos", type: "pdf" },
    { name: "ST-10 Mini POS", url: "/assets/downloads/brochures/pos/ST-10-Mini-POS.pdf", category: "brochures", subcategory: "pos", type: "pdf" },
    { name: "ST-15 All in One POS New", url: "/assets/downloads/brochures/pos/ST-15-All-in-One-POS-New.pdf", category: "brochures", subcategory: "pos", type: "pdf" },
    { name: "ST-14 All in One POS", url: "/assets/downloads/brochures/pos/ST-14-All-in-One-POS.pdf", category: "brochures", subcategory: "pos", type: "pdf" },
    { name: "Cash Drawer", url: "/assets/downloads/brochures/pos/Cash-Drawer.jpg", category: "brochures", subcategory: "pos", type: "jpg" },

    // Inkjet Printer Brochures
    { name: "ST-127 Online Inkjet Printer", url: "/assets/downloads/brochures/inkjet-printer/ST-127-Online-Inkjet-Printer.pdf", category: "brochures", subcategory: "inkjet-printer", type: "pdf" },

    // EAS Brochures
    { name: "EAS", url: "/assets/downloads/brochures/eas/EAS.jpg", category: "brochures", subcategory: "eas", type: "jpg" },

    // Drivers
    { name: "ST-500 Barcode Printer Driver", url: "/assets/downloads/drivers/barcode-printer/ST-500-BARCODE-PRINTER-DRIVER.rar", category: "drivers", subcategory: "barcode-printer", type: "rar" },
    { name: "ST-500 Barcode Printer Tool", url: "/assets/downloads/drivers/barcode-printer/ST-500-Diagnostic-Tool-V1.035b.rar", category: "drivers", subcategory: "barcode-printer", type: "rar" },
    { name: "ST-82/83 Thermal Printer Driver and Tool", url: "/assets/downloads/drivers/pos-printer/ST-83-Thermal-Printer-Driver.rar", category: "drivers", subcategory: "pos-printer", type: "rar" },
    { name: "ST-82/83 Thermal Printer Tool", url: "/assets/downloads/drivers/pos-printer/ST-83-Thermal-Printer-Tools.rar", category: "drivers", subcategory: "pos-printer", type: "rar" },
    { name: "ST80Setup", url: "/assets/downloads/drivers/pos-printer/ST80Setup.exe", category: "drivers", subcategory: "pos-printer", type: "exe" },
    { name: "4BARCODE_2019.1_M-3", url: "/assets/downloads/drivers/barcode-scanner/4BARCODE_2019.1_M-3.exe", category: "drivers", subcategory: "barcode-scanner", type: "exe" },

    // Software
    { name: "Bartender Label Design Software", url: "/assets/downloads/software/label-design/BT2016_R3_3094_UL_4Barcode.exe", category: "software", subcategory: "label-design", type: "exe" },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Downloads" },
    { id: "brochures", name: "Brochures" },
    { id: "drivers", name: "Drivers & Tools" },
    { id: "software", name: "Software" },
  ];

  // Subcategories for display
  const subcategories = {
    "barcode-printer": "Barcode Printers",
    "barcode-scanner": "Barcode Scanners",
    "pos-printer": "POS Printers",
    "pos": "POS Systems",
    "inkjet-printer": "Inkjet Printers",
    "eas": "EAS Systems",
    "label-design": "Label Design"
  };

  // Filter downloads based on search term and selected category
  useEffect(() => {
    let filtered = [...allDownloads];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(search) ||
        (subcategories[item.subcategory as keyof typeof subcategories] || "").toLowerCase().includes(search)
      );
    }

    setFilteredDownloads(filtered);
  }, [searchTerm, selectedCategory]);

  // Get file icon based on type
  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return (
          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case "exe":
        return (
          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
        );
      case "rar":
        return (
          <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case "jpg":
        return (
          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  // Group downloads by subcategory for display
  const groupedDownloads = filteredDownloads.reduce((acc, item) => {
    const subcategory = item.subcategory;
    if (!acc[subcategory]) {
      acc[subcategory] = [];
    }
    acc[subcategory].push(item);
    return acc;
  }, {} as Record<string, DownloadItem[]>);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Downloads</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Access brochures, drivers, tools, and software for Scantech products
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-10 bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search downloads..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Downloads List */}
          {Object.keys(groupedDownloads).length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedDownloads).map(([subcategory, items]) => (
                <div key={subcategory} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                    <h2 className="text-xl font-semibold text-white">
                      {subcategories[subcategory as keyof typeof subcategories] || subcategory}
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
                        >
                          <div className="mr-4 transition-transform duration-300 group-hover:scale-110">
                            {getFileIcon(item.type)}
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors duration-300">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              {item.type.toUpperCase()}
                            </p>
                          </div>
                          <div className="text-blue-500 group-hover:translate-x-1 transition-transform duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="flex justify-center mb-4 text-gray-400">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No downloads found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h2>
                <p className="text-gray-600 mb-4">
                  If you can't find the download you're looking for or need assistance with installation, our support team is here to help.
                </p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Contact Support
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/about_us.jpeg"
                    alt="Customer Support"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

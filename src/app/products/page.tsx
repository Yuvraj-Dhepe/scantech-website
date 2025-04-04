"use client";

import Image from "next/image";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import productData from "@/data/products";

// Main product categories and subcategories
const mainCategories = [
  {
    id: "barcode",
    name: "Barcode",
    subcategories: ["barcode-printers", "barcode-scanners"]
  },
  {
    id: "eas",
    name: "EAS",
    subcategories: ["eas-systems"]
  },
  {
    id: "pos",
    name: "POS",
    subcategories: ["windows-pos", "android-pos", "thermal-printers", "waiter-calling"]
  },
  {
    id: "inkjet",
    name: "Handheld Inkjet Printer",
    subcategories: ["inkjet-printer"]
  },
  {
    id: "consumables",
    name: "Consumables",
    subcategories: ["labels-ribbons"]
  }
];

// Product subcategories data
const productCategories = [
  {
    id: "barcode-printers",
    name: "Barcode Printers",
    description: "High-quality barcode printers with multiple connectivity options",
    image: "/images/products/sbarco-T4e.png",
    mainCategory: "barcode"
  },
  {
    id: "barcode-scanners",
    name: "Barcode Scanners",
    description: "Fast and reliable barcode scanners with wireless connectivity",
    image: "/images/products/ST-1010W-Wireless-Laser-Barcode-Scanner.png",
    mainCategory: "barcode"
  },
  {
    id: "eas-systems",
    name: "EAS Anti-Theft Systems",
    description: "Protect your merchandise with our advanced EAS systems",
    image: "/images/products/EAS.png",
    mainCategory: "eas"
  },
  {
    id: "windows-pos",
    name: "Windows POS",
    description: "Windows-based point of sale systems for businesses",
    image: "/images/products/ST-14-Windows.png",
    mainCategory: "pos"
  },
  {
    id: "android-pos",
    name: "Android POS",
    description: "Android-based point of sale systems and PDAs",
    image: "/images/products/ST-A12.png",
    mainCategory: "pos"
  },
  {
    id: "thermal-printers",
    name: "Thermal Printers",
    description: "Fast and reliable thermal receipt printers",
    image: "/images/products/ST-83UE-UB-UW.png",
    mainCategory: "pos"
  },
  {
    id: "waiter-calling",
    name: "Waiter Calling System",
    description: "Customer waiter calling systems for restaurants",
    image: "/images/products/pos-system.png",
    mainCategory: "pos"
  },
  {
    id: "inkjet-printer",
    name: "Inkjet Printer",
    description: "Handheld inkjet printers for various surfaces",
    image: "/images/products/Handheld-Inkjet-Printer.png",
    mainCategory: "inkjet"
  },
  {
    id: "labels-ribbons",
    name: "Labels & Ribbons",
    description: "Thermal transfer ribbons and various label types",
    image: "/images/products/Consumables.png",
    mainCategory: "consumables"
  },
];

// Use imported product data
const products = productData;


// Create a client component that uses the search params
function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const mainCategoryParam = searchParams.get("main");

  const defaultMainCategory = mainCategoryParam ||
    (categoryParam ? productCategories.find(cat => cat.id === categoryParam)?.mainCategory : "barcode");

  const [activeMainCategory, setActiveMainCategory] = useState(defaultMainCategory);

  const defaultCategory = categoryParam || "barcode-printers";
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Update categories when URL parameters change
  useEffect(() => {
    if (mainCategoryParam && mainCategories.some(cat => cat.id === mainCategoryParam)) {
      setActiveMainCategory(mainCategoryParam);

      // If main category changes, set active subcategory to first one in that main category
      const subcategories = mainCategories.find(cat => cat.id === mainCategoryParam)?.subcategories || [];
      if (subcategories.length > 0 && (!categoryParam || !subcategories.includes(categoryParam))) {
        setActiveCategory(subcategories[0]);
      }
    }

    if (categoryParam && productCategories.some(cat => cat.id === categoryParam)) {
      setActiveCategory(categoryParam);
      // Update main category based on subcategory
      const mainCat = productCategories.find(cat => cat.id === categoryParam)?.mainCategory;
      if (mainCat) setActiveMainCategory(mainCat);
    }

    // Reset showAll and currentPage when category changes
    setShowAll(false);
    setCurrentPage(1);
  }, [categoryParam, mainCategoryParam]);

  // Filter subcategories based on active main category
  const filteredSubcategories = productCategories.filter(
    category => category.mainCategory === activeMainCategory
  );

  // Function to get all products from all categories
  const getAllProducts = () => {
    const allProducts: any[] = [];
    Object.keys(products).forEach(category => {
      products[category as keyof typeof products].forEach(product => {
        // Add category information to each product for better context
        allProducts.push({
          ...product,
          categoryId: category,
          categoryName: productCategories.find(cat => cat.id === category)?.name || ''
        });
      });
    });
    return allProducts;
  };

  // Determine if we should show search results or category products
  const isSearchActive = searchTerm.trim().length > 0;

  // Filter products based on search term
  const allFilteredProducts = isSearchActive
    ? getAllProducts().filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products[activeCategory as keyof typeof products] || [];

  // Get products to display based on showAll state and pagination
  const currentProducts = showAll
    ? allFilteredProducts
    : allFilteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(allFilteredProducts.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Toggle between showing all products and showing only paginated view
  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      // When switching back to paginated view, reset to first page
      setCurrentPage(1);
    }
  };

  // Generate array of page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }



  // Handle product click to show details
  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  // Close product details modal
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore our range of high-quality AIDC products designed for optimal performance and reliability
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page when search term changes
                }}
                className="w-full px-6 py-4 rounded-full text-gray-800 bg-white border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12 shadow-lg"
              />
              <svg
                className="w-6 h-6 text-blue-600 absolute left-4 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>


          </div>
        </div>
      </section>

      {/* Main Category Navigation - Hidden when search is active */}
      {!isSearchActive && (
        <section className="bg-white py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {mainCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveMainCategory(category.id);
                    // Set active subcategory to first one in this main category
                    if (category.subcategories.length > 0) {
                      setActiveCategory(category.subcategories[0]);
                    }
                    // Clear any search term when changing categories
                    setSearchTerm('');
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeMainCategory === category.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subcategory Navigation - Hidden when search is active */}
      {!isSearchActive && (
        <section className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {filteredSubcategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                    activeCategory === category.id
                      ? "bg-blue-500 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {isSearchActive ? (
            <>
              <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
                Search Results
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Found {allFilteredProducts.length} products matching "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="ml-2 text-blue-600 hover:text-blue-800 underline"
                >
                  Clear search
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
                {productCategories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                {productCategories.find(cat => cat.id === activeCategory)?.description}
              </p>
            </>
          )}

          {allFilteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 group cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="p-6 bg-blue-50 flex items-center justify-center h-64 group-hover:bg-blue-100/50 transition-all duration-300">
                      <div className="relative w-48 h-48 flex items-center justify-center">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          width={180}
                          height={180}
                          className="object-contain transition-all duration-500 group-hover:scale-110 max-h-48"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      {isSearchActive && 'categoryName' in product && (
                        <div className="mb-2">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {product.categoryName}
                          </span>
                        </div>
                      )}
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature: string, index: number) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <Link
                          href={`/contact?product=${product.name}`}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-full font-medium transition-all duration-300 text-center bg-blue-600 text-white hover:bg-blue-700"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Inquire
                        </Link>
                        <button
                          className="text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductClick(product);
                          }}
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                </div>

                {/* Pagination */}
                {!showAll && allFilteredProducts.length > productsPerPage && (
                  <div className="flex justify-center mt-8">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {pageNumbers.map(number => (
                        <button
                          key={number}
                          onClick={() => handlePageChange(number)}
                          className={`px-3 py-1 rounded-md ${currentPage === number ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
                        >
                          {number}
                        </button>
                      ))}

                      <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                )}

                {/* Show More Button */}
                {allFilteredProducts.length > productsPerPage && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={toggleShowAll}
                      className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-md flex items-center"
                    >
                      {showAll ? (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          Show Less
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          Show All {allFilteredProducts.length} Products
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing the Right Product?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to assist you in finding the perfect solution for your business needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 text-center bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
              <button
                onClick={closeProductDetails}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6 flex items-center justify-center">
                  <div className="relative w-full h-64 md:h-80">
                    <ImageWithFallback
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={`/contact?product=${selectedProduct.name}`}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 text-center bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Inquire About This Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Export the main page component with Suspense
export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

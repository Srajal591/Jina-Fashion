import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, ShoppingCart, Heart } from "lucide-react";
import ProductGrid from "../components/ProductGrid";
import Modal from "../components/Modal";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import productsData from "../data/products.json";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, addToWishlist } = useCart();
  const { addToast } = useToast();

  const categories = ["rings", "earrings", "necklaces", "bracelets"];

  useEffect(() => {
    setProducts(productsData);
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = products;
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategories, priceRange, sortBy]);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    addToast(`${product.name} added to cart`, "success");
    setIsModalOpen(false);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    addToast(`${product.name} added to wishlist`, "success");
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setPriceRange([0, 5000]);
    setSortBy("name");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#F8EDE3] py-8 text-[#8D493A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-serif mb-4">
            Jewelry Collection
          </h1>
          <p className="text-xl">
            Discover our exquisite range of handcrafted jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#8D493A] hover:text-[#5C2E1F]"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-field pr-10"
                    />
                    <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Categories
                  </label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="rounded border-gray-300 text-[#8D493A] focus:ring-[#D0B8A8]"
                        />
                        <span className="ml-2 text-sm capitalize">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([
                          parseInt(e.target.value) || 0,
                          priceRange[1],
                        ])
                      }
                      className="input-field text-sm"
                    />
                    <span className="flex items-center">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([
                          priceRange[0],
                          parseInt(e.target.value) || 5000,
                        ])
                      }
                      className="input-field text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p>
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-field text-sm w-48"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <ProductGrid
                products={filteredProducts}
                onQuickView={handleQuickView}
              />
            ) : (
              <div className="text-center py-12">
                <p className="text-lg mb-4">
                  No products found matching your criteria.
                </p>
                <button onClick={clearFilters} className="btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedProduct?.name}
          size="xl"
        >
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-[#8D493A]">
                    ₹{selectedProduct.price?.toLocaleString()}
                  </span>
                  {selectedProduct.originalPrice > selectedProduct.price && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{selectedProduct.originalPrice?.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">
                  {selectedProduct.description}
                </p>
                <div className="space-y-2 text-sm mb-6">
                  <p>
                    <strong>Material:</strong> {selectedProduct.material}
                  </p>
                  <p>
                    <strong>Category:</strong> {selectedProduct.category}
                  </p>
                  <p>
                    <strong>Rating:</strong> ⭐ {selectedProduct.rating}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />{" "}
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(selectedProduct)}
                    className="btn-outline flex items-center space-x-2"
                  >
                    <Heart className="w-4 h-4" /> <span>Add to Wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Shop;

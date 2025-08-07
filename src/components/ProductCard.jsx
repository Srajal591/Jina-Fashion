import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart, addToWishlist, wishlist } = useCart();
  const { addToast } = useToast();

  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const discountPercentage =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    addToast(`${product.name} added to cart`, "success");
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    if (!isInWishlist) {
      addToWishlist(product);
      addToast(`${product.name} added to wishlist`, "success");
    }
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    onQuickView && onQuickView(product);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#DFD3C3]/50">
      <Link to={`/product/${product.id}`}>
        {/* Image & Hover Actions */}
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discountPercentage}% OFF
            </div>
          )}

          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleAddToWishlist}
              className={`p-2 rounded-full shadow-md transition-colors ${
                isInWishlist
                  ? "bg-red-500 text-white"
                  : "bg-white text-[#8D493A] hover:bg-red-50 hover:text-red-500"
              }`}
              title="Add to Wishlist"
            >
              <Heart className="w-4 h-4" />
            </button>

            <button
              onClick={handleQuickView}
              className="p-2 bg-white text-[#8D493A] hover:bg-[#DFD3C3] hover:text-[#8D493A] rounded-full shadow-md transition-colors"
              title="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#8D493A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#8D493A] hover:bg-[#D0B8A8] text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 bg-[#F8EDE3]">
          <h3 className="font-semibold text-[#8D493A] mb-2 line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg font-bold text-[#8D493A]">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="capitalize text-[#DFD3C3] text-sm">
              {product.category}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-[#8D493A] text-sm">
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

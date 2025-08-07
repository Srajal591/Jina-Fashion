import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();
  const { addToast } = useToast();

  const handleRemoveFromWishlist = (productId, productName) => {
    removeFromWishlist(productId);
    addToast(`${productName} removed from wishlist`, "info");
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    addToast(`${product.name} added to cart`, "success");
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9F6EE] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto text-[#B9B4C7] mb-4" />
            <h1 className="text-3xl font-bold text-[#4C4B16] font-serif mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="text-xl text-[#7D7463] mb-8">
              Save your favorite items to your wishlist for later.
            </p>
            <Link to="/shop">
              <button className="bg-[#8D493A] hover:bg-[#7c3e32] text-white px-6 py-2 rounded-md font-semibold transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F6EE] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#4C4B16] font-serif mb-4">
            My Wishlist ({wishlist.length} items)
          </h1>
          <p className="text-xl text-[#7D7463]">Your saved jewelry pieces</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <button
                  onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold text-[#4C4B16] mb-2 line-clamp-2 hover:text-[#8D493A] transition-colors">
                    {item.name}
                  </h3>
                </Link>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-lg font-bold text-[#8D493A]">
                    ₹{item.price.toLocaleString()}
                  </span>
                  {item.originalPrice > item.price && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#7D7463] capitalize">
                    {item.category}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-[#7D7463] ml-1">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-[#8D493A] hover:bg-[#7c3e32] text-white w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md font-semibold transition"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

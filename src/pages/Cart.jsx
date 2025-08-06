// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
// import { useCart } from '../context/CartContext'
// import { useToast } from '../context/ToastContext'

// const Cart = () => {
//   const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()
//   const { addToast } = useToast()

//   const handleQuantityChange = (productId, newQuantity) => {
//     updateQuantity(productId, newQuantity)
//   }

//   const handleRemoveItem = (productId, productName) => {
//     removeFromCart(productId)
//     addToast(`${productName} removed from cart`, 'info')
//   }

//   const handleClearCart = () => {
//     clearCart()
//     addToast('Cart cleared', 'info')
//   }

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-8">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center py-16">
//             <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
//             <h1 className="text-3xl font-bold text-gray-900 font-serif mb-4">
//               Your Cart is Empty
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Looks like you haven't added any items to your cart yet.
//             </p>
//             <Link to="/shop">
//               <button className="btn-primary">
//                 Continue Shopping
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const subtotal = getCartTotal()
//   const shipping = subtotal >= 2000 ? 0 : 100
//   const tax = Math.round(subtotal * 0.18)
//   const total = subtotal + shipping + tax

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 font-serif">
//             Shopping Cart ({cart.length} items)
//           </h1>
//           <button
//             onClick={handleClearCart}
//             className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
//           >
//             Clear Cart
//           </button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2 space-y-4">
//             {cart.map((item) => (
//               <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link to={`/product/${item.id}`} className="flex-shrink-0">
//                     <img
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.name}
//                       className="w-24 h-24 object-cover rounded-lg"
//                     />
//                   </Link>
                  
//                   <div className="flex-1">
//                     <Link to={`/product/${item.id}`}>
//                       <h3 className="text-lg font-semibold text-gray-900 hover:text-gold-600 mb-2 transition-colors">
//                         {item.name}
//                       </h3>
//                     </Link>
//                     <p className="text-sm text-gray-600 mb-2 capitalize">
//                       {item.category} • {item.material}
//                     </p>
//                     <p className="text-lg font-bold text-gold-600">
//                       ₹{item.price.toLocaleString()}
//                     </p>
//                   </div>
                  
//                   <div className="flex flex-col sm:items-end gap-4">
//                     <div className="flex items-center space-x-2">
//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                         disabled={item.quantity <= 1}
//                         className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                       >
//                         <Minus className="w-4 h-4" />
//                       </button>
//                       <span className="w-12 text-center font-medium">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                         className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                     </div>
                    
//                     <button
//                       onClick={() => handleRemoveItem(item.id, item.name)}
//                       className="text-red-600 hover:text-red-700 p-1 transition-colors"
//                     >
//                       <Trash2 className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
//               <h2 className="text-xl font-bold text-gray-900 mb-6">
//                 Order Summary
//               </h2>
              
//               <div className="space-y-4 mb-6">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Subtotal:</span>
//                   <span className="font-medium">₹{subtotal.toLocaleString()}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shipping:</span>
//                   <span className="font-medium">
//                     {shipping === 0 ? 'Free' : `₹${shipping}`}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Tax:</span>
//                   <span className="font-medium">₹{tax.toLocaleString()}</span>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between text-lg font-bold">
//                   <span>Total:</span>
//                   <span className="text-gold-600">
//                     ₹{total.toLocaleString()}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 <button className="btn-primary w-full">
//                   Proceed to Checkout
//                 </button>
//                 <Link to="/shop" className="block">
//                   <button className="btn-outline w-full">
//                     Continue Shopping
//                   </button>
//                 </Link>
//               </div>
              
//               {subtotal < 2000 && (
//                 <div className="mt-4 p-3 bg-gold-50 rounded-lg">
//                   <p className="text-sm text-gold-800">
//                     Add ₹{(2000 - subtotal).toLocaleString()} more for free shipping!
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart

import React from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()
  const { addToast } = useToast()

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity)
  }

  const handleRemoveItem = (productId, productName) => {
    removeFromCart(productId)
    addToast(`${productName} removed from cart`, 'info')
  }

  const handleClearCart = () => {
    clearCart()
    addToast('Cart cleared', 'info')
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#F8EDE3] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 mx-auto text-[#D0B8A8] mb-4" />
            <h1 className="text-3xl font-bold text-[#8D493A] font-serif mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-[#8D493A]/70 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/shop">
              <button className="bg-[#8D493A] text-white px-6 py-2 rounded-md hover:bg-[#a65341] transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const subtotal = getCartTotal()
  const shipping = subtotal >= 2000 ? 0 : 100
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-[#F8EDE3] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#8D493A] font-serif">
            Shopping Cart ({cart.length} items)
          </h1>
          <button
            onClick={handleClearCart}
            className="text-red-600 hover:text-red-700 text-sm font-medium transition"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-[#DFD3C3] p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </Link>

                  <div className="flex-1">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-lg font-semibold text-[#8D493A] hover:underline mb-2">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-[#8D493A]/70 mb-2 capitalize">
                      {item.category} • {item.material}
                    </p>
                    <p className="text-lg font-bold text-[#D0B8A8]">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="p-1 rounded-md border border-gray-300 hover:bg-[#F8EDE3] disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-medium text-[#8D493A]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-1 rounded-md border border-gray-300 hover:bg-[#F8EDE3] transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="text-red-600 hover:text-red-700 p-1 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#DFD3C3] p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-[#8D493A] mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 text-[#8D493A]/80">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span className="font-medium">₹{tax.toLocaleString()}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold text-[#8D493A]">
                  <span>Total:</span>
                  <span>
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="bg-[#8D493A] w-full text-white py-2 rounded-md hover:bg-[#a65341] transition">
                  Proceed to Checkout
                </button>
                <Link to="/shop" className="block">
                  <button className="w-full border border-[#8D493A] text-[#8D493A] py-2 rounded-md hover:bg-[#f1dacf] transition">
                    Continue Shopping
                  </button>
                </Link>
              </div>

              {subtotal < 2000 && (
                <div className="mt-4 p-3 bg-[#D0B8A8]/30 rounded-lg text-sm text-[#8D493A]">
                  Add ₹{(2000 - subtotal).toLocaleString()} more for free shipping!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

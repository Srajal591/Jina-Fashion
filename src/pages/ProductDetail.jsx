// import React, { useState, useEffect } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import { ShoppingCart, Heart, ArrowLeft, Star } from 'lucide-react'
// import { useCart } from '../context/CartContext'
// import { useToast } from '../context/ToastContext'
// import ProductGrid from '../components/ProductGrid'
// import productsData from '../data/products.json'

// const ProductDetail = () => {
//   const { id } = useParams()
//   const [product, setProduct] = useState(null)
//   const [selectedImage, setSelectedImage] = useState(0)
//   const [activeTab, setActiveTab] = useState('specifications')
//   const [relatedProducts, setRelatedProducts] = useState([])
//   const { addToCart, addToWishlist, wishlist } = useCart()
//   const { addToast } = useToast()

//   useEffect(() => {
//     const foundProduct = productsData.find(p => p.id === parseInt(id))
//     setProduct(foundProduct)
    
//     if (foundProduct) {
//       // Get related products from same category
//       const related = productsData
//         .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
//         .slice(0, 4)
//       setRelatedProducts(related)
//     }
//   }, [id])

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl text-gray-600">Product not found</p>
//       </div>
//     )
//   }

//   const isInWishlist = wishlist.some(item => item.id === product.id)
//   const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

//   const handleAddToCart = () => {
//     addToCart(product)
//     addToast(`${product.name} added to cart`, 'success')
//   }

//   const handleAddToWishlist = () => {
//     if (!isInWishlist) {
//       addToWishlist(product)
//       addToast(`${product.name} added to wishlist`, 'success')
//     }
//   }

//   const tabs = [
//     { id: 'specifications', label: 'Specifications' },
//     { id: 'care', label: 'Care Instructions' },
//     { id: 'shipping', label: 'Shipping & Returns' }
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-8">
//           <Link to="/shop" className="flex items-center text-gold-600 hover:text-gold-700 mb-4 transition-colors">
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to Shop
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//           {/* Product Images */}
//           <div>
//             <div className="mb-4">
//               <img
//                 src={product.images ? product.images[selectedImage] : product.image}
//                 alt={product.name}
//                 className="w-full h-96 object-cover rounded-lg shadow-lg"
//               />
//             </div>
            
//             {product.images && product.images.length > 1 && (
//               <div className="flex space-x-2 overflow-x-auto">
//                 {product.images.map((image, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
//                       selectedImage === index ? 'border-gold-500' : 'border-gray-200'
//                     }`}
//                   >
//                     <img
//                       src={image || "/placeholder.svg"}
//                       alt={`${product.name} view ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Product Info */}
//           <div>
//             <div className="mb-4">
//               <div className="bg-gold-100 text-gold-800 text-xs font-bold px-2 py-1 rounded mb-2 inline-block capitalize">
//                 {product.category}
//               </div>
//               <h1 className="text-3xl font-bold text-gray-900 font-serif mb-4">
//                 {product.name}
//               </h1>
              
//               <div className="flex items-center mb-4">
//                 <div className="flex items-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
//                     />
//                   ))}
//                 </div>
//                 <span className="ml-2 text-gray-600">({product.rating})</span>
//               </div>
//             </div>

//             <div className="mb-6">
//               <div className="flex items-center space-x-4 mb-4">
//                 <span className="text-3xl font-bold text-gold-600">
//                   ₹{product.price.toLocaleString()}
//                 </span>
//                 {product.originalPrice > product.price && (
//                   <>
//                     <span className="text-xl text-gray-500 line-through">
//                       ₹{product.originalPrice.toLocaleString()}
//                     </span>
//                     <div className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
//                       {discountPercentage}% OFF
//                     </div>
//                   </>
//                 )}
//               </div>
              
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 {product.description}
//               </p>
//             </div>

//             <div className="mb-8">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Details</h3>
//               <div className="grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <span className="font-medium text-gray-700">Material:</span>
//                   <p className="text-gray-600">{product.material}</p>
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Purity:</span>
//                   <p className="text-gray-600">{product.purity}</p>
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Size:</span>
//                   <p className="text-gray-600">{product.size}</p>
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Category:</span>
//                   <p className="text-gray-600 capitalize">{product.category}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <button
//                 onClick={handleAddToCart}
//                 className="btn-primary flex items-center justify-center space-x-2 flex-1"
//               >
//                 <ShoppingCart className="w-5 h-5" />
//                 <span>Add to Cart</span>
//               </button>
//               <button
//                 onClick={handleAddToWishlist}
//                 disabled={isInWishlist}
//                 className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
//                   isInWishlist 
//                     ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
//                     : 'btn-outline'
//                 }`}
//               >
//                 <Heart className="w-5 h-5" />
//                 <span>{isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Product Details Tabs */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-16">
//           <div className="border-b border-gray-200 mb-6">
//             <div className="flex space-x-8">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
//                     activeTab === tab.id
//                       ? 'border-gold-500 text-gold-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="tab-content">
//             {activeTab === 'specifications' && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {Object.entries(product.specifications || {}).map(([key, value]) => (
//                   <div key={key} className="flex justify-between py-2 border-b border-gray-100">
//                     <span className="font-medium text-gray-700">{key}:</span>
//                     <span className="text-gray-600">{value}</span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === 'care' && (
//               <div className="prose max-w-none">
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   {product.care}
//                 </p>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-3">General Care Tips:</h4>
//                   <ul className="list-disc list-inside space-y-2 text-gray-600">
//                     <li>Store jewelry in a clean, dry place</li>
//                     <li>Avoid exposure to harsh chemicals and perfumes</li>
//                     <li>Clean regularly with appropriate methods</li>
//                     <li>Handle with care to prevent damage</li>
//                     <li>Professional cleaning recommended periodically</li>
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'shipping' && (
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-3">Shipping Information</h4>
//                   <ul className="space-y-2 text-gray-600">
//                     <li>• Free shipping on orders above ₹2000</li>
//                     <li>• Standard delivery: 3-5 business days</li>
//                     <li>• Express delivery: 1-2 business days (additional charges apply)</li>
//                     <li>• All orders are insured and require signature on delivery</li>
//                   </ul>
//                 </div>
                
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-3">Returns & Exchanges</h4>
//                   <ul className="space-y-2 text-gray-600">
//                     <li>• 30-day return policy</li>
//                     <li>• Items must be in original condition with tags</li>
//                     <li>• Free returns for defective items</li>
//                     <li>• Exchange available for size adjustments</li>
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Related Products */}
//         {relatedProducts.length > 0 && (
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 font-serif mb-8 text-center">
//               You May Also Like
//             </h2>
//             <ProductGrid products={relatedProducts} />
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ProductDetail


import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingCart, Heart, ArrowLeft, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import ProductGrid from '../components/ProductGrid'
import productsData from '../data/products.json'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('specifications')
  const [relatedProducts, setRelatedProducts] = useState([])
  const { addToCart, addToWishlist, wishlist } = useCart()
  const { addToast } = useToast()

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id))
    setProduct(foundProduct)
    if (foundProduct) {
      const related = productsData
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4)
      setRelatedProducts(related)
    }
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    )
  }

  const isInWishlist = wishlist.some(item => item.id === product.id)
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const handleAddToCart = () => {
    addToCart(product)
    addToast(`${product.name} added to cart`, 'success')
  }

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product)
      addToast(`${product.name} added to wishlist`, 'success')
    }
  }

  const tabs = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'care', label: 'Care Instructions' },
    { id: 'shipping', label: 'Shipping & Returns' }
  ]

  return (
    <div className="min-h-screen bg-[#F8EDE3] py-8 text-[#8D493A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/shop" className="flex items-center text-[#D0B8A8] hover:text-[#8D493A] mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <img
                src={product.images ? product.images[selectedImage] : product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-[#D0B8A8]' : 'border-gray-200'
                    }`}
                  >
                    <img src={image || "/placeholder.svg"} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="mb-4">
              <div className="bg-[#DFD3C3] text-[#8D493A] text-xs font-bold px-2 py-1 rounded mb-2 inline-block capitalize">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold font-serif mb-4">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-[#8D493A]">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <div className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                      {discountPercentage}% OFF
                    </div>
                  </>
                )}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Quick Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-medium">Material:</span> <p>{product.material}</p></div>
                <div><span className="font-medium">Purity:</span> <p>{product.purity}</p></div>
                <div><span className="font-medium">Size:</span> <p>{product.size}</p></div>
                <div><span className="font-medium">Category:</span> <p className="capitalize">{product.category}</p></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={handleAddToCart} className="bg-[#8D493A] text-white px-6 py-3 rounded-lg flex-1 hover:bg-[#D0B8A8]">
                <ShoppingCart className="w-5 h-5 inline mr-2" /> Add to Cart
              </button>
              <button
                onClick={handleAddToWishlist}
                disabled={isInWishlist}
                className={`px-6 py-3 rounded-lg font-medium flex-1 border transition-all ${
                  isInWishlist ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'border-[#8D493A] text-[#8D493A] hover:bg-[#D0B8A8] hover:text-white'
                }`}
              >
                <Heart className="w-5 h-5 inline mr-2" /> {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-16">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id ? 'border-[#D0B8A8] text-[#8D493A]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">{key}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'care' && (
              <div className="text-gray-700">
                <p className="mb-4">{product.care}</p>
                <h4 className="font-semibold mb-2">General Care Tips:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Store jewelry in a clean, dry place</li>
                  <li>Avoid exposure to harsh chemicals and perfumes</li>
                  <li>Clean regularly with appropriate methods</li>
                  <li>Handle with care to prevent damage</li>
                  <li>Professional cleaning recommended periodically</li>
                </ul>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="text-gray-700 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Shipping Information</h4>
                  <ul className="list-disc list-inside">
                    <li>Free shipping on orders above ₹2000</li>
                    <li>Standard delivery: 3-5 business days</li>
                    <li>Express delivery: 1-2 business days (extra charge)</li>
                    <li>All orders insured & require signature</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Returns & Exchanges</h4>
                  <ul className="list-disc list-inside">
                    <li>30-day return policy</li>
                    <li>Original condition with tags required</li>
                    <li>Free returns for defective items</li>
                    <li>Exchange available for size adjustments</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">You May Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
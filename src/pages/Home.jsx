// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowRight, ShoppingCart, Heart } from 'lucide-react'
// import ProductGrid from '../components/ProductGrid'
// import BlogCard from '../components/BlogCard'
// import Modal from '../components/Modal'
// import { useCart } from '../context/CartContext'
// import { useToast } from '../context/ToastContext'
// import productsData from '../data/products.json'
// import blogsData from '../data/blogs.json'

// const Home = () => {
//   const [products, setProducts] = useState([])
//   const [blogs, setBlogs] = useState([])
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const { addToCart, addToWishlist } = useCart()
//   const { addToast } = useToast()

//   useEffect(() => {
//     setProducts(productsData.slice(0, 4)) // Featured products
//     setBlogs(blogsData.slice(0, 3)) // Latest blogs
//   }, [])

//   const handleQuickView = (product) => {
//     setSelectedProduct(product)
//     setIsModalOpen(true)
//   }

//   const handleAddToCart = (product) => {
//     addToCart(product)
//     addToast(`${product.name} added to cart`, 'success')
//     setIsModalOpen(false)
//   }

//   const handleAddToWishlist = (product) => {
//     addToWishlist(product)
//     addToast(`${product.name} added to wishlist`, 'success')
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Hero Banner */}
//       <section className="relative h-screen bg-gradient-to-r from-gold-50 to-rose-50 flex items-center">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('https://www.krishnajewellers.com/blog/wp-content/uploads/2021/12/Buy-Gold-Choker-Designs.jpg')`
//           }}
//         ></div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 animate-fade-in">
//             Elegant Jewelry
//             <br />
//             <span className="text-gold-400">Collection</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up">
//             Discover timeless pieces that celebrate life's precious moments
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
//             <Link to="/shop">
//               <button className="btn-primary flex items-center space-x-2">
//                 <span>Shop Collection</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </Link>
//             <Link to="/blog">
//               <button className="btn-outline">
//                 Style Guide
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Promotional Banner */}
//       <section className="bg-gold-600 text-white py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-lg font-medium">
//             🎉 Special Offer: Get 25% off on all jewelry items | Free shipping on orders above ₹2000
//           </p>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 font-serif mb-4">
//               Featured Collection
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Handpicked pieces that showcase exceptional craftsmanship and timeless elegance
//             </p>
//           </div>
          
//           <ProductGrid products={products} onQuickView={handleQuickView} />
          
//           <div className="text-center mt-12">
//             <Link to="/shop">
//               <button className="btn-outline flex items-center space-x-2 mx-auto">
//                 <span>View All Products</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 font-serif mb-4">
//               Shop by Category
//             </h2>
//             <p className="text-xl text-gray-600">
//               Find the perfect piece for every occasion
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { name: 'Rings', image: 'https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175533_640.jpg', category: 'rings' },
//               { name: 'Earrings', image: 'http://2.bp.blogspot.com/-4QIZq65ZJ3I/T3Q1SUhXU8I/AAAAAAAABFM/EbRztcZQNtM/s1600/traditional-earrings.jpg', category: 'earrings' },
//               { name: 'Necklaces', image: 'https://2.bp.blogspot.com/-Avz08GINVSY/UCu9W226RRI/AAAAAAAACiA/qnUhz1aeD8M/s1600/necklace-zoom-DSC_9776.jpg', category: 'necklaces' },
//               { name: 'Bracelets', image: 'https://cdn.shopify.com/s/files/1/2988/2568/products/0E8A0097_9866aaf3-22cf-42ed-95a8-ad7983e9aaac_2048x2048.jpg?v=1579560027', category: 'bracelets' }
//             ].map((category) => (
//               <Link key={category.name} to={`/shop?category=${category.category}`}>
//                 <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
//                   <img
//                     src={category.image || "/placeholder.svg"}
//                     alt={category.name}
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <h3 className="text-2xl font-bold text-white font-serif">
//                       {category.name}
//                     </h3>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 font-serif mb-4">
//               Style & Care Tips
//             </h2>
//             <p className="text-xl text-gray-600">
//               Expert advice on jewelry styling and maintenance
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog) => (
//               <BlogCard key={blog.id} blog={blog} />
//             ))}
//           </div>
          
//           <div className="text-center mt-12">
//             <Link to="/blog">
//               <button className="btn-outline flex items-center space-x-2 mx-auto">
//                 <span>Read More Articles</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Quick View Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title={selectedProduct?.name}
//         size="xl"
//       >
//         {selectedProduct && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <img
//               src={selectedProduct.image || "/placeholder.svg"}
//               alt={selectedProduct.name}
//               className="w-full h-64 object-cover rounded-lg"
//             />
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <span className="text-2xl font-bold text-gold-600">
//                   ₹{selectedProduct.price?.toLocaleString()}
//                 </span>
//                 {selectedProduct.originalPrice > selectedProduct.price && (
//                   <span className="text-lg text-gray-500 line-through">
//                     ₹{selectedProduct.originalPrice?.toLocaleString()}
//                   </span>
//                 )}
//               </div>
//               <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
//               <div className="space-y-2 text-sm mb-6">
//                 <p><strong>Material:</strong> {selectedProduct.material}</p>
//                 <p><strong>Category:</strong> {selectedProduct.category}</p>
//                 <p><strong>Rating:</strong> ⭐ {selectedProduct.rating}</p>
//               </div>
//               <div className="flex space-x-3">
//                 <button 
//                   onClick={() => handleAddToCart(selectedProduct)}
//                   className="btn-primary flex items-center space-x-2"
//                 >
//                   <ShoppingCart className="w-4 h-4" />
//                   <span>Add to Cart</span>
//                 </button>
//                 <button 
//                   onClick={() => handleAddToWishlist(selectedProduct)}
//                   className="btn-outline flex items-center space-x-2"
//                 >
//                   <Heart className="w-4 h-4" />
//                   <span>Add to Wishlist</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </div>
//   )
// }

// export default Home

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart, Heart } from 'lucide-react'
import ProductGrid from '../components/ProductGrid'
import BlogCard from '../components/BlogCard'
import Modal from '../components/Modal'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import productsData from '../data/products.json'
import blogsData from '../data/blogs.json'

const Home = () => {
  const [products, setProducts] = useState([])
  const [blogs, setBlogs] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart, addToWishlist } = useCart()
  const { addToast } = useToast()

  useEffect(() => {
    setProducts(productsData.slice(0, 4))
    setBlogs(blogsData.slice(0, 3))
  }, [])

  const handleQuickView = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    addToast(`${product.name} added to cart`, 'success')
    setIsModalOpen(false)
  }

  const handleAddToWishlist = (product) => {
    addToWishlist(product)
    addToast(`${product.name} added to wishlist`, 'success')
  }

  return (
    <div className="min-h-screen bg-[#F8EDE3] text-[#8D493A]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://www.krishnajewellers.com/blog/wp-content/uploads/2021/12/Buy-Gold-Choker-Designs.jpg')`
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">
            Elegant Jewelry <br />
            <span className="text-[#D0B8A8]">Collection</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover timeless pieces that celebrate life's precious moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <button className="bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-[#D0B8A8] transition flex items-center space-x-2">
                <span>Shop Collection</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/blog">
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#8D493A] transition">
                Style Guide
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="bg-[#8D493A] text-white py-4">
        <div className="text-center">
          <p className="text-lg font-medium">
            🎉 Special Offer: Get 25% off on all jewelry items | Free shipping on orders above ₹2000
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#DFD3C3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Featured Collection</h2>
            <p className="text-xl text-[#8D493A] max-w-2xl mx-auto">
              Handpicked pieces that showcase exceptional craftsmanship and timeless elegance
            </p>
          </div>
          <ProductGrid products={products} onQuickView={handleQuickView} />
          <div className="text-center mt-12">
            <Link to="/shop">
              <button className="border border-[#8D493A] text-[#8D493A] px-6 py-3 rounded-lg hover:bg-[#D0B8A8] hover:text-white transition flex items-center space-x-2 mx-auto">
                <span>View All Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[#F8EDE3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Shop by Category</h2>
            <p className="text-xl">Find the perfect piece for every occasion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Rings', image: 'https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175533_640.jpg', category: 'rings' },
              { name: 'Earrings', image: 'http://2.bp.blogspot.com/-4QIZq65ZJ3I/T3Q1SUhXU8I/AAAAAAAABFM/EbRztcZQNtM/s1600/traditional-earrings.jpg', category: 'earrings' },
              { name: 'Necklaces', image: 'https://2.bp.blogspot.com/-Avz08GINVSY/UCu9W226RRI/AAAAAAAACiA/qnUhz1aeD8M/s1600/necklace-zoom-DSC_9776.jpg', category: 'necklaces' },
              { name: 'Bracelets', image: 'https://cdn.shopify.com/s/files/1/2988/2568/products/0E8A0097_9866aaf3-22cf-42ed-95a8-ad7983e9aaac_2048x2048.jpg?v=1579560027', category: 'bracelets' }
            ].map((cat) => (
              <Link key={cat.name} to={`/shop?category=${cat.category}`}>
                <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white font-serif">{cat.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-[#DFD3C3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Style & Care Tips</h2>
            <p className="text-xl">Expert advice on jewelry styling and maintenance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog">
              <button className="border border-[#8D493A] text-[#8D493A] px-6 py-3 rounded-lg hover:bg-[#D0B8A8] hover:text-white transition flex items-center space-x-2 mx-auto">
                <span>Read More Articles</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
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
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              <div className="space-y-2 text-sm mb-6">
                <p><strong>Material:</strong> {selectedProduct.material}</p>
                <p><strong>Category:</strong> {selectedProduct.category}</p>
                <p><strong>Rating:</strong> ⭐ {selectedProduct.rating}</p>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="bg-[#8D493A] text-white px-5 py-2 rounded-lg hover:bg-[#D0B8A8] transition flex items-center space-x-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
                <button 
                  onClick={() => handleAddToWishlist(selectedProduct)}
                  className="border border-[#8D493A] text-[#8D493A] px-5 py-2 rounded-lg hover:bg-[#D0B8A8] hover:text-white transition flex items-center space-x-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Home

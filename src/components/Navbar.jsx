// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { ShoppingCart, Heart, Menu, X, ChevronDown } from 'lucide-react'
// import { useCart } from '../context/CartContext'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)
//   const { getCartItemsCount, wishlist } = useCart()
//   const location = useLocation()

//   const isActive = (path) => location.pathname === path

//   const NavLink = ({ to, children, onClick }) => (
//     <Link 
//       to={to} 
//       onClick={onClick}
//       className={`font-medium transition-colors duration-200 ${
//         isActive(to) 
//           ? 'text-gold-600' 
//           : 'text-gray-700 hover:text-gold-600'
//       }`}
//     >
//       {children}
//     </Link>
//   )

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <h1 className="text-2xl font-bold text-gold-600 font-serif">
//               Jina Fashion
//             </h1>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <NavLink to="/">Home</NavLink>
            
//             <div className="relative">
//               <button
//                 onMouseEnter={() => setIsShopDropdownOpen(true)}
//                 onMouseLeave={() => setIsShopDropdownOpen(false)}
//                 className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
//                   location.pathname === '/shop' ? 'text-gold-600' : 'text-gray-700 hover:text-gold-600'
//                 }`}
//               >
//                 <span>Shop</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
              
//               {isShopDropdownOpen && (
//                 <div
//                   onMouseEnter={() => setIsShopDropdownOpen(true)}
//                   onMouseLeave={() => setIsShopDropdownOpen(false)}
//                   className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-fade-in"
//                 >
//                   <Link to="/shop" className="block px-4 py-2 text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition-colors">
//                     All Products
//                   </Link>
//                   <Link to="/shop?category=rings" className="block px-4 py-2 text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition-colors">
//                     Rings
//                   </Link>
//                   <Link to="/shop?category=earrings" className="block px-4 py-2 text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition-colors">
//                     Earrings
//                   </Link>
//                   <Link to="/shop?category=necklaces" className="block px-4 py-2 text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition-colors">
//                     Necklaces
//                   </Link>
//                   <Link to="/shop?category=bracelets" className="block px-4 py-2 text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition-colors">
//                     Bracelets
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <NavLink to="/blog">Blog</NavLink>
//             <NavLink to="/contact">Contact</NavLink>
//           </div>

//           {/* Right side icons */}
//           <div className="flex items-center space-x-4">
//             <Link to="/wishlist" className="relative p-2 text-gray-700 hover:text-gold-600 transition-colors">
//               <Heart className="w-6 h-6" />
//               {wishlist.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {wishlist.length}
//                 </span>
//               )}
//             </Link>

//             <Link to="/cart" className="relative p-2 text-gray-700 hover:text-gold-600 transition-colors">
//               <ShoppingCart className="w-6 h-6" />
//               {getCartItemsCount() > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {getCartItemsCount()}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 text-gray-700 hover:text-gold-600 transition-colors"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-gray-200 py-4 animate-slide-up">
//             <div className="flex flex-col space-y-4">
//               <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
//               <NavLink to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</NavLink>
//               <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
//               <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Heart, Menu, X, ChevronDown } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)
  const { getCartItemsCount, wishlist } = useCart()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const NavLink = ({ to, children, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className={`font-medium transition-colors duration-200 ${
        isActive(to)
          ? 'text-[#8D493A]'
          : 'text-[#5a3b2e] hover:text-[#8D493A]'
      }`}
    >
      {children}
    </Link>
  )

  return (
    <nav className="bg-[#F8EDE3] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-[#8D493A] font-serif">
              Jina Fashion
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>

            <div className="relative">
              <button
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  location.pathname === '/shop'
                    ? 'text-[#8D493A]'
                    : 'text-[#5a3b2e] hover:text-[#8D493A]'
                }`}
              >
                <span>Shop</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isShopDropdownOpen && (
                <div
                  onMouseEnter={() => setIsShopDropdownOpen(true)}
                  onMouseLeave={() => setIsShopDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-[#DFD3C3] rounded-lg shadow-lg py-2"
                >
                  {['All Products', 'Rings', 'Earrings', 'Necklaces', 'Bracelets'].map((cat, i) => {
                    const path = cat === 'All Products' ? '/shop' : `/shop?category=${cat.toLowerCase()}`
                    return (
                      <Link
                        key={i}
                        to={path}
                        className="block px-4 py-2 text-[#5a3b2e] hover:bg-[#F8EDE3] hover:text-[#8D493A] transition-colors"
                      >
                        {cat}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="relative p-2 text-[#5a3b2e] hover:text-[#8D493A] transition-colors">
              <Heart className="w-6 h-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative p-2 text-[#5a3b2e] hover:text-[#8D493A] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D0B8A8] text-[#8D493A] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#5a3b2e] hover:text-[#8D493A] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#D0B8A8] py-4 bg-[#F8EDE3]">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</NavLink>
              <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

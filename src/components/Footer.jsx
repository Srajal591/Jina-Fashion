import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#604652' }} className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-serif">
              Srajal Fashion
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Crafting elegant jewelry pieces that celebrate life's precious moments. 
              Quality, beauty, and craftsmanship in every piece.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-200 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/shop" className="block text-gray-200 hover:text-white transition-colors text-sm">
                Shop
              </Link>
              <Link to="/blog" className="block text-gray-200 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-200 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <div className="space-y-2">
              <Link to="/shop?category=rings" className="block text-gray-200 hover:text-white transition-colors text-sm">
                Rings
              </Link>
              <Link to="/shop?category=earrings" className="block text-gray-200 hover:text-white transition-colors text-sm">
                Earrings
              </Link>
              <Link to="/shop?category=necklaces" className="block text-gray-200 hover:text-white transition-colors text-sm">
                Necklaces
              </Link>
              <Link to="/shop?category=bracelets" className="block text-gray-200 hover:text-white transition-colors text-sm">
                Bracelets
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-200 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-200 text-sm">info@srajalfashion.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-200 text-sm">Mumbai, India</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-200 mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email"
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-[#5a3f4c] border border-gray-600 rounded-l-lg text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="px-4 py-2 bg-white text-[#604652] hover:bg-gray-200 text-sm font-semibold rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Jina Fashion. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

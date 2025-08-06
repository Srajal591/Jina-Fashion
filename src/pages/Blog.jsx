// import React, { useState, useEffect } from 'react'
// import { Search } from 'lucide-react'
// import BlogCard from '../components/BlogCard'
// import blogsData from '../data/blogs.json'

// const Blog = () => {
//   const [blogs, setBlogs] = useState([])
//   const [filteredBlogs, setFilteredBlogs] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState('all')

//   const categories = ['all', 'engagement', 'trends', 'care', 'styling']

//   useEffect(() => {
//     setBlogs(blogsData)
//     setFilteredBlogs(blogsData)
//   }, [])

//   useEffect(() => {
//     let filtered = blogs

//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(blog =>
//         blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         blog.author.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     }

//     // Filter by category
//     if (selectedCategory !== 'all') {
//       filtered = filtered.filter(blog =>
//         blog.category.toLowerCase() === selectedCategory.toLowerCase()
//       )
//     }

//     setFilteredBlogs(filtered)
//   }, [blogs, searchTerm, selectedCategory])

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
//             Jewelry Blog
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover the latest trends, styling tips, and care guides for your precious jewelry
//           </p>
//         </div>

//         {/* Search and Filter */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="input-field pr-10"
//                 />
//                 <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
//               </div>
//             </div>
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="input-field w-full sm:w-48"
//             >
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-gray-600">
//             Showing {filteredBlogs.length} of {blogs.length} articles
//           </p>
//         </div>

//         {/* Blog Grid */}
//         {filteredBlogs.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredBlogs.map((blog) => (
//               <BlogCard key={blog.id} blog={blog} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Blog

import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import blogsData from '../data/blogs.json'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'engagement', 'trends', 'care', 'styling']

  useEffect(() => {
    setBlogs(blogsData)
    setFilteredBlogs(blogsData)
  }, [])

  useEffect(() => {
    let filtered = blogs

    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(blog =>
        blog.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    setFilteredBlogs(filtered)
  }, [blogs, searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-[#F8EDE3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8D493A] font-serif mb-4">
            Jewelry Blog
          </h1>
          <p className="text-xl text-[#8D493A]/80 max-w-2xl mx-auto">
            Discover the latest trends, styling tips, and care guides for your precious jewelry
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-[#DFD3C3] rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#D0B8A8] bg-white text-[#8D493A]"
                />
                <Search className="absolute right-3 top-3 h-4 w-4 text-[#8D493A]/50" />
              </div>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#D0B8A8] bg-white text-[#8D493A]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-[#8D493A]/70">
            Showing {filteredBlogs.length} of {blogs.length} articles
          </p>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#8D493A]/60 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog

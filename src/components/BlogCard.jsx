import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link to={`/blog/${blog.id}`}>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
        {/* Blog Image */}
        <div className="relative overflow-hidden">
          <img
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 bg-gold-500 text-white text-xs font-semibold px-2 py-1 rounded shadow">
            {blog.category}
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-5">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors duration-200">
            {blog.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex justify-between items-center text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4 text-gold-600" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-gold-600" />
              <span>{formatDate(blog.date)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

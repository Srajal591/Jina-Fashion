import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import BlogCard from "../components/BlogCard";
import blogsData from "../data/blogs.json";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const foundBlog = blogsData.find((b) => b.id === parseInt(id));
    setBlog(foundBlog);

    if (foundBlog) {
      const related = blogsData
        .filter(
          (b) => b.category === foundBlog.category && b.id !== foundBlog.id
        )
        .slice(0, 3);
      setRelatedBlogs(related);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8EDE3]">
        <p className="text-xl text-[#8D493A]/70">Article not found</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const estimatedReadTime = Math.ceil(blog.content.split(" ").length / 200);

  return (
    <div className="min-h-screen bg-[#F8EDE3] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="flex items-center text-[#8D493A] hover:underline mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-[#DFD3C3] rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="relative h-64 md:h-96">
            <img
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#D0B8A8] text-[#8D493A] text-sm font-bold px-2 py-1 rounded mb-3 inline-block">
                {blog.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{estimatedReadTime} min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#8D493A]/80 font-medium mb-8 leading-relaxed">
                {blog.excerpt}
              </p>
              <div className="text-[#8D493A]/90 leading-relaxed space-y-6">
                {blog.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-[#8D493A] font-serif mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;

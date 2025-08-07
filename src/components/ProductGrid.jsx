import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onQuickView }) => {
  return (
    <div className="bg-[#F8EDE3] py-8 px-4 sm:px-6 lg:px-8 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

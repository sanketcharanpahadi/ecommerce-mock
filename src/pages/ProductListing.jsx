import { useState } from "react";
import { CATEGORIES, MOCK_PRODUCTS } from "../../utils/data";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    const currentUrl = new URL(window.location.href);

    const params = new URLSearchParams(currentUrl.search);
    const category = params.get("category");
    if (!CATEGORIES.includes(category)) return;

    setSelectedCategory(category);
  }, []);

  const filteredProducts = MOCK_PRODUCTS.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  const sortProducts = (products) => {
    switch (sortBy) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Categories</h3>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left px-2 py-1.5 rounded ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-1.5"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{product.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-gray-600 font-bold mb-3">${product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="block text-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

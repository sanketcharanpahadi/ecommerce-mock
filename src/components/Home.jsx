import { Link } from "react-router-dom";
import { CATEGORIES, MOCK_PRODUCTS } from "../../utils/data";

const HomePage = () => {
  const featuredProducts = MOCK_PRODUCTS.filter((p) => p.featured);
  // console.log(featuredProducts);

  return (
    <div className="space-y-8">
      <div className="text-white bg-orange-500">
        <div className="container px-4 py-16 mx-auto">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-bold">Welcome to SHOPPE</h1>
            <p className="mb-6 text-xl">
              Explore top-quality products at unbeatable prices
            </p>
            <Link
              to="/products"
              className="inline-block px-6 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
        <div className="flex flex-wrap gap-y-4 justify-evenly">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 transition-shadow border rounded-lg shadow hover:shadow-lg basis-1/3"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-48 mb-4 rounded"
              />
              <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{product.rating}</span>
                <span className="ml-1 text-sm text-gray-500">
                  ({product.reviews})
                </span>
              </div>
              <p className="mb-3 font-bold text-gray-600">${product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="block px-4 py-2 ml-auto text-center text-white bg-green-600 rounded hover:bg-green-700 w-fit"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-6 text-2xl font-bold">Shop by Category</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {CATEGORIES.slice(1).map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="p-4 text-center transition-shadow bg-white rounded-lg shadow hover:shadow-lg"
              >
                <h3 className="font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

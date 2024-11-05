/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MOCK_PRODUCTS } from "../../utils/data";
import { useState } from "react";

const ProductDetail = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find((p) => p.id === parseInt(id));
  console.log(id, product);

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Product Not Found
        </h1>
        <p className="mb-4">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square h-96">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-fill transition-opacity duration-300"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-600 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <div className="mb-4">
            <label className="block mb-2">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border p-2 w-20"
            />
          </div>
          <button
            onClick={() => addToCart(product, quantity)}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

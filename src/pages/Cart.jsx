/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Cart = ({ cart, updateQuantity, removeItem }) => {
  // console.log(cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center border-b py-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover"
          />
          <div className="flex-grow ml-4">
            <h2 className="text-xl">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
              className="border p-1 w-16 mt-2"
            />
          </div>
          <button onClick={() => removeItem(item.id)} className="text-red-600">
            Remove
          </button>
        </div>
      ))}
      <div className="mt-6">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Link
          to="/checkout"
          className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;

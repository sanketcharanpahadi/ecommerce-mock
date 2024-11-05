import { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = Math.random() > 0.5;
    window.location.href = success ? "/success" : "/failure";
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            required
            className="w-full border p-2 rounded"
            value={formData.name}
            minLength="6"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value.trim() })
            }
          />
        </div>
        <div>
          <label className="block mb-1">Address</label>
          <textarea
            required
            className="w-full border p-2 rounded"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block mb-1">Card Number</label>
          <input
            type="text"
            required
            className="w-full border p-2 rounded"
            value={formData.cardNumber}
            minLength={16}
            onChange={(e) =>
              setFormData({ ...formData, cardNumber: e.target.value })
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              required
              className="w-full border p-2 rounded"
              value={formData.expiryDate}
              onChange={(e) =>
                setFormData({ ...formData, expiryDate: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block mb-1">CVV</label>
            <input
              type="text"
              required
              className="w-full border p-2 rounded"
              minLength={3}
              value={formData.cvv}
              onChange={(e) =>
                setFormData({ ...formData, cvv: e.target.value })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;

import { Link } from "react-router-dom";

const SuccessPage = () => (
  <div className="container mx-auto p-4 text-center">
    <h1 className="text-3xl font-bold text-green-600 mb-4">
      Payment Successful!
    </h1>
    <p className="mb-4">Your order has been placed successfully.</p>
    <Link to="/" className="text-blue-600">
      Continue Shopping
    </Link>
  </div>
);

export default SuccessPage;

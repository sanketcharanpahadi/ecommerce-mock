import { Link } from "react-router-dom";

const FailurePage = () => (
  <div className="container mx-auto p-4 text-center">
    <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
    <p className="mb-4">
      There was an error processing your payment. Please try again.
    </p>
    <Link to="/checkout" className="text-blue-600">
      Return to Checkout
    </Link>
  </div>
);

export default FailurePage;

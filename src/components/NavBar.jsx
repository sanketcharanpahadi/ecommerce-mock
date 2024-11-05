import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../utils/data";
const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="text-white text-xl font-bold ml-4">
              SHOPPE
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-white flex items-center">
              <ShoppingCart size={24} />
              <span className="ml-1">({cartCount})</span>
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white shadow-lg absolute w-64 z-50">
          <div className="py-2">
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

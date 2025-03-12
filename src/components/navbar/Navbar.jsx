import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-blue-500">
          🌍 <Link to="/">Communion</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          {/* Communities Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 hover:text-blue-600"
              onClick={() => toggleDropdown("communities")}
            >
              <span>Communities</span>
              <motion.div
                animate={{ rotate: dropdown === "communities" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
            {dropdown === "communities" && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-2 w-40">
                <Link
                  to="/community1"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdown(null)}
                >
                  Community 1
                </Link>
                <Link
                  to="/community2"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdown(null)}
                >
                  Community 2
                </Link>
              </div>
            )}
          </div>

          {/* Events Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 hover:text-blue-600"
              onClick={() => toggleDropdown("events")}
            >
              <span>Events</span>
              <motion.div
                animate={{ rotate: dropdown === "events" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
            {dropdown === "events" && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-2 w-40">
                <Link
                  to="/events"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdown(null)}
                >
                  All Events
                </Link>
                <Link
                  to="/add-event"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdown(null)}
                >
                  Add Event
                </Link>
              </div>
            )}
          </div>

          <Link to="/leaders" className="hover:text-blue-600">
            Leaders
          </Link>
          <Link to="/support" className="hover:text-blue-600">
            Support
          </Link>

          {/* User Avatar */}
          <Avatar className="ml-4 w-10 h-10">
            <AvatarImage
              className="w-10 h-10 rounded-full"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CA</AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 text-center text-gray-800">
          <Link
            to="/"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* Communities Dropdown (Mobile) */}
          <button
            className="flex items-center justify-center space-x-1 hover:text-blue-600"
            onClick={() => toggleDropdown("communities")}
          >
            <span>Communities</span>
            <motion.div
              animate={{ rotate: dropdown === "communities" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </button>
          {dropdown === "communities" && (
            <div className="flex flex-col text-sm space-y-1">
              <Link
                to="/community1"
                className="hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Community 1
              </Link>
              <Link
                to="/community2"
                className="hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Community 2
              </Link>
            </div>
          )}

          {/* Events Dropdown (Mobile) */}
          <button
            className="flex items-center justify-center space-x-1 hover:text-blue-600"
            onClick={() => toggleDropdown("events")}
          >
            <span>Events</span>
            <motion.div
              animate={{ rotate: dropdown === "events" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </button>
          {dropdown === "events" && (
            <div className="flex flex-col text-sm space-y-1">
              <Link
                to="/events"
                className="hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                All Events
              </Link>
              <Link
                to="/add-event"
                className="hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Add Event
              </Link>
            </div>
          )}

          <Link
            to="/leaders"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Leaders
          </Link>
          <Link
            to="/support"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>

          {/* User Avatar (Mobile) */}
          <div className="flex justify-center mt-2">
            <Avatar className="w-10 h-10">
              <AvatarImage
                className="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      )}
    </nav>
  );
}

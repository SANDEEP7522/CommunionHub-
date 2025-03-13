import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-[2rem]">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Create a New Event
        </h1>
        <p className="text-3xl font-semibold text-blue-600 mt-2">
          Fill in the details to create your event
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Fill out the form below with the key details about your event,
          including date, location, and highlights. Make it engaging to attract
          your audience and ensure everything is set for a successful launch.
        </p>

        <div className="flex justify-center items-center gap-4 mt-6">
          <div className="flex -space-x-2">
            <img
              src="https://github.com/shadcn.png"
              alt="User"
              className="w-10 h-10 rounded-full border border-white shadow-md"
            />
            <img
              src="https://github.com/shadcn.png"
              alt="User"
              className="w-10 h-10 rounded-full border border-white shadow-md"
            />
            <img
              src="https://github.com/shadcn.png"
              alt="User"
              className="w-10 h-10 rounded-full border border-white shadow-md"
            />
            <img
              src="https://github.com/shadcn.png"
              alt="User"
              className="w-10 h-10 rounded-full border border-white shadow-md"
            />
            <img
              src="https://github.com/shadcn.png"
              alt="User"
              className="w-10 h-10 rounded-full border border-white shadow-md"
            />
          </div>
          <div className="text-left">
            <p className="text-gray-900 dark:text-white font-semibold">
              Trusted by Over 15k+
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Individuals Worldwide.
            </p>
          </div>
        </div>

        <Link
           to="/events"
        >
          <motion.div className="mt-6" whileHover={{ scale: 1.05 }}>
            <Button className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800">
              Explore Events <ArrowRight size={18} />
            </Button>
          </motion.div>
        </Link>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Left Section */}
        <div>
          <h2 className="text-white text-2xl font-semibold flex items-center gap-2">
            <span className="text-blue-500 text-3xl">⚪</span> Communion
          </h2>
          <p className="mt-4 text-gray-400">
            Discover the power of connection with Communion. Uniting diverse
            communities through spirituality and innovation, we foster
            inclusivity, collaboration, and social cohesion for a better world.
          </p>
          <div className="flex gap-4 mt-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              {
                icon: <FaYoutube />,
                link: "https://www.youtube.com/watch?v=xhWt6l4-bAQ",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/sandeep-kumar-sahu-ab9a73303/",
              },
              { icon: <FaGithub />, link: "https://github.com/SANDEEP7522" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className="text-gray-400 hover:text-white text-xl transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {[
              "Home",
              "Communities",
              "Events",
              "Leaders",
              "Support",
              "Profile",
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5, color: "#ffffff" }}
                className="transition-all duration-300"
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-400"
          >
            contact@communionhub.org
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="border-t border-gray-700 mt-6 pt-6 text-sm text-center md:flex md:justify-between"
      >
        <p>Copyright © 2024. All rights reserved to Communion</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center mt-[5rem]">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-6xl md:text-6xl  font-bold">
          Welcome to Connect Communities
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-lg">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full  space-x-2 shadow-md"
      >
        <span className="text-sm md:text-lg font-semibold">
          ✅ Unlimited Advantages
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="fixed items-center justify-center mt-[11rem]  z-50" // Fixed positioning with high z-index
      >
        <Link
          to="/events"
          className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg 
                   hover:bg-gray-800 transition transform hover:scale-105"
        >
          Redirect Event Page
        </Link>
      </motion.div>

      <div className="flex justify-center items-center text-center p-6 md:p-10 relativ">
        {/* Animated Badge */}
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-5xl font-bold mt-4"
          >
            Unite, Innovate, <br />
            <span className="text-gray-700">Connect, Inspire</span>
            <br /> Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-gray-600 display-none max-w-md md:max-w-xl text-sm md:text-lg"
          >
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a more inclusive and engaging
            world!
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pWsD9ZxK0fbhv-LGrtieVWjEC8L2zl-g3Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZh5EVpVnitaXEmAyVziysjQkBf_FMAHjVCII_0kVlaqV2-g25GXDLBXZ4qQ9xtmtUtU&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZh5EVpVnitaXEmAyVziysjQkBf_FMAHjVCII_0kVlaqV2-g25GXDLBXZ4qQ9xtmtUtU&usqp=CAU",
          ].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              className="w-28 h-40 md:w-40 md:h-60 rounded-2xl flex items-center justify-center object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
      {/* Button Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6"
      >
        <Link
          to="/services"
          className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-gray-800 transition"
        >
          View Our Services ⬇️
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

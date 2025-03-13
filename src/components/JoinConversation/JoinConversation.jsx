import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function JoinConversation() {
  return (
    <section className="container mx-auto py-12 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join the Conversation
      </motion.h2>

      <motion.p
        className="text-xl text-blue-600 font-semibold mt-2 flex justify-center items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Sparkles size={20} /> Build Connections
      </motion.p>

      <motion.p
        className="mt-4 text-gray-600 max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Discover a vibrant community, share your thoughts, and connect with
        like-minded individuals. Together, we grow.
      </motion.p>

      <motion.button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 mx-auto hover:bg-blue-700 transition"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Join Conversations <ArrowRight size={18} />
      </motion.button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <img
            src="https://lemon.io/wp-content/uploads/2023/02/Artboard-15-980x536-optim.jpg"
            alt="Community 1"
            className="rounded-lg shadow-lg w-80 h-52 object-cover"
          />
          <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
            Front-end developer vs. web designer: what is the difference between
            them
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <img
            src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1673383092/ComputerScience.org/day-in-the-life-of-a-software-dev/day-in-the-life-of-a-software-dev.jpg?_i=AA"
            alt="Community 2"
            className="rounded-lg shadow-lg w-80 h-52 object-cover"
          />
          <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
            Software developers invent the technologies we sometimes take for
            granted.
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <motion.div
          className="p-4 bg-white shadow-md rounded-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          😊 Happy Community
        </motion.div>
        <motion.div
          className="p-4 bg-white shadow-md rounded-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          🚀 210% Boost in Engagement
        </motion.div>
        <motion.div
          className="p-4 bg-white shadow-md rounded-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          🌍 172+ Ranked Communities
        </motion.div>
      </div>
    </section>
  );
}

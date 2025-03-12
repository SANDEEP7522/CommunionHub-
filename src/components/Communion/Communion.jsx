import { useEffect, useState } from "react";
import { ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Lightbulb,
  LineChart,
  ArrowRight,
  ArrowUpLeftSquare,
} from "lucide-react";

export default function Communion() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Why Communion Rocks!</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed">
            Communion is not just another platform—it's a vibrant space that
            unites diverse faiths, beliefs, and traditions. By promoting
            collaboration and connection, we're fostering a world where
            differences become strengths and unity becomes the norm.
          </p>
          <motion.button
            className="mt-4 flex items-center gap-2 text-lg font-medium hover:underline"
            whileHover={{ scale: 1.1 }}
          >
            Why Join Us? <ArrowDownCircle />
          </motion.button>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.div
            className="w-full sm:w-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-900 text-white border-gray-700 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="text-white w-12 h-12 mb-3" />
                <h2 className="text-xl font-semibold">Unifying Communities</h2>
                <p className="text-gray-400">
                  Communion bridges diverse religious communities, becoming a
                  social glue for faiths.
                </p>
                <motion.div whileHover={{ scale: 1.1 }} className="mt-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    Learn More <ArrowRight size={18} />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="w-full sm:w-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-900 text-white border-gray-700 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Lightbulb className="text-white w-12 h-12 mb-3" />
                <h2 className="text-xl font-semibold">Innovation</h2>
                <p className="text-gray-400">
                  Experience faith in a fresh way through interactive features
                  and engaging events.
                </p>
                <motion.div whileHover={{ scale: 1.1 }} className="mt-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    Learn More <ArrowRight size={18} />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="w-full sm:w-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-900 text-white border-gray-700 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <LineChart className="text-white w-12 h-12 mb-3" />
                <h2 className="text-xl font-semibold">Promoting Unity</h2>
                <p className="text-gray-400">
                  We foster understanding and harmony between different faith
                  communities.
                </p>
                <motion.div whileHover={{ scale: 1.1 }} className="mt-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    Learn More <ArrowRight size={18} />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* add inside new folder */}
      <motion.button
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-white dark:bg-gray-700 shadow-xl rounded-full p-3 md:p-4 transition-all"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        <ArrowUpLeftSquare className="text-gray-900 dark:text-white w-6 h-6 md:w-8 md:h-8" />
      </motion.button>
    </div>
  );
}

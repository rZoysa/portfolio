// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-4xl font-bold">Hi, I'm Rithik Zoysa 👋</p>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-lg text-gray-400 mt-4">
          Mobile App Developer | Flutter Enthusiast
        </p>
      </motion.div>

      <a href="#projects">
        <button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg 
                      transition-all hover:bg-gradient-to-b hover:from-blue-700 hover:to-blue-500 transform hover:scale-105
                      shadow-md hover:shadow-lg cursor-pointer"
        >
          View My Work
        </button>
      </a>
    </section>
  );
}

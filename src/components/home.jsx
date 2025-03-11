// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="text-center py-20">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Rithik Zoysa 👋
      </motion.h1>

      <p className="text-lg text-gray-400 mt-4">
        Mobile App Developer | Flutter Enthusiast
      </p>

      <a href="#projects">
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          View My Work
        </button>
      </a>
    </section>
  );
}

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-semibold">Let's Connect</h2>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/rZoysa" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="cursor-pointer hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/rithikzoysa/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="cursor-pointer hover:text-gray-400" />
        </a>
        <a href="mailto:rithikzoysa@gmail.com">
          <FaEnvelope size={30} className="cursor-pointer hover:text-gray-400" />
        </a>
      </div>
    </section>
  );
}

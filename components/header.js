import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
        >
          Illia Zub
        </Link>
        <div className="flex gap-6">
          <Link
            href="/blog"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Blog
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

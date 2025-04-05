import { motion } from 'framer-motion'
import Link from "next/link";

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <nav className="flex justify-between items-center p-6">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Illia Zub
          </Link>
        </motion.div>
        <div className="space-x-8">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="/blog" 
            className="text-white hover:text-cyan-400 transition-colors"
          >
            Blog
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/services"
            className="text-white hover:text-pink-400 transition-colors"
          >
            Services
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}

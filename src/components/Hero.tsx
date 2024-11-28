import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-blue-50 to-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Your Personal Laundry & Dry Cleaning Partner
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-8"
        >
          Clean Clothes, Zero Hassle!
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-700 mb-12"
        >
          Hate doing laundry? Don't have time for it? We're here to help!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a href="/order" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Order Now
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
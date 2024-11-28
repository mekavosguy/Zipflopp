import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccess({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-4"
          >
            <CheckCircle className="w-16 h-16 text-green-500" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">Order Placed Successfully!</h3>
          <p className="text-gray-600 mb-6">
            Your order details have been sent to WhatsApp. We'll contact you shortly to confirm the pickup.
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
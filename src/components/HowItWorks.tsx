import { motion } from 'framer-motion';
import { ShoppingCart, Waves, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    title: "Book Your Service",
    description: "Message us on WhatsApp to order."
  },
  {
    icon: Waves,
    title: "We Do the Work",
    description: "Your clothes are washed, dried, and folded with care."
  },
  {
    icon: PackageCheck,
    title: "Get Fresh Laundry Delivered",
    description: "Enjoy clean clothes without lifting a finger!"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="inline-block p-4 bg-blue-600 rounded-full mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
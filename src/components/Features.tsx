import { motion } from 'framer-motion';
import { Package, Clock, Zap } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: "Pickup & Delivery at Your Doorstep",
    description: "Skip the laundromat – we collect, clean, and return your clothes fresh and folded."
  },
  {
    icon: Clock,
    title: "Quick & Reliable Service",
    description: "Perfect for busy professionals or anyone who values their time."
  },
  {
    icon: Zap,
    title: "Ideal for the Always-on-the-Go",
    description: "Too busy or just hate doing laundry? Relax, we've got it covered."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
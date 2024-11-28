import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Regular Laundry",
    price: 20,
    description: "Delivery in 48 Hours",
    features: ["Min 10 piece","T-shirts", "Pants", "Shirts", "Inner t-shirts",
      "exclusive of delivery charges"
    ]
  },
  {
    name: "Xpress Laundry ",
    price: 50,
    description: "Delivery in 24 Hours",
    features: ["Min 5 piece","Regular Laundry",
      
      "Priority processing",
      "Free pickup & delivery around 2 km"
    ],
    popular: true
  },
  {
    name: "Dry Cleaning",
    price: 35,
    description: "Delivery in 48 Hours",
    features: ["Min 5 piece",
      "Regular Laundry",
     "Suits", "Dresses", "Jackets", "Coats","exclusive of delivery charges"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Choose the perfect plan for your laundry needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                pkg.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold">
                  ₹{pkg.price}
                  <span className="text-base font-normal text-gray-600">/piece</span>
                </div>
              </div>
              <ul className="space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/order"
                className={`mt-8 block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
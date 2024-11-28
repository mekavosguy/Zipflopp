import { motion } from 'framer-motion';
import { User, Phone, MapPin } from 'lucide-react';

export interface CustomerData {
  name: string;
  mobile: string;
  address: string;
}

interface Props {
  data: CustomerData;
  onChange: (data: CustomerData) => void;
  isValid: boolean;
}

export default function CustomerInfo({ data, onChange, isValid }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name *
          </div>
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Mobile Number *
          </div>
        </label>
        <input
          type="tel"
          value={data.mobile}
          onChange={(e) => onChange({ ...data, mobile: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your mobile number"
          pattern="[0-9]{10}"
          maxLength={10}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Delivery Address *
          </div>
        </label>
        <textarea
          value={data.address}
          onChange={(e) => onChange({ ...data, address: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your complete address"
          rows={3}
          required
        />
      </div>

      {!isValid && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm"
        >
          Please fill in all required fields
        </motion.p>
      )}
    </motion.div>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shirt, ShirtIcon, Scissors } from 'lucide-react';
import OrderSuccess from './OrderSuccess';
import CustomerInfo, { CustomerData } from './CustomerInfo';

const WHATSAPP_NUMBER = '917907403509'; // Replace with your WhatsApp number

const services = [
  { id: 'regular', name: 'Regular Laundry', price: 20, icon: ShirtIcon },
  { id: 'drycleaning', name: 'Xpress Laundry', price: 50, icon: Shirt },
  { id: 'ironing', name: 'Dry Cleaning', price: 35, icon: Shirt },
];

export default function OrderForm() {
  const [items, setItems] = useState<Record<string, number>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    mobile: '',
    address: '',
  });
  
  const calculateTotal = () => {
    return Object.entries(items).reduce((total, [service, quantity]) => {
      const servicePrice = services.find(s => s.id === service)?.price || 0;
      return total + (servicePrice * quantity);
    }, 0);
  };

  const isCustomerDataValid = () => {
    return (
      customerData.name.trim() !== '' &&
      customerData.mobile.trim().length === 10 &&
      customerData.address.trim() !== ''
    );
  };

  const handleSubmit = async () => {
    if (!isCustomerDataValid()) return;
    setIsSubmitting(true);
    
    const orderDetails = Object.entries(items)
      .filter(([_, quantity]) => quantity > 0)
      .map(([service, quantity]) => {
        const serviceInfo = services.find(s => s.id === service);
        return `${serviceInfo?.name}: ${quantity} pieces (₹${serviceInfo?.price} × ${quantity})`;
      })
      .join('\n');

    const message = `🧺 *New Laundry Order*\n\n` +
      `👤 *Customer Details*\n` +
      `Name: ${customerData.name}\n` +
      `Mobile: ${customerData.mobile}\n` +
      `Address: ${customerData.address}\n\n` +
      `📋 *Order Details*\n${orderDetails}\n\n` +
      `💰 *Total Amount:* ₹${calculateTotal()}\n\n` +
      `Thank you for choosing LaundryPro!`;
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`);
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto p-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Place Your Order</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Customer Information</h3>
            <CustomerInfo
              data={customerData}
              onChange={setCustomerData}
              isValid={isCustomerDataValid()}
            />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Select Services</h3>
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-gray-600">₹{service.price} per piece</p>
                    </div>
                  </div>
                  <input
                    type="number"
                    min="0"
                    value={items[service.id] || 0}
                    onChange={(e) => setItems({
                      ...items,
                      [service.id]: parseInt(e.target.value) || 0
                    })}
                    className="w-20 p-2 border rounded"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total Amount: (delivery charges not added)</span>
              <span className="text-xl font-bold">₹{calculateTotal()}</span>
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || calculateTotal() === 0 || !isCustomerDataValid()}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                isSubmitting || calculateTotal() === 0 || !isCustomerDataValid()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Processing...
                </span>
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {showSuccess && <OrderSuccess onClose={() => setShowSuccess(false)} />}
    </>
  );
}
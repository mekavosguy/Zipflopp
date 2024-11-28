import { WashingMachine, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <WashingMachine className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-xl text-white">LaundryPro</span>
            </div>
            <p className="text-gray-400">
              Your trusted laundry partner in Coimbatore. Making laundry day stress-free, one load at a time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919876543210" className="hover:text-blue-400">+917907403509</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@laundrypro.com" className="hover:text-blue-400">zipfold.in@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Coimbatore, Tamil Nadu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/order" className="hover:text-blue-400">Order Now</a></li>
              <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Saturday</li>
              <li>9:00 AM - 8:00 PM</li>
              <li className="text-yellow-400">Pickup: 4:00 PM - 7:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LaundryPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
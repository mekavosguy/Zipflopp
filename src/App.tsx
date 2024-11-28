import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { WashingMachine } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <WashingMachine className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">ZipFold</span>
          </Link>
          <Link
            to="/order"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">📍 Now Available in Coimbatore</h2>
          <p className="text-xl mb-8">Experience hassle-free laundry services in your neighborhood.</p>
          
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
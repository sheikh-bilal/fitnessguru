import Navbar from './components/navbar';
import Hero from './components/hero';
import Classes from './components/classes';
import Coaches from './components/coaches';
import Results from './components/results';
import Pricing from './components/pricing';
import Reviews from './components/reviews';
import Footer from './components/footer';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Classes />
      <Coaches />
      <Results />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}

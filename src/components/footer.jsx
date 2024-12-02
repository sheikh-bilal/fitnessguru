import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white rounded-[32px] px-8 py-12 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Contact Section */}
          <div className="space-y-6">
            <img
              src="/placeholder.svg?height=40&width=160"
              alt="MURA"
              width={160}
              height={40}
              className="mb-6"
            />
            <div className="space-y-2 text-gray-400">
              <p>Rotonda Giuliani 3 Bianco</p>
              <p>veneto, 62383 Bergamo (VS)</p>
              <p className="pt-2">info@mura.com</p>
            </div>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Menu Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Menu</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Operational Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Operational</h3>
            <div className="space-y-4 text-gray-400">
              <p>Every day: 9:00 – 22:00</p>
              <p>Sat – Sun: 8:00 – 21:00</p>
              <div className="pt-4">
                <h4 className="text-white mb-2">New Schedule?</h4>
                <p>+ (123) 1800-567-8990</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            Copyright © MURA. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}

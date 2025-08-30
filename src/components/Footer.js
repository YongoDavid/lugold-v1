import {Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube,} from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="bg-yellow-600 text-white p-2 rounded-lg font-bold text-lg">
                LG
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">LU GOLD STORE</h3>
                <p className="text-gray-400 text-sm">Premium Electronics</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Your trusted partner for premium electrical appliances with quality guarantee and exceptional customer service.
            </p>
            <div className="flex gap-4">
              <Facebook size={20} className="cursor-pointer hover:text-yellow-400 transition-colors" />
              <Instagram size={20} className="cursor-pointer hover:text-yellow-400 transition-colors" />
              <Twitter size={20} className="cursor-pointer hover:text-yellow-400 transition-colors" />
              <Youtube size={20} className="cursor-pointer hover:text-yellow-400 transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Categories</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Smartphones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Laptops</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">TV & Audio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Gaming</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Contact Info</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">Lagos & Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">+234 800 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base break-all">hello@lugoldstore.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 LU GOLD STORE. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

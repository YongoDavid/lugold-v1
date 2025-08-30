import { useState } from 'react';
import { ShoppingCart, Search, Heart,  Menu, X, ChevronRight, Filter, User, Phone, Mail, Facebook, Twitter, Instagram, Truck,} from 'lucide-react';
export default function Header(props) {
    const categories = props.categories;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
  return (
    <div>
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
            {/* Top Bar */}
            <div className="bg-gray-900 text-white py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                        <Phone size={14} />
                        <span className="hidden lg:inline">+234 800 123 4567</span>
                        <span className="lg:hidden">Call Us</span>
                        </span>
                        <span className="flex items-center gap-2 hidden lg:flex">
                        <Mail size={14} />
                        hello@lugoldstore.com
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden xl:inline">Free delivery in Lagos & Abuja</span>
                        <span className="xl:hidden">Free delivery</span>
                        <div className="flex gap-2">
                        <Facebook size={16} className="cursor-pointer hover:text-yellow-400" />
                        <Instagram size={16} className="cursor-pointer hover:text-yellow-400" />
                        <Twitter size={16} className="cursor-pointer hover:text-yellow-400" />
                        </div>
                    </div>
                </div>
            </div>
  
            {/* Main Header */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="bg-yellow-600 text-white p-1.5 md:p-2 rounded-lg font-bold text-sm md:text-lg">
                        LG
                        </div>
                        <div>
                        <h1 className="text-lg md:text-xl font-bold text-gray-900">LU GOLD STORE</h1>
                        <p className="text-xs text-gray-600 hidden sm:block">Premium Electronics</p>
                        </div>
                    </div>

                    {/* Search Bar - Hidden on mobile, shown on tablet+ */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for electronics, phones, laptops..."
                                className="w-full px-4 py-2.5 md:py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm md:text-base"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-md hover:bg-yellow-700 transition-colors">
                                <Search size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1 md:gap-4">
                        <button className="hidden md:flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <User size={20} />
                        <span className="hidden lg:block">Account</span>
                        </button>
                        <button 
                        onClick={() => {}}
                        className="relative flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                        <Heart size={18} md={20} />
                        <span className="hidden lg:block">Wishlist</span>
                        {wishlistItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-xs">
                            {wishlistItems.length}
                            </span>
                        )}
                        </button>
                        <button 
                        onClick={() => {}}
                        className="relative flex items-center gap-1 md:gap-2 bg-yellow-600 text-white px-2 md:px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm md:text-base"
                        >
                        <ShoppingCart size={18} />
                        <span className="hidden sm:block">Cart</span>
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        )}
                        </button>
                        <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg ml-2"
                        >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="md:hidden mt-4">
                    <div className="relative">
                        <input
                        type="text"
                        placeholder="Search electronics..."
                        className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-md hover:bg-yellow-700 transition-colors">
                        <Search size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="bg-gray-50 border-t border-gray-200 hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-4 lg:gap-8">
                            <button className="flex items-center gap-2 font-medium text-gray-900 hover:text-yellow-600 transition-colors">
                                <Filter size={18} />
                                <span className="hidden lg:inline">All Categories</span>
                                <span className="lg:hidden">Categories</span>
                            </button>
                            {categories.slice(0, 4).map((category) => (
                                <a 
                                key={category.name}
                                href="#" 
                                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium text-sm lg:text-base hidden lg:block"
                                >
                                {category.name}
                                </a>
                            ))}
                            <div className="lg:hidden">
                                <select className="text-sm border-none bg-transparent text-gray-700 font-medium">
                                <option>More Categories</option>
                                {categories.map((category) => (
                                    <option key={category.name}>{category.name}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-4">
                            <span className="text-xs lg:text-sm text-gray-600 hidden lg:inline">24/7 Support</span>
                            <div className="flex items-center gap-1 lg:gap-2">
                                <Truck size={14} lg={16} className="text-green-600" />
                                <span className="text-xs lg:text-sm text-gray-600">Free Shipping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col space-y-4">
                            <button className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="flex items-center gap-2">
                            <Filter size={18} />
                            All Categories
                            </span>
                            <ChevronRight size={16} />
                            </button>
                
                            <div className="grid grid-cols-2 gap-2">
                                {categories.slice(0, 6).map((category) => (
                                    <a 
                                        key={category.name}
                                        href="#" 
                                        className="flex items-center gap-2 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        <span>{category.icon}</span>
                                        <span className="text-sm">{category.name}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="border-t pt-4">
                                <button className="flex items-center gap-2 p-3 w-full text-left hover:bg-gray-50 rounded-lg">
                                <User size={18} />
                                My Account
                                </button>
                                <div className="flex items-center justify-between p-3 text-sm text-gray-600">
                                    <span>24/7 Support</span>
                                    <span className="flex items-center gap-1">
                                        <Phone size={14} />
                                        +234 800 123 4567
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    </div>
  )
}

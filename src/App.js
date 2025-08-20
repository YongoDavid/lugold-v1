import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Heart, Star, Menu, X, ChevronLeft, ChevronRight, Filter, Grid, List, User, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Truck, Shield, Headphones, Award } from 'lucide-react';

// Mock product data with electronics
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 850000,
    originalPrice: 950000,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    category: "Smartphones",
    specs: ["256GB Storage", "A17 Pro Chip", "ProRAW Camera"]
  },
  {
    id: 2,
    name: "Samsung 65\" QLED 4K TV",
    price: 650000,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    category: "Television",
    specs: ["4K Ultra HD", "HDR10+", "Smart TV"]
  },
  {
    id: 3,
    name: "MacBook Pro 16-inch M3",
    price: 1200000,
    originalPrice: 1350000,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 203,
    inStock: true,
    category: "Laptops",
    specs: ["M3 Chip", "16GB RAM", "512GB SSD"]
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Headphones",
    price: 180000,
    originalPrice: 220000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    category: "Audio",
    specs: ["Noise Cancelling", "30hr Battery", "Bluetooth 5.2"]
  },
  {
    id: 5,
    name: "Canon EOS R6 Mark II",
    price: 890000,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 78,
    inStock: false,
    category: "Cameras",
    specs: ["24.2MP Sensor", "4K Video", "Image Stabilization"]
  },
  {
    id: 6,
    name: "Gaming Desktop PC RTX 4080",
    price: 1500000,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 45,
    inStock: true,
    category: "Computers",
    specs: ["RTX 4080", "32GB RAM", "1TB NVMe SSD"]
  }
];

const categories = [
  { name: "Smartphones", icon: "📱", count: 45 },
  { name: "Laptops", icon: "💻", count: 32 },
  { name: "Television", icon: "📺", count: 28 },
  { name: "Audio", icon: "🎧", count: 67 },
  { name: "Cameras", icon: "📷", count: 23 },
  { name: "Gaming", icon: "🎮", count: 41 },
  { name: "Home Appliances", icon: "🏠", count: 89 },
  { name: "Accessories", icon: "🔌", count: 156 }
];

const heroSlides = [
  {
    id: 1,
    title: "Premium Electronics Collection",
    subtitle: "Discover the latest in technology",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "iPhone 15 Series Now Available",
    subtitle: "Experience the future in your hands",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200&h=600&fit=crop",
    cta: "Pre-order Now"
  },
  {
    id: 3,
    title: "Gaming Setup Essentials",
    subtitle: "Build your ultimate gaming experience",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop",
    cta: "Explore Gaming"
  }
];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      }
      return [...prev, {...product, quantity: 1}];
    });
  };

  const toggleWishlist = (productId) => {
    setWishlistItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Header Component
  const Header = () => (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              +234 800 123 4567
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} />
              hello@lugoldstore.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Free delivery in Lagos & Abuja</span>
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
          <div className="flex items-center gap-3">
            <div className="bg-yellow-600 text-white p-2 rounded-lg font-bold text-lg">
              LG
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">LU GOLD STORE</h1>
              <p className="text-xs text-gray-600">Premium Electronics</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for electronics, phones, laptops..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-md hover:bg-yellow-700 transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User size={20} />
              <span className="hidden md:block">Account</span>
            </button>
            <button 
              onClick={() => {}}
              className="relative flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Heart size={20} />
              <span className="hidden md:block">Wishlist</span>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => {}}
              className="relative flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 font-medium text-gray-900 hover:text-yellow-600 transition-colors">
                <Filter size={18} />
                All Categories
              </button>
              {categories.slice(0, 6).map((category) => (
                <a 
                  key={category.name}
                  href="#" 
                  className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
                >
                  {category.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">24/7 Support</span>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-green-600" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );

  // Hero Carousel Component
  const HeroCarousel = () => (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors transform hover:scale-105">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );

  // Features Section
  const FeaturesSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-yellow-600" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
            <p className="text-gray-600">Same day delivery in Lagos & Abuja</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-yellow-600" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Warranty Protection</h3>
            <p className="text-gray-600">Full manufacturer warranty on all products</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="text-yellow-600" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round the clock customer service</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-yellow-600" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p className="text-gray-600">Only authentic, certified products</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.originalPrice && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}
          <button 
            onClick={() => toggleWishlist(product.id)}
            className={`p-2 rounded-full transition-colors ${
              wishlistItems.includes(product.id) 
                ? 'bg-red-100 text-red-600' 
                : 'bg-white text-gray-400 hover:text-red-600'
            }`}
          >
            <Heart size={18} fill={wishlistItems.includes(product.id) ? 'currentColor' : 'none'} />
          </button>
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="mb-3">
          {product.specs.map((spec, index) => (
            <span key={index} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1">
              {spec}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="flex items-center text-sm">
            <div className={`w-2 h-2 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        <button 
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            product.inStock 
              ? 'bg-yellow-600 text-white hover:bg-yellow-700' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Notify When Available'}
        </button>
      </div>
    </div>
  );

  // Products Section
  const ProductsSection = () => (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our premium collection of electronics</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-yellow-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid size={18} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-yellow-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <List size={18} />
              </button>
            </div>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>Sort by popularity</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
              <option>Sort by rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );

  // Categories Section
  const CategoriesSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} items</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Newsletter Section
  const NewsletterSection = () => (
    <section className="py-16 bg-yellow-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Latest Deals
        </h2>
        <p className="text-yellow-100 text-lg mb-8">
          Subscribe to our newsletter and never miss out on exclusive offers
        </p>
        <div className="max-w-md mx-auto flex gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-300"
          />
          <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-600 text-white p-2 rounded-lg font-bold text-lg">
                LG
              </div>
              <div>
                <h3 className="text-xl font-bold">LU GOLD STORE</h3>
                <p className="text-gray-400 text-sm">Premium Electronics</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium electrical appliances with quality guarantee and exceptional customer service.
            </p>
            <div className="flex gap-4">
              <Facebook className="cursor-pointer hover:text-yellow-400 transition-colors" />
              <Instagram className="cursor-pointer hover:text-yellow-400 transition-colors" />
              <Twitter className="cursor-pointer hover:text-yellow-400 transition-colors" />
              <Youtube className="cursor-pointer hover:text-yellow-400 transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smartphones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Laptops</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">TV & Audio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gaming</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-yellow-400" />
                <span className="text-gray-300">Lagos & Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                <span className="text-gray-300">+234 800 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                <span className="text-gray-300">hello@lugoldstore.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 LU GOLD STORE. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <FeaturesSection />
      <CategoriesSection />
      <ProductsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default App;
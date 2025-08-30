import React, { useState} from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import FeaturesSection from './components/FeaturesSection';
import CategoriesSection from './components/CategoriesSection';
import ProductsSection from './components/ProductsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import {Heart, Star} from 'lucide-react';

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


const EcommerceApp = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

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

  return (
    <div className="min-h-screen bg-white">
      <Header categories={categories} />
      <HeroCarousel />
      <FeaturesSection />
      <CategoriesSection categories={categories} />
      <ProductsSection ProductCard={ProductCard} />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default EcommerceApp;
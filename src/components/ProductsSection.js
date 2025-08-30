import { useState } from "react";
import { Grid, List, } from 'lucide-react';
export default function ProductsSection(props) {
    const ProductCard = props.ProductCard;
    const [viewMode, setViewMode] = useState('grid');
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
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our premium collection of electronics</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-yellow-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid size={16} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-yellow-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <List size={16} />
              </button>
            </div>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-auto">
              <option>Sort by popularity</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
              <option>Sort by rating</option>
            </select>
          </div>
        </div>

        <div className={`grid gap-4 md:gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-yellow-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

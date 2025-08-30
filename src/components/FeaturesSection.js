import { Truck, Shield, Headphones, Award } from 'lucide-react';
export default function FeaturesSection() {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="text-center">
                    <div className="bg-yellow-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Truck className="text-yellow-600" size={20} />
                    </div>
                    <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">Free Delivery</h3>
                    <p className="text-gray-600 text-xs md:text-base">Same day delivery in Lagos & Abuja</p>
                </div>
                <div className="text-center">
                    <div className="bg-yellow-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Shield className="text-yellow-600" size={20} />
                    </div>
                    <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">Warranty Protection</h3>
                    <p className="text-gray-600 text-xs md:text-base">Full manufacturer warranty on all products</p>
                </div>
                <div className="text-center">
                    <div className="bg-yellow-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Headphones className="text-yellow-600" size={20} />
                    </div>
                    <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">24/7 Support</h3>
                    <p className="text-gray-600 text-xs md:text-base">Round the clock customer service</p>
                </div>
                <div className="text-center">
                    <div className="bg-yellow-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Award className="text-yellow-600" size={20} />
                    </div>
                    <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">Premium Quality</h3>
                    <p className="text-gray-600 text-xs md:text-base">Only authentic, certified products</p>
                </div>
            </div>
        </div>
    </section>
  )
}

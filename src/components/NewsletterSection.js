export default function NewsletterSection() {
  return (
    <section className="py-8 md:py-16 bg-yellow-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
          Stay Updated with Latest Deals
        </h2>
        <p className="text-yellow-100 text-base md:text-lg mb-6 md:mb-8">
          Subscribe to our newsletter and never miss out on exclusive offers
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-300 text-sm md:text-base"
          />
          <button className="bg-white text-yellow-600 px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

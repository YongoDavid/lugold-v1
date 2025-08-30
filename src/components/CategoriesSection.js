export default function CategoriesSection(props) {
    const categories = props.categories;
  return (
    <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
            </div>
        
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
                {categories.map((category) => (
                    <div 
                    key={category.name}
                    className="bg-white p-3 md:p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                    <div className="text-2xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                        {category.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-xs md:text-base">{category.name}</h3>
                    <p className="text-xs md:text-sm text-gray-500">{category.count} items</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

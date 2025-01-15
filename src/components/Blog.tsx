'use client'

import Image from 'next/image'

const blogPosts = [
  {
    title: "Seasonal Ingredients: Spring Edition",
    excerpt: "Discover the vibrant flavors of spring and how we incorporate them into our menu.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2023"
  },
  {
    title: "The Art of Food Plating",
    excerpt: "Learn about the techniques our chefs use to create visually stunning dishes.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 28, 2023"
  },
  {
    title: "Wine Pairing 101",
    excerpt: "A beginner's guide to pairing wine with food, featuring tips from our sommelier.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 10, 2023"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a href="#" className="text-green-600 hover:text-green-800">Read more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import React, { useState } from 'react'

export default function ServerInfoRoute() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              World of Warcraft News
            </h1>
            <p className="text-xl text-gray-300">Stay updated with the latest headlines</p>
          </header>

          <main className="space-y-12">
            <section>
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0">Latest News</h2>
                <div className="relative w-full md:w-auto">
                  <input
                      type="text"
                      placeholder="Search news..."
                      className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <NewsCard
                    title="Server Beta Launch"
                    content="Server beta launch is being scheduled for January 20th at 5 pm EST"
                    category="Event"
                />
                <NewsCard
                    title="New Expansion Teaser"
                    content="Blizzard hints at a new expansion. What could it be?"
                    category="Announcement"
                />

              </div>
            </section>
          </main>
        </div>
      </div>
  )
}

function NewsCard({ title, content, category }: { title: string; content: string; category: string }) {
  return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="text-sm px-2 py-1 bg-purple-600 rounded-full">{category}</span>
          </div>
          <p className="text-gray-400 mb-4">{content}</p>
          <button className="text-purple-400 hover:text-purple-300 focus:outline-none">
            Read more
          </button>
        </div>
      </div>
  )
}
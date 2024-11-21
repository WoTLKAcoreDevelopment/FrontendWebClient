// pages/signin.tsx

import React from 'react';

const serverInfoRoute = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to the News Page NIGGA</h1>
        <p className="text-xl text-gray-300">Stay updated with the latest headlines</p>
      </header>
      
      <main>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">News Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News articles will be fetched from an API */}
          {/* Placeholder for news articles */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Article Title</h3>
            <p className="text-gray-400">Article preview text...</p>
          </div>
          {/* Repeat for more articles */}
        </div>
      </main>
    </div>
  </div>
  );
};

export default serverInfoRoute;
 
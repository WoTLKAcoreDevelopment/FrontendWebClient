import React from 'react';

const serverInfoRoute = () => {
  return (
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Game Server Status</h1>
            <p className="text-xl text-gray-300">Keep up to date with Server Activity</p>
          </header>

          <main>
            {/* Section for World of Warcraft */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for server status cards */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">World of Warcraft</h3>
                  <p className="font-bold text-green-300">Server is Online 🟢</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Tera Unchained</h3>
                  <p className="font-bold text-green-300">Server is Online 🟢</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">ArcheAge PS</h3>
                  <p className="font-bold text-green-300">Server is Online 🟢</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
  );
};

export default serverInfoRoute;

'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:3001/api/signin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
      });

      const data = await response.json();

      if (data.success) {
        // Store user details
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);

        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        setError(data.message || 'Sign in failed');
      }
    } catch (error) {
      setError('An error occurred during sign in');
      console.log('Request body:', JSON.stringify({ username, email }));
    }
  };

  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">Sign In</h2>
          {error && (
              <div className="text-red-500 text-sm mb-4 text-center">
                {error}
              </div>
          )}
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900">Username</label>
              <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                     focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900"
                  required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                     focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
              />
            </div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
  )
}
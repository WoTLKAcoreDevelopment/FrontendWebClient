'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RegisterAccount = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    email,
                }),
            });

            const jsonResponse = await response.json();

            if (!response.ok) {
                throw new Error(jsonResponse.message || 'Failed to register');
            }

            // Clear form fields and set response message
            setUsername('');
            setPassword('');
            setEmail('');
            setResponseMessage(jsonResponse.message); // Display the JSON response message
            setError(null);
        } catch (error: unknown) {
            setResponseMessage(null);

            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Register Account</h1>
                {responseMessage && <p className="text-green-500 mb-4">{responseMessage}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-800"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-800"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-800"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500 mt-2">Error: {error}</p>}
                <p className="text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link href="/signin" className="text-blue-500 hover:text-blue-700">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterAccount;


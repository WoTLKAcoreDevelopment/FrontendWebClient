"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');

        if (!username || !email) {
            // If username or email is missing, redirect to sign-in
            router.push('/signin');
            return;
        }

        const verifyUser = async () => {
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
                    setIsAuthenticated(true);  // User is authenticated
                } else {
                    // If authentication fails, remove credentials and redirect to sign-in
                    localStorage.removeItem('username');
                    localStorage.removeItem('email');
                    router.push('/signin');
                }
            } catch (error) {
                console.error('Verification error:', error);
                // If error occurs, also redirect to sign-in
                router.push('/signin');
            } finally {
                setLoading(false);  // Done with the loading state
            }
        };

        verifyUser();
    }, [router]);

    // Show loading indicator while checking authentication
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                Loading...
            </div>
        );
    }

    // Render the protected content if authenticated
    return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;

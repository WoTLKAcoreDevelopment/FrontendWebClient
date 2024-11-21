import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Draenor Project",
    description: "Experience the world of Draenor",
    icons: {
        icon: [
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full">
        <body className={`${inter.className} flex flex-col min-h-screen bg-gray-900 text-white`}>
        <Navbar />
        <main className="flex-grow flex-col justify-center  px-4 py-15 bg-gray-800">
            {children}
        </main>
        <footer className=" py-6 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-300">&copy; {new Date().getFullYear()} Draenor Project. All rights reserved.</p>
            </div>
        </footer>
        </body>
        </html>
    );
}
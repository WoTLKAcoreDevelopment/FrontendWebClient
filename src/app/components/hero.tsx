'use client';
import React, { useEffect, useState } from 'react';
import heroImage from '../assets/carnage.png'
const Heroe = () => {
    const [downloaded, setDownloaded] = useState(false);

    useEffect(() => {
        if (downloaded) {
            // Redirect to /downloadfinish after download is complete
            setTimeout(() => {
                window.location.href = '/download';
            }, 1000); // Redirect after 1 second (adjust timing as needed)
        }
    }, [downloaded]);

    const handleDownload = () => {
        const data = "This is the content of the launcher file."; // Replace with your desired content

        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'launcher.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Set downloaded to true to trigger useEffect for redirection
        setDownloaded(true);
    };

    return (
        <div
            className="h-screen w-50  bg-cover bg-center flex items-center justify-center"
            style={{backgroundImage: `url(${heroImage.src})`}}
        >
            {/* Use an anchor tag to initiate download */}
            {/*<a
                href="#"
                className="bg-white bg-opacity-100 p-10 rounded-lg shadow-lg text-center text-black text-4xl font-bold cursor-pointer"
                onClick={handleDownload}
            >
                Download Launcher
            </a>
            */}
        </div>
    );
};

export default Heroe;

"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/cards-carousel";

export default function teraUnleashed() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-24">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Tera Unleashed
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const IntroContent = () => {
    return (
        <>
            <div>
                <h1 className="font-bold text-lg">What is this project about?</h1>
                <p className="text-gray-400">The Wrath of the lich king project was built with
                    <span className="text-blue-500 font-bold"> MMORPG Players </span> in mind.</p>
                <p className="text-gray-400">our goal here at the studio is to release a fresh yet familiar player
                    experience that is<span className="text-blue-500 font-bold"> Nostalgic, Classical </span>
                    that gives the player a sense of an old school MMORPG Vibe
                </p>
            </div>

        </>
    )
}

const DummyContent = () => {
    return (
        <>

            <Image
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            />
            );

        </>
    );
};



const data = [
    {
        category: "Server Intro",
        title: "What is this Project?",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <IntroContent />,
    },
    {
        category: "Custom Features",
        title: "Custom Features",
        src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "New Content",
        title: "Dungeons & Events",
        src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
];

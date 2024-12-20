"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/cards-carousel";

export default function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-24">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                World of Warcraft
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


const CustomFeatures = () => {
    return (
        <>
            <div>
                <Image src="https://i.ibb.co/7pLCpR2/wotlkserverintro.jpg"
                       alt="Macbook mockup from Aceternity UI" height="500"
                       width="500" className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain bg-[#F5F5F7]
                   dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"/>
                <h1 className="font-bold text-4xl">Server Boosted Rates</h1>

            </div>
        </>
    );
};

const CustomEvents = () => {
    return (
        <>
            <div>
                <Image src="https://i.ibb.co/7pLCpR2/wotlkserverintro.jpg"
                       alt="Macbook mockup from Aceternity UI" height="500"
                       width="500" className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain bg-[#F5F5F7]
                   dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"/>
                <h1 className="font-bold text-4xl">Custom Events & Dungeons</h1>

            </div>
        </>
    );
};



const data = [
    {
        category: "Server Intro",
        title: "What is this Project?",
        src: "https://i.ibb.co/7pLCpR2/wotlkserverintro.jpg",
        content: <IntroContent />,
    },
    {
        category: "Custom Features",
        title: "Custom Features",
        src: "https://i.ibb.co/hRsQ5Nw/wotlkboosted.webp",
        content: <CustomFeatures />,
    },
    {
        category: "New Content",
        title: "Dungeons & Events",
        src: "https://i.ibb.co/QDzSLqY/customeventswotlk.webp",
        content: <CustomEvents />,
    },
];

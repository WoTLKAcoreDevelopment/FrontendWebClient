'use server'

import { client } from "@/app/lib/sanity";
import {gameCard} from "@/app/lib/interface";


async function getData(): Promise<gameCard[]> {
    const query = `
    *[_type == 'gameList']{
        title,
        smallDescription,
        'currentSlug': slug.current,
        'titleImage': titleImage.asset->url
    }`;

    const data = await client.fetch(query);
    return data;
}

export default async function GameListCard() {
    try {
        const games = await getData();
        return games;
    } catch (error) {
        console.error("Error fetching game data:", error);
        return [];
    }
}

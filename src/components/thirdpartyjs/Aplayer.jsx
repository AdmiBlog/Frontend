"use client";
import { useEffect } from "react";
import '@/styles/APlayer.css';

export default function AplayerBase({
    name, artist, url, cover, lyrics
}
) {
    useEffect(() => {
        const Aplayer=require("aplayer/dist/APlayer.min");
        console.log(url);
        const aplayer = new Aplayer({
            container: document.getElementById('aplayer'),
            fixed: false,
            autoplay: false,
            lrcType: 1,
            audio: [
                {
                    name: name,
                    artist: artist,
                    url: url,
                    cover: cover,
                    lrc: lyrics
                }
            ]
        });
    },[]);
    return (
        <>
            <div id="aplayer"></div>
        </>
    );

}
"use client";
import { useEffect } from "react";
import Aplayer from "APlayer";
import '@/styles/APlayer.css';

export default function AplayerBase({
    name, artist, url, cover, lyrics
}
) {
    useEffect(() => {
        const aplayer = new Aplayer({
            container: document.getElementById('aplayer'),
            fixed: false,
            autoplay: true,
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
"use client";
import { useEffect } from "react";
import '@/styles/APlayer.css';

export default function AplayerBase({
    data
}
) {
    useEffect(() => {
        const Aplayer=require("aplayer/dist/APlayer.min");
        const aplayer = new Aplayer({
            container: document.getElementById('aplayer'),
            fixed: false,
            autoplay: false,
            lrcType: 1,
            audio: [
                {
                    name: data.name,
                    artist: data.artist,
                    url: data.url,
                    cover: data.cover,
                    lrc: data.lyrics
                }
            ]
        });
    },[]);
    return (
        <>
            <span>链接：{JSON.stringify(data)}</span>
            <div id="aplayer"></div>
        </>
    );

}
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
            lrcType: 3,
            audio: [
                {
                    name: data.name || data.title || 'Audio name',
                    artist: data.artist || data.author || 'Audio artist',
                    url: data.url,
                    cover: data.cover || data.pic,
                    lrc: data.lrc || data.lyric || '',
                    type: data.type || 'auto',
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
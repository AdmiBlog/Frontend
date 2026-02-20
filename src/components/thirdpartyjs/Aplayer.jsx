"use client";
import { useEffect } from "react";

import '@/styles/APlayer.css';




export default function AplayerBase({
    data
}
) {
    useEffect(() => {
        const Aplayer=require("aplayer/dist/APlayer.min");
        window.aplayer = data?
            (new Aplayer({
                container: document.getElementById("aplayer"),
                fixed: false,
                autoplay: false,
                lrcType: 3,
                listMaxHeight: 0,
                audio: data.map((item,index)=>
                    ({
                        name: item.name || item.title || 'Audio name',
                        artist: item.artist || item.author || 'Audio artist',
                        url: item.url,
                        cover: item.cover || item.pic,
                        lrc: item.lrc || item.lyric || '',
                        type: item.type || 'auto',
                    })
                )
            }))
        :undefined;
        window.setMusicIconFunc();
    },[data]);
    return (
        <>
        </>
    );

}
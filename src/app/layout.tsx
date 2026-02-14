"use client";
import { siteConfigs } from "@/config"; 
import NextTopLoader from "nextjs-toploader";
import { Navbar } from "@/components/Navbar";
import Welcome from "components/thirdpartyjs/Welcome";
import "styles/global.css";
import Footer from "@/components/Footer";
import LicenseTips from "@/components/thirdpartyjs/LicenseTips";
import { useState,useEffect, useRef } from 'react';
import { defaultSettings,getSettings,SettingsContext } from "@/utils/settings";
import type { Settings } from "@/utils/settings";
import ClarityScript from "@/components/thirdpartyjs/Clarity";
import AplayerBase from "@/components/thirdpartyjs/Aplayer";
import { MusicInfo } from "@/interfaces/music";
import { getPlayListInfo } from "@/utils/metingbase"; 

process.env.TZ = "Asia/Shanghai";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings,setSettings]=useState<Settings>(defaultSettings);
  const [musicData,setMusicData]=useState<MusicInfo[]>();
  const playerRef=useRef<HTMLElement>();
  useEffect(() => {
    getSettings().then((fetchedSettings) => {
      setSettings(fetchedSettings);
    });
  }, []);
  useEffect(() => {
    setInterval(()=>{
      if(window.location.href.includes("/music")){
        const div1 = document.getElementById('aplayer');
        const div2 = document.getElementById('musicpage-aplayer');
        if(div1&&div2&&!(div1?.parentElement==div2)){
          playerRef.current=div1;
          div2.appendChild(div1)
        }
      }
      else{
        const div1 = document.getElementById('out-aplayer');
        if(div1&&playerRef.current&&(!(playerRef.current?.parentElement==div1))){
          div1.appendChild(playerRef.current);
        }
      }
    },1000);
  }, []);
  useEffect(()=>{(async()=>{
    setMusicData(await getPlayListInfo("tencent","9307834870"));
  })()},[])
  return (
    <html lang="zh-cn" data-theme={settings.colorMode}>
      <head>
        <title>{siteConfigs.title}</title>
        <script src="/loadColorMode.js" />
        <link rel="icon" href="/avatar_.ico" sizes="any" />
      </head>
      <body>
        <style>{`#out-aplayer{position:fixed;left:10000px}`}</style>
        <SettingsContext.Provider value={{settings,setSettings}}>
          <Welcome />
          <LicenseTips />
          <NextTopLoader color="var(--admi-theme)" height={5} />
          <Navbar />
          <div className="primary-container">
            {children}
            <Footer />
          </div>
          <ClarityScript />
          <div id="out-aplayer">
          <div id="aplayer"></div>
          </div>
          <AplayerBase data={musicData}/>
        </SettingsContext.Provider>
      </body>
    </html>
  );
}

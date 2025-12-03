"use client";
import type { Metadata } from "next";
import { siteConfigs } from "@/config"; 
import NextTopLoader from "nextjs-toploader";
import { Navbar } from "@/components/Navbar";
import Welcome from "components/thirdpartyjs/Welcome";
import "styles/global.css";
import Footer from "@/components/Footer";
import LicenseTips from "@/components/thirdpartyjs/LicenseTips";
import { useState,useEffect } from 'react';
import { defaultSettings,getSettings,SettingsContext } from "@/utils/settings";
import type { Settings } from "@/utils/settings";

process.env.TZ = "Asia/Shanghai";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings,setSettings]=useState<Settings>(defaultSettings);
  useEffect(() => {
    getSettings().then((fetchedSettings) => {
      setSettings(fetchedSettings);
    });
    
  }, []);
  return (
    <html lang="zh-cn" data-theme={settings.colorMode}>
      <head>
        <title>{siteConfigs.title}</title>
        <script src="/loadColorMode.js" />
      </head>
      <body>
        <SettingsContext.Provider value={{settings,setSettings}}>
          <Welcome />
          <LicenseTips />
          <NextTopLoader color="var(--admi-theme)" height={5} />
          <Navbar />
          <div className="primary-container">
            {children}
            <Footer />
          </div>
        </SettingsContext.Provider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { siteConfigs } from "@/config"; 
import NextTopLoader from "nextjs-toploader";
import { Navbar } from "@/components/Navbar";

import "styles/global.css";

process.env.TZ = "Asia/Shanghai";

export const metadata: Metadata = {
  title: siteConfigs.title,
  alternates: {
    types: {
      "application/rss+xml": [{ url: "atom.xml", title: "RSS 订阅" }],
    },
  },
  description: "AdmiBlog's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <NextTopLoader color="var(--admi-theme)" height={5} />
        {children}
      </body>
    </html>
  );
}

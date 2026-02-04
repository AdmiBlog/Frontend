import "styles/Pages.css";
import "styles/PostContent.css";
import React from "react";
import { siteConfigs } from "@/config";
import NavLinks  from "@/components/NavLinks"

export const metadata = {
  title: `网址收藏 | ${siteConfigs.title}`,
};

export default async function Flinks() {
  return (
    <>
      <style>{`#navbar{position:fixed}`}</style>
      <div id="main-container" className="page">
        <div id="article-container" className="page flink">
          <div id="post-maincontent" className="page">
            <h1>网址收藏导航</h1>
            <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
}
import "styles/Pages.css";
import { siteConfigs } from "@/config";
import React from "react";

export const metadata = {
  title: `收藏导航 | ${siteConfigs.title}`,
};
export default function Page() {
  return (
    <>
      <style>{`#navbar{position:fixed}`}</style>
      <div id="main-container" className="page">
        <div id="article-container" className="page">
          <div id="post-maincontent" className="page">
            WIP.
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

import "styles/Pages.css";
import { siteConfigs } from "@/config";
import "@/styles/PostContent.css"
import TimeLineTag from "@/components/mdxlibs/extratags/TimeLine"
import React from "react";
import { TwikooBaseComment } from "@/components/thirdpartyjs/Twikoo";

export const metadata = {
  title: `时间戳 | ${siteConfigs.title}`,
};
export default function Page() {
  return (
    <>
      <style>{`#navbar{position:fixed}`}</style>
      <div id="main-container" className="page">
        <div id="article-container" className="page">
          <div id="post-maincontent" className="page">
            <h1>时间戳</h1>
            <br/>
            <TimeLineTag time="2025-02-12" >1111</TimeLineTag>
            <br/>
            <br/>
          </div>
          <TwikooBaseComment />
        </div>
      </div>
    </>
  );
}

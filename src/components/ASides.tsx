import CardInfo from "components/asidelibs/CardInfo";
import CardAnnouncement from "components/asidelibs/CardAnnouncement";
import CardLatestComments from "components/asidelibs/CardLatestComments";
import CardArchives from "components/asidelibs/CardArchives";
import CardWebInfo from "components/asidelibs/CardWebInfo";
import CardNewestPosts from "components/asidelibs/CardNewestPosts";
import CardToc from "components/asidelibs/CardToc";
import CardRelatedPosts from "components/asidelibs/CardRelatedPosts";
import React, { ReactElement } from "react";
import { Post } from "@/interfaces/post";

export function HomeASides() {
  return (
    <div id="aside-container">
      <CardInfo />
      <CardAnnouncement content={<>欢迎光临AdmibrillのNext.js新博客QwQ~</>} />
      <div className="aside-sticky-container">
        <CardLatestComments />
        <CardArchives />
        <CardWebInfo />
      </div>
    </div>
  );
}
export async function PageASides({ postInfo }: { postInfo: Post }) {
  return (
    <div id="aside-container">
      <CardInfo />
      <CardAnnouncement content={<>欢迎光临AdmibrillのNext.js新博客QwQ~</>} />
      <div className="aside-sticky-container">
        <CardToc mdContent={postInfo.mdContent!} />
        <CardNewestPosts />
        <CardRelatedPosts slug={postInfo.slug!} />
      </div>
    </div>
  );
}

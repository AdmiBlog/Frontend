import "styles/Pages.css";
import "styles/PostContent.css";
import React from "react";
import { siteConfigs } from "@/config";
import MDToTSXWithPlugins from "@/components/mdxlibs";
import { notFound } from "next/navigation";

export const metadata = {
  title: `声明 | ${siteConfigs.title}`,
};

async function getMdContent(): Promise<string> {
  return new Promise((resolve, reject) => {
    fetch(`${siteConfigs.backEndUrl}/get/miscs/license`, {
      next: { revalidate: 7200 ,tags: ["miscs"]},
    }).then(async (res) => {
      if (!res.ok) reject();
      const data = await res.json();
      if (data.message == "fail") reject();
      else resolve(data.data);
    });
  });
}

export default async function License() {
  let content: string;
  try {
    content = await getMdContent();
  } catch (e) {
    return notFound();
  }
  return (
    <>
      <style>{`#navbar{position:fixed}`}</style>
      <div id="main-container" className="page">
        <div id="article-container" className="page flink">
          <div id="post-maincontent" className="page">
            <MDToTSXWithPlugins mdContent={content}/>
          </div>
        </div>
      </div>
    </>
  );
}
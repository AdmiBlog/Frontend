"use client";
import { BB } from "interfaces/bb";
import { siteConfigs } from "@/config";
import relativeTime from "@/utils/reltime";
import { Icon } from "@iconify/react/dist/iconify.js";
import "styles/BB.css";
import { ReactElement, useEffect, useState } from "react";
import "node-snackbar/src/sass/snackbar.sass";
import TimeLineTag from "./mdxlibs/extratags/TimeLine";

export function Timelines() {
  const [speakContent, setSpeakContent] = useState<ReactElement[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${siteConfigs.backEndUrl}/get/timeline/timeline`,
        { next: { revalidate: 7200, tags: ["timeline"] } },
      );
      if (res.ok) {
        const speaksContent: BB[] = (await res.json()).data;
        setSpeakContent(
          speaksContent.map((item, index) => {
            return (
              <TimeLineTag key={index} time={relativeTime(item.time)} ><div>{item.content}</div></TimeLineTag>
            );
          }),
        );
      }
    })();
  }, []);
  return (
    <>
        {speakContent}
    </>
  );
}

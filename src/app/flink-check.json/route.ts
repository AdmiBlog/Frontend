export const revalidate = 3600;

import { FriendLinkGroup } from "@/interfaces/friendlink";
import { siteConfigs } from "@/config";
import { cache } from "react";

declare interface FLinkItem{
  name: string;
  link: string;
  avatar: string
  descr: string;
}

declare interface FlinkResult{
  link_list: FLinkItem[],
  count: number
}

export async function GET() {
  let flinks: FriendLinkGroup[] = [];
  const res = await fetch(`${siteConfigs.backEndUrl}/get/flink/flinks`, {
    next: { revalidate: 7200, tags: ["flinks"] },
  });
  if (res.ok) {
    flinks = (await res.json()).data;
  }
  let result: FlinkResult ={
    link_list: [],
    count: 0
  }
  for(let i=0;i<flinks.length;i++){
    for(let j=0;j<flinks[i].links.length;j++){
      result.link_list.push(
        {
          name: flinks[i].links[j].name,
          link: flinks[i].links[j].url,
          avatar: flinks[i].links[j].avatar,
          descr: flinks[i].links[j].description,
        }
      )
      result.count++;
    }
  }
  return new Response(
    JSON.stringify(result,null,4), {
    headers: {
      "content-type": "application/json",
    },
  });
}

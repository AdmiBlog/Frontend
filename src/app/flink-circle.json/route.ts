export const revalidate = 3600;

import { FriendLinkGroup } from "@/interfaces/friendlink";
import { siteConfigs } from "@/config";
import { cache } from "react";



declare interface FlinkResult{
  friends: Array<Array<string>>,
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
    friends: []
  }
  for(let i=0;i<flinks.length;i++){
    for(let j=0;j<flinks[i].links.length;j++){
      result.friends.push(
        [
          flinks[i].links[j].name,
          flinks[i].links[j].url,
          flinks[i].links[j].avatar
        ]
      )
    }
  }
  return new Response(
    JSON.stringify(result,null,4), {
    headers: {
      "content-type": "application/json",
    },
  });
}

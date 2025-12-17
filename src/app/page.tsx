import Posts from "components/postlibs/PostCard";
import { HomeASides } from "components/ASides";
import HomeSpeaks from "@/components/HomeSpeaks";
import { siteConfigs } from "@/config";
import { BB } from "@/interfaces/bb";

export default async function Page() {
  const res = await fetch(
    `${siteConfigs.backEndUrl}/get/speaks/speaks?endl=10`,
    { next: { revalidate: 7200, tags: ["speaks"] } },
  );
  let speaks: BB[];
  if (res.ok) {
    speaks = (await res.json()).data;
  } else speaks = [];
  return (
    <div id="main-container" className="home">
      <HomeSpeaks speaksContent={speaks} />
      <div id="row-container">
        <Posts page={1} />
        <HomeASides />
      </div>
    </div>
  );
}

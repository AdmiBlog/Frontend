import "styles/Pages.css";
import "styles/PostContent.css";
import { siteConfigs } from "@/config";
import AplayerBase from "@/components/thirdpartyjs/Aplayer";
import { getSongInfo } from "@/utils/metingbase"; 
export const metadata = {
  title: `音乐厅 | ${siteConfigs.title}`,
};


export default async function MusicPage() {
  const result = await getSongInfo("netease","1885677249");
  return (
    <>
      <style>{`#navbar{position:fixed}`}</style>
      <div id="main-container" className="page">
        <div id="article-container" className="page">
          <div id="post-maincontent" className="page">
            <h1>音乐厅</h1>
            <AplayerBase data={result} />
          </div>
        </div>
      </div>
    </>
  );
}

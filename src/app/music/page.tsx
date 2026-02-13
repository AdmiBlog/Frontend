import "styles/Pages.css";
import "styles/PostContent.css";
import { siteConfigs } from "@/config";
export const metadata = {
  title: `音乐厅 | ${siteConfigs.title}`,
};


export default async function MusicPage() {
  return (
    <>
      <style>{`#navbar{position:fixed}`}</style>
      <div id="main-container" className="page">
        <div id="article-container" className="page">
          <div id="post-maincontent" className="page">
            <h1>音乐厅</h1>
            <div id="musicpage-aplayer"></div>
          </div>
        </div>
      </div>
    </>
  );
}


import "styles/Pages.css";
import "styles/PostContent.css";
import "styles/FriendCircle.css";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <div id="main-container">
        <div id="friend-circle-lite-root"></div>
        <Script src="/loadFcircle.js"/>
        <link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/admibrill/Friend-Circle-Lite/main/fclite.min.css" />
        <Script src="https://fastly.jsdelivr.net/gh/admibrill/Friend-Circle-Lite/main/fclite.min.js"/>
      </div>
    </>
  );
}

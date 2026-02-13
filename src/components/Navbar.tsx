"use client";
import "styles/Navbar.css";
import { MenuItems,siteConfigs } from "@/config";
import Link from "next/link";
import { updateSettings,SettingsContext } from "@/utils/settings"; 
import { MenuItemChild } from "@/interfaces/menuitem";
import { useRouter } from "nextjs-toploader/app";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import SearchBox from "components/SearchBox";
import { translatePage } from "@/utils/tw_cn"
import { usePathname } from "next/navigation";
import CommentBarrage from "@/components/thirdpartyjs/CommentBarrage";

export function Navbar() {
  const router = useRouter();
  const pathname=usePathname();
  const [hoveringElement,setHoveringElement]=useState("");
  const [showNavbar,setShowNavbar]=useState(false);
  const {settings,setSettings}=useContext(SettingsContext);
  const [searchBoxShow, setSearchBoxShow] = useState(false);
  const [transBtn,setTransBtn]=useState("繁");
  const [showTocBtn,setShowTocBtn]=useState(false);
  const [tocHide,setTocHide]=useState(true);
  const [barrageShow, setBarrageShow] = useState(2);
  const [playerPaused,setPlayerPaused]=useState(true);
  useEffect(() => {
    if (barrageShow != 2) {
      document.querySelector("#barrage-container")!.className = barrageShow
        ? "show"
        : "hide";
      localStorage.setItem("barrageShow", barrageShow ? "true" : "false");
    }
  }, [barrageShow]);
  useEffect(() => {
    if (localStorage.getItem("barrageShow") == "false") setBarrageShow(0);
    else setBarrageShow(1);
  }, []);

  function setToc() {
    setTocHide(!tocHide);
    if (tocHide)
      document.querySelector(".card-toc")!.className =
        "card-widget card-aside card-toc";
    else
      document.querySelector(".card-toc")!.className =
        "card-widget card-aside card-toc mobile-show";
  }
  useEffect(()=>{
    (window as any).toRandomPost = async () => {
      const res = await fetch(`${siteConfigs.backEndUrl}/get/post/postSlugs`, {
        next: { revalidate: 7200, tags: ["posts"] },
      });
      if (res.ok) {
        const posts: string[] = (await res.json()).data;
        const randomIndex: number = Math.round(Math.random() * posts.length);
        router.push(`/posts/${posts[randomIndex]}`);
      }
    };
    if(pathname.includes("/posts/")){
      setShowTocBtn(true);
    }
  },[]);
  return (
    <>
      <div id="navbar" className={
        showNavbar ? "show" : "hide"
      }>
        <Link id="site-name" href="/">
          {siteConfigs.title}
        </Link>
        <div id="menus">
          <div id="menu-items">
            {MenuItems.map((item) => {
              return (
                <div
                  className="menu-item"
                  key={item.name}
                  onClick={() => {
                    if(hoveringElement==item.name){
                      setHoveringElement("");
                    }else{
                      setHoveringElement(item.name);
                    }
                  }}
                >
                  {item.link ? (
                    <Link className="site-page" href={item.link}>
                      {item.icon}
                      <span>{" " + item.name}</span>
                    </Link>
                  ) : (
                    <span className="site-page">
                      {item.icon}
                      <span>{" " + item.name}</span>
                      <Icon className={"arrow-right "+
                        (hoveringElement === item.name ? "show" : "hide")} icon="fa6-solid:caret-right" />
                    </span>
                  )}
                  {item.childs.length ? (
                    <div
                      className={
                        "site-page-childs "+
                        (hoveringElement === item.name ? "show" : "hide")
                      }
                    >
                      {item.childs.map((child: MenuItemChild) => {
                        if (child.link)
                          return (
                            <Link
                              href={child.link}
                              key={child.name}
                              className="site-page-child"
                            >
                              {child.icon}
                              <div>{child.name}</div>
                            </Link>
                          );
                        else
                          return (
                            <a
                              onClick={child.func!}
                              key={child.name}
                              className="site-page-child"
                            >
                              {child.icon}
                              <div>{child.name}</div>
                            </a>
                          );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div id="menu-buttons">
          <button
            className="menu-button"
            title="开闭评论浮窗"
            onClick={() => setBarrageShow((bs) => Number(!bs))}
          >
            <Icon icon="mingcute:danmaku-fill" />
          </button>
          <button
            className="menu-button"
            title="音乐"
            onClick={()=>{
              (window as any).aplayer?.toggle();
              setPlayerPaused((window as any).aplayer?.audio.paused);
            }}
          >
            {playerPaused ?
            <Icon icon="fa6-solid:music" /> :
            <Icon icon="fa6-solid:pause" />
            }
          </button>
          <button
            className="menu-button"
            title="颜色模式"
            onClick={()=>{
              if(settings.colorMode=="light"){
                setSettings({...settings,colorMode:"dark"});
                updateSettings({...settings,colorMode:"dark"});
              }else{
                setSettings({...settings,colorMode:"light"});
                updateSettings({...settings,colorMode:"light"});
              }
            }}
          >
            <Icon icon="fa6-solid:circle-half-stroke" />
          </button>
          <button
            className="menu-button fanjian"
            title="繁简转换"
            onClick={()=>{
              translatePage();
              setTransBtn(transBtn=="繁" ? "简" : "繁");
            }}
          >
            <span>{transBtn}</span>
          </button>
          <button
            className="menu-button"
            title="开往"
            onClick={() => {
              window.location.href = "https://travellings.cn/go.html";
            }}
          >
            <Icon icon="fa6-solid:train-subway" />
          </button>
          <button
            className="menu-button"
            title="搜索"
            onClick={() => {
              setSearchBoxShow(!searchBoxShow);
              setTimeout(() => {
                document.getElementById("search-box-input")?.focus();
              }, 10);
            }}
          >
            <Icon icon="fa6-solid:magnifying-glass" />
          </button>
          <button
            className="menu-button"
            title="随便逛逛"
            onClick={() => {
              (window as any).toRandomPost();
            }}
          >
            <Icon icon="fa6-solid:paper-plane" />
          </button>
          <button
            className="menu-button"
            title="返回顶部"
            onClick={()=>{
              document.documentElement.scroll({ behavior: "smooth", top: 0 });
            }}
          >
            <Icon icon="fa6-solid:arrow-up" />
          </button>
        </div>
        { showTocBtn ?
          <button 
            className="toc-visible"
            title="展开目录"
            onClick={()=>{
              setToc();
            }}
          >
            <Icon icon="fa6-solid:list" />
          </button>
          : <></>
        }
        <button 
          className="mobbar-visible"
          title="展开导航栏"
          onClick={()=>{
            setShowNavbar(!showNavbar);
          }}
        >
          <Icon icon="fa6-solid:bars" />
        </button>
      </div>
      <SearchBox show={searchBoxShow} closeFunction={setSearchBoxShow} />
      <CommentBarrage
        toggleBarrage={() => setBarrageShow((bs) => Number(!bs))}
      />
    </>
  );
}
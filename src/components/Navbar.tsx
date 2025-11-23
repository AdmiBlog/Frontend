"use client";
import "styles/Navbar.css";
import { MenuItems,siteConfigs } from "@/config";
import Link from "next/link";
import { MenuItemChild } from "@/interfaces/menuitem";
import { useState } from "react";
import { Icon } from "@iconify/react";

export function Navbar() {
  const [hoveringElement,setHoveringElement]=useState("");
  const [showNavbar,setShowNavbar]=useState(false);
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
            title="小链接"
            onClick={undefined}
          >
            <Icon icon="fa6-solid:arrow-up-right-from-square" />
          </button>
          <button
            className="menu-button"
            title="音乐"
            onClick={undefined}
          >
            <Icon icon="fa6-solid:music" />
          </button>
          <button
            className="menu-button"
            title="颜色模式"
            onClick={undefined}
          >
            <Icon icon="fa6-solid:circle-half-stroke" />
          </button>
          <button
            className="menu-button fanjian"
            title="繁简转换"
            onClick={undefined}
          >
            <span>繁</span>
          </button>
          <button
            className="menu-button"
            title="开往"
            onClick={undefined}
          >
            <Icon icon="fa6-solid:train-subway" />
          </button>
          <button
            className="menu-button"
            title="搜索"
            onClick={undefined}
          >
            <Icon icon="fa6-solid:magnifying-glass" />
          </button>
          <button
            className="menu-button"
            title="随便逛逛"
            onClick={undefined}
          >
            <Icon icon="fa6-solid:paper-plane" />
          </button>
          <button
            className="menu-button return-top"
            title="返回顶部"
            onClick={undefined}
          >
            <span>100</span>
          </button>
        </div>
        <button 
          className="mobbar-visible"
          title="展开导航栏"
          onClick={()=>{
            setShowNavbar(!showNavbar);
          }}
        >
          <Icon icon="fa6-solid:bars" />
        </button>
        {/*小链接、音乐、
        颜色模式、繁简转换、
        开往、搜索、
        随便逛逛、返回顶部*/}
      </div>
    </>
  );
}
"use client";
import { NavLink } from "interfaces/navlink";
import { siteConfigs } from "@/config";
import { LazyImageWithFalldown } from "./ImageWithFalldown";

export function NavLinkItem({ link }: { link: NavLink }) {
  return (
    <a
      className="nav-item cf-navs-link"
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      id={`nav-${link.id}`}
    >
      <style>
        {`
                    #nav-${link.id}{
                        background-color:${link.color ?? "#888888"};
                        background-color:color-mix(in srgb,${link.color ?? "#888888"},transparent 25%);
                        color:white;
                    }
                `}
      </style>
      <div className="nav-avatar">
        <LazyImageWithFalldown
          className="nav-avatar-img"
          src={link.avatar}
          data-src={link.avatar}
          alt={link.name}
          falldownImg={siteConfigs.falldownAvatar}
        />
        <span className="cf-navs-avatar" data-src={link.avatar} />
      </div>
      <span className="nav-name cf-navs-name">{link.name}</span>
      <span className="nav-desc">{link.description}</span>
    </a>
  );
}

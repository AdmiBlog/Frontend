import "styles/NavLinks.css";
import { NavLinkGroup } from "interfaces/navlink";
import { siteConfigs } from "@/config";
import React from "react";
import { NavLinkItem } from "./NavLinkItem";

export function NavLinkGroupItem({ group }: { group: NavLinkGroup }) {
  return (
    <div className="nav-group">
      <h2>{group.name}</h2>
      <span>{group.description}</span>
      <div className="nav-group-item">
        {group.links.map((link) => (
          <NavLinkItem key={link.url} link={link} />
        ))}
      </div>
    </div>
  );
}

export default async function NavLinks() {
  let navs: NavLinkGroup[] = [];
  const res = await fetch(`${siteConfigs.backEndUrl}/get/nav/navs`, {
    next: { revalidate: 7200, tags: ["navs"] },
  });
  if (res.ok) {
    navs = (await res.json()).data;
  }
  return (
    <>
      <div id="navs">
        {navs.map((group) => (
          <NavLinkGroupItem key={group.name} group={group} />
        ))}
      </div>
    </>
  );
}

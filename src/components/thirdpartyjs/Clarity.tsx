"use client";
import Clarity from "@microsoft/clarity";
import { siteConfigs } from "@/config";

export default function ClarityScript() {
    Clarity.init(siteConfigs.clarity);
    return <></>;
}
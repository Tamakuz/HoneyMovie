"use client"
import React from "react";
import Titlemenu from "../atomics/Sidebar/Titlemenu";
import Menu from "../atomics/Sidebar/Menu";

const Sidebar = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2">
        <Titlemenu title="menu" />
        <Menu menu="home" PathnameRoute="/" />
        <Menu menu="discover" PathnameRoute="/discover" />
        <Menu menu="awards" PathnameRoute="/awards" />
        <Menu menu="celebrities" PathnameRoute="/celebrities" />
      </div>
      <div className="flex flex-col gap-2">
        <Titlemenu title="library" />
        <Menu menu="top rated" PathnameRoute="/top-rated" />
        <Menu menu="downloaded" PathnameRoute="/downloaded" />
        <Menu menu="playlist" PathnameRoute="/playlist" />
      </div>
      <div className="flex flex-col gap-2">
        <Titlemenu title="general" />
        <Menu menu="setting" PathnameRoute="/setting" />
      </div>
    </div>
  );
};

export default Sidebar;

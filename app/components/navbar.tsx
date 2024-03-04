import React from "react";
import Brand from "../atomics/navbar/brand";
import ListBar from "../atomics/navbar/ListBar";
import Search from "../atomics/navbar/Search";
import Profile from "../atomics/navbar/Profile";

const Navbar = () => {
  return (
    <div className="container flex justify-between items-center flex-grow gap-5 py-3">
      <Brand />
      <ListBar />
      <Search />
      <Profile />
    </div>
  );
};

export default Navbar;

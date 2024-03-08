import React from "react";
import ProfileInfo from "../atomics/profile/profile-info";

const ProfilePage = () => {
  return (
    <div className="w-full flex gap-5 p-10">
      <ProfileInfo />
      <div className=" w-1/2 flex flex-col gap-5">
        <div className="bg-blue-500 h-1/2">1</div>
        <div className="bg-blue-500 h-1/2">2</div>
      </div>
    </div>
  );
};

export default ProfilePage;

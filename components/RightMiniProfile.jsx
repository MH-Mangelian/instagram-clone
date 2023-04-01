import React from "react";

const RightMiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="/user-profile-icon.svg"
        alt="instagram"
        className="w-16 h-16 rounded-full cursor-pointer border p-1.5 "
      />

      <div className="flex-1 mx-4">
        <h2 className="font-medium">Ghost</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
};

export default RightMiniProfile;

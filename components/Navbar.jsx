import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

// --------------------------Import Icons----------------------------
import { IoIosSearch } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { HiOutlinePaperAirplane, HiUserGroup } from "react-icons/hi";
import { FiPlusCircle } from "react-icons/fi";

const Navbar = () => {
  const { data: session } = useSession();

  //console.log(session);

  return (
    <div className="shadow-sm border-b bg-white">
      <div className="flex justify-between">
        {/* ----------Left------------- */}
        <div className="flex items-center justify-center ml-1">
          <div className="relative hidden lg:inline-grid w-24 h-10 pl-10 cursor-pointer">
            <Image
              src="/instagram-text-logo.svg"
              className="ml-4"
              alt="instagram"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="relative lg:hidden w-10 h-10 pl-10 flex-shrink-0 cursor-pointer">
            <Image
              src="/black-instagram-icon.svg"
              alt="instagram"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* ----------center Search------------- */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <IoIosSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full p-0.5 pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black"
            />
          </div>
        </div>
        {/* ----------Right------------- */}
        <div className="flex items-center justify-center space-x-4 mr-1">
          <TiHome className="navBtn" />
          <AiOutlineMenu className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <HiOutlinePaperAirplane className="navBtn rotate-45" />
                <div className="absolute text-xs text-white -top-1 -right-2 h-[17px] w-[17px] bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                  3
                </div>
              </div>

              <FiPlusCircle className="navBtn" />
              <HiUserGroup className="navBtn" />
              <AiOutlineHeart className="navBtn" />

              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="instagram"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button className="pr-4" onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

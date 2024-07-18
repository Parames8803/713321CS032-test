import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { TbShoppingCartHeart } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const push = useNavigate();
  const [userStatus, setUserStatus] = useState(false);
  const updateStatus = () => {
    let user = localStorage.getItem("currentUser");
    if (user) setUserStatus(true);
  };
  useEffect(() => {
    updateStatus();
  }, []);
  return (
    <>
      <div className="sticky top-0 flex justify-center items-center gap-10 py-3 border-solid border-b-2 border-[#E2E8F0] bg-white">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => {
            push("/");
          }}
        >
          <img src={logo} alt="" />
          <p className="text-md">
            <span className="font-bold text-md pr-1">2</span>Learn
          </p>
        </div>
        <div className="tablet:hidden mobile:hidden">
          <p className="text-md tablet:hidden mobile:hidden">Categories</p>
        </div>
        <div className="mobile:hidden">
          <div className="flex justify-center items-center gap-2 text-sm border-solid border-2 border-gray-400 rounded-lg py-1 px-2">
            <CiSearch />
            <input
              className="text-gray-700 text-sm focus:outline-0"
              placeholder="Search Courses"
            />
          </div>
        </div>
        <div className="tablet:hidden mobile:hidden">
          <div className="text-md">
            Teach <span className="font-bold text-md pr-1">2</span>Learn
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <TbShoppingCartHeart
            className="text-md"
            onClick={() => {
              push("/cart");
            }}
          />
          <button
            className="border-solid border-2 border-black py-1 px-2 text-sm"
            onClick={() => {
              if (userStatus) {
                localStorage.removeItem("currentUser");
                window.location.reload();
              } else {
                push("/login");
              }
            }}
          >
            {userStatus ? "Log out" : "Log In"}
          </button>
          <button
            className="border-solid border-2 border-black py-1 px-2 text-sm bg-black text-white"
            onClick={() => {
              push("/register");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

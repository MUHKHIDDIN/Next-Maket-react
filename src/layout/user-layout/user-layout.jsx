import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  let user = true;

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex container">
      <div className=" text-white flex-col flex gap-[20px] h-[100vh] w-[300px] bg-black">
        <Link
          className="mt-[50px] px-[30px] py-2 transition duration-200 ease-in-out hover:bg-[#ef2020] hover:scale-105 rounded-md"
          to={"profile"}
        >
          Profile
        </Link>
        <Link
          className="px-[30px] py-2 transition duration-200 ease-in-out hover:bg-[#ff3511] hover:scale-105 rounded-md"
          to={"/profile/orderList"}
        >
          Order List
        </Link>
        <Link
          className="px-[30px] py-2 transition duration-200 ease-in-out hover:bg-[#f01010] hover:scale-105 rounded-md"
          to={"/profile/changeAcount"}
        >
          Change Account
        </Link>
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

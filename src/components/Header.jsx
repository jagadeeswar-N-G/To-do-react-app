import React from "react";
import { ReactComponent as Logo } from "../assets/Frame.svg";
import User from "../assets/user.png";

function Header() {
  const date = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[date.getDay()];

  return (
    <div>
      <nav className="shadow">
        <div className="flex justify-between items-center p-4">
          <Logo height={40} />
          <img src={User} alt="user" className="h-[25px]" />
        </div>
      </nav>
      <section className="border-2 border-black m-4 rounded-md">
        <div className="grid grid-cols-5">
          <section className="flex p-4 bg-black text-white m-2 rounded-md shadow-xl">
            <div className="text-8xl font-semibold ">{date.getDate()}</div>
            <div className="pt-3 pl-2">
              <div className="uppercase text-2xl font-medium ">{day}</div>
              <div className="flex gap-3 text-3xl pt-2">
                <div>{date.getMonth() + 1}</div>
                <div>{date.getFullYear()}</div>
              </div>
            </div>
          </section>
          <section className="col-span-4 text-center border m-2 rounded-md pt-4 ">
            <div className="text-5xl font-semibold uppercase tracking-wide text-gray-600">Stay Organized</div>
            <p className="italic  ">Stay on Top of Your Responsibilities</p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Header;

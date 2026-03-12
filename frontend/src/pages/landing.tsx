import { IoMdSearch } from "react-icons/io";
import { users } from "../sample";
import ChatSection from "../components/messages";
import type { User } from "../interfaces/home";

import "./landing.css";
import { useState } from "react";
const Landing = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  console.log(selectedUser, "it is selected user");
  return (
    <div className="  flex w-screen h-[100dvh] pl-3">
      <div className="flex-1 border-r-2 flex flex-col justify-start gap-6 relative">
        <div className="flex flex-col gap-7">
          <h4 className="text-black font-bold text-2xl pt-2 font-sans">
            CHAT APP
          </h4>
          <div className="w-[96%] h-10 rounded  bg-amber-100 flex items-center pl-2">
            {/* seach icon */}
            <IoMdSearch className="text-2xl" />
            <input
              className="outline-0 pl-2 "
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
        </div>
        {/* listing the users */}
        <div className="scrollable flex flex-col gap-3 ">
          {users.map((user, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelectedUser(user)}
                className="flex h-17 justify-between w-[96%] items-center cursor-pointer  hover:bg-amber-100 rounded"
              >
                <div className="flex  gap-2">
                  <div className="w-15 h-15 bg-black rounded "></div>
                  <div>
                    <p className="font-bold text-xl">{user.name}</p>
                    <p>hai, how are you </p>
                  </div>
                </div>
                <p className="mr-3">30m</p>
              </div>
            );
          })}
        </div>

        <div className="absolute w-15 h-15 bg-amber-300 top-3/4 right-3 rounded-md  flex justify-center items-center text-[25px] font-bold cursor-pointer">
          +
        </div>
      </div>

      <div className="flex-1/3">
        {selectedUser ? (
          <ChatSection user={selectedUser} />
        ) : (
          <h1>no user found</h1>
        )}
      </div>
    </div>
  );
};

export default Landing;

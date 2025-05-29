import { IoMdSearch } from "react-icons/io";
import { users } from "../sample";
import ChatSection from "../components/chatSection";
const Landing = () => {
  return (
    <div className="lg:flex md:flex w-full h-[100dvh] overflow-hidden bg-white ">
      <div className="w-full  lg:w-[30%] lg:border-r-2 md:w-[30%] md:border-r-2 flex flex-col justify-start gap-6  ">
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
        <div className="flex flex-col gap-3 overflow-y-scroll">
          {users.map((user, index) => {
            return (
              <div
                key={index}
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
      </div>

      <div className="flex-1">
        <ChatSection />
      </div>
    </div>
  );
};

export default Landing;

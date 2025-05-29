import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import { messages } from "../sample";
const ChatSection = () => {
  return (
    <div className="bg-gray-200 h-full flex flex-col   ">
      <div className="w-full h-16 bg-amber-100 flex justify-between items-center">
        <div className="flex gap-3 items-center pl-2">
          <div className="w-12 h-12 bg-black rounded-full "></div>

          <p className="font-bold text-lg ">John</p>
        </div>

        <BsThreeDotsVertical className="text-xl cursor-pointer" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-2 justify-end ">
          {messages.map((message, index) => {
            return (
              <div>
                {message.id === "sender" ? (
                  <div key={index} className="flex justify-end  px-3">
                    <p>{message.text}</p>
                  </div>
                ) : (
                  <div key={index} className="flex justify-start  px-3">
                    <p>{message.text}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full h-14 bg-amber-100 flex items-center justify-between px-5 ">
        <div className="flex items-center gap-4 text-xl cursor-pointer">
          <MdEmojiEmotions />
          <RiAttachment2 />
          <input
            type="text"
            className="w-[50rem] h-14 text-md outline-0 placeholder:text-sm"
            placeholder="Type a message"
          />
        </div>
        <LuSend className="text-xl" />
      </div>
    </div>
  );
};

export default ChatSection;

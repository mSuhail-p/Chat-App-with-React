import { useState, useRef, useEffect } from "react";
import socket from "../socket.io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiAttachment2 } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import type { Messages } from "../interfaces/home.ts";
// import EmojiPicker from "emoji-picker-react";
// import { MdEmojiEmotions } from "react-icons/md";

import "./messages.css";
const Messages = () => {
  const reff = useRef<HTMLTextAreaElement>(null);
  // const [addMessage, setAddMessage] = useState<string>("");

  const [message, setMessage] = useState<Messages[]>([]);

  // const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newMessage: string = e.target.value;
  //   setAddMessage(newMessage);
  // };

  const handleSendMessage = () => {
    const message = reff.current?.value;
    console.log(message, "it is add message ");
    if (message?.trim() !== "" && message != undefined) {
      socket.emit("chatMessage", message);
      setMessage((prev) => [...prev, { id: "sender", text: message }]);
      if (reff.current) {
        reff.current.value = "";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  //get messages

  useEffect(() => {
    console.log("inside the useEffect");
    socket.on("chat message", (msg) => {
      console.log(msg, "it is recieved message");
      setMessage((prev) => [...prev, { id: "receiver", text: msg }]);
    });

    return () => {
      socket.off("chat message");
    };
  }, [socket]);

  // const emojiClik = (emojiData: any) => {
  //   newEmji = addMessage + emojiData.emoji;
  //   // console.log(newEmji, "it is add newMessage");

  //   console.log(newEmji, "it is new emoji ");
  //   setAddMessage(newEmji);
  // };
  // const handleEmoji = () => {
  //   setShowEmojiPicker((prev) => !prev);
  // };

  return (
    <div className="bg-gray-200  flex flex-col h-full   ">
      {/* Header */}
      <div className="  w-full h-16 bg-amber-100 flex justify-between items-center">
        <div className="flex gap-3 items-center pl-2">
          <div className="w-12 h-12 bg-black rounded-full "></div>

          <p className="font-bold text-lg ">John</p>
        </div>

        <BsThreeDotsVertical className="text-xl cursor-pointer" />
      </div>
      {/* messages */}
      <div className=" mes-scrollbar flex-1 bg-gray-200   ">
        <div className="flex flex-col  ">
          {message.map((message, index) => {
            return (
              <div
                key={index}
                className={`flex  break-words lg:max-w-[500px] md:max-w-[400px] sm:max-w-[300px] max-w-[200px]  bg-red-300 p-1.5 ml-2 mr-2 m-0.5 rounded-lg
                 ${
                   message.id === "sender"
                     ? "self-end  rounded-tr-none"
                     : "self-start rounded-tl-none"
                 }`}
              >
                <div className="w-full flex flex-col gap-2 break-words ">
                  <p className="text-md break-words "> {message.text}</p>
                  <div className="flex flex-col self-end">
                    <p className="text-[9px] text-right">10:30 AM</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* input section */}

      <div className="max-w-full h-14 bg-amber-100 flex items-center justify-between px-5 gap-2 ">
        <div className="w-full flex items-center gap-4 text-xl cursor-pointer">
          {/* <MdEmojiEmotions className="w-7" onClick={handleEmoji} /> */}

          <RiAttachment2 />

          <textarea
            ref={reff}
            id="input-message"
            className="w-full h-6  text-sm outline-0 placeholder:text-sm resize-none"
            placeholder="Type a message"
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <LuSend className="text-xl" onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default Messages;

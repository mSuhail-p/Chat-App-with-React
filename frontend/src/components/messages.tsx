import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import "./messages.css";
const Messages = () => {
  const [addMessage, setAddMessage] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  let newEmji: string = "";

  const [message, setMessage] = useState([
    { id: "sender", text: "Hello" },
    { id: "receiver", text: "hai," },
    { id: "receiver", text: "who are you" },
    { id: "sender", text: "hai" },
    { id: "receiver", text: "fine," },
    { id: "sender", text: "how are you" },
    { id: "receiver", text: "nothing," },
    { id: "sender", text: "what else" },
    { id: "sender", text: "Hello" },
    { id: "receiver", text: "hai," },
    { id: "receiver", text: "who are you" },
    { id: "sender", text: "hai" },
    { id: "receiver", text: "fine," },
    { id: "sender", text: "how are you" },
    { id: "receiver", text: "nothing," },
    { id: "sender", text: "what else" },
  ]);

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage: string = e.target.value;
    setAddMessage(newMessage);
  };
  const handleSendMessage = () => {
    console.log(addMessage, "it is add message ");
    if (addMessage.trim() !== "") {
      setMessage((prev) => [...prev, { id: "sender", text: addMessage }]);
      setAddMessage("");
      newEmji = "";
      console.log(newEmji, "it is new emoji from handleSendMessage");
    }
  };

  const emojiClik = (emojiData: any) => {
    newEmji = addMessage + emojiData.emoji;
    // console.log(newEmji, "it is add newMessage");

    console.log(newEmji, "it is new emoji ");
    setAddMessage(newEmji);
  };
  const handleEmoji = () => {
    setShowEmojiPicker((prev) => !prev);
  };

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
                className={`flex  bg-red-300 p-1.5 ml-2 mr-2 m-0.5 rounded-lg
                 ${
                   message.id === "sender"
                     ? "self-end  rounded-tr-none"
                     : "self-start rounded-tl-none"
                 }`}
              >
                <div className="w-fit flex items-center gap-2 ">
                  <p className="text-md"> {message.text}</p>
                  <div className="flex flex-col self-end">
                    <p className="text-[9px] text-right">10:30 AM</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* emoji picker */}
      {showEmojiPicker && (
        <div className="top-20 fixed    ">
          <EmojiPicker onEmojiClick={emojiClik} />
        </div>
      )}

      {/* input section */}

      <div className="max-w-full h-14 bg-amber-100 flex items-center justify-between px-5 ">
        <div className="w-full flex items-center gap-4 text-xl cursor-pointer">
          <MdEmojiEmotions className="w-7" onClick={handleEmoji} />

          <RiAttachment2
            className="w-7"
            onClick={() => {
              console.log(addMessage, "it is add message ");
            }}
          />
          <input
            type="text"
            onChange={(e) => handleMessage(e)}
            name="message"
            value={addMessage}
            className="w-full h-14 text-sm outline-0 placeholder:text-sm"
            placeholder="Type a message"
          />
        </div>
        <LuSend className="text-xl" onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default Messages;

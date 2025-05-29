import { BsThreeDotsVertical } from "react-icons/bs";
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
      <div className="flex-1">chatting</div>
      <div className="w-full h-12 bg-amber-100">footer</div>
    </div>
  );
};

export default ChatSection;

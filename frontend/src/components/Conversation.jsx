import { set } from "mongoose";
import React from "react";
import useConversation from "../zustand/useConversation";
import { useSocketContext } from "../context/SocketContext";

function Conversation({conversation}) {

  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded py-1 cursor-pointer
        ${isSelected ? "bg-sky-500" : ""}
      `}
      onClick={() => {setSelectedConversation(conversation)}}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="avatar"/>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-green-200">{conversation.fullName}</p>
            <span className="text-xl"></span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
}

export default Conversation;

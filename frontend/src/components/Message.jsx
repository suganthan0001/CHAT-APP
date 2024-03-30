import React from "react";
import useConversation from "../zustand/useConversation";
import {useAuthContext} from '../context/AuthContext';

function Message({message}) {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();

  const fromMe = message.senderId === authUser._id
  const ChatclassName = fromMe ? 'chat-end' : 'chat-start';

  const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
  const shakeClass = message.shouldShake ? "shake" : ""
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';

  return (
    <div className={`chat ${ChatclassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{extractTime(message.createdAt)}</div>
    </div>
  );
}

export default Message;




export function extractTime(dateString) {
  const date = new Date(dateString);
  let hours = date.getHours();
  const period = hours < 12 ? 'AM' : 'PM';
  if (hours === 0) {
      hours = 12; // Convert midnight (0 hours) to 12 AM
  } else if (hours > 12) {
      hours -= 12; // Convert afternoon hours to 12-hour format
  }
  const formattedHours = padZero(hours);
  const minutes = padZero(date.getMinutes());
  return `${formattedHours}:${minutes} ${period}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}



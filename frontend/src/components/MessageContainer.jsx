import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

function MessageContainer() {
  const noChatSelected = true;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text"> To:</span>{" "}
            <span className="text-gray-900 font-bold">John Dee</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

export function NoChatSelected() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center">
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">No Chat Selected</h1>
        <p className="text-black-800">
          Please select a chat to start chatting.
        </p>
      </div>
    </div>
  );
}

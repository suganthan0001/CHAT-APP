import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";

function Conversations() {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">

      {
        conversations.map((conversation)=>{
          return <Conversation key = {conversation._id}
          conversation = {conversation}/>
        })
      }

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}

export default Conversations;

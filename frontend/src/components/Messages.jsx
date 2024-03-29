import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import MessageSkeleton from './skeletons/MessageSkeleton';

function Messages() {

  const {messages, loading} = useGetMessages();
  console.log(messages)

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    },100)
  },[messages])

  return (
    <div className="px-4 flex-1 overflow-auto">

        {!loading && messages.length > 0 && messages.map((message) => (
          <div key={messages._id} ref={lastMessageRef} >
            <Message message={message} />
          </div>
        ))}

        {loading && <MessageSkeleton />}
        {!loading && messages.length === 0 && (
          <p className='text-center'>Send a Message to start the conversation...</p>
        )}

    </div>
  )
}

export default Messages
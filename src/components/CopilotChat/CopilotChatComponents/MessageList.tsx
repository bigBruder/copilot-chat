import React, { Fragment, useEffect, useRef } from "react";
import { Message } from "../../../types/globals";
import ChatGPTMessage from "./ChatGPTMessage";

type MessageListProps = {
  messages: Message[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  return (
    <div className="flex flex-col gap-2">
      {messages.map((message, index) => (
        <Fragment key={message.sentTime}>
          {message.sender === "ChatGPT" ? (
            <ChatGPTMessage showLeftActions={index === messages.length - 1} />
          ) : (
            <div className="px-4">
              <div className="justify-center items-end p-4 text-sm text-gray-900 rounded-2xl bg-slate-100 w-full">
                {message.message}
              </div>
            </div>
          )}
        </Fragment>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default MessageList;

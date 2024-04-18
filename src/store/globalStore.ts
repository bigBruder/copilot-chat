import { create } from "zustand";
import { MessageStore } from "../types/globals";

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "2024-04-18T10:48:00.000Z",
      sender: "user",
    },
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "2024-04-18T10:50:00.000Z",
      sender: "ChatGPT",
    },
  ],
  addMessage: (newMessage) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
}));

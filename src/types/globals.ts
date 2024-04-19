export type Message = {
  message: string;
  sentTime: string;
  sender: string;
};

export type MessageStore = {
  messages: Message[];
  addMessage: (newMessage: Message) => void;
};
export type KeyStore = {
  key: string;
  addKey: (newMessage: string) => void;
};

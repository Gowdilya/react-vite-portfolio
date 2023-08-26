import "./ChatWidget.css";
import TextInput from "./TextInput";
import { useState, useEffect, useRef } from "react";
import CloseIcon from "./CloseIcon";
import mockService from "../../service/mockChatService";

interface widgetProps {
  closeWindow: () => void;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const ChatWidget = (props: widgetProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const count = useRef(0);

  useEffect(() => {
    // on mount retrieve messages from localStorage
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      count.current = storedMessages.length;
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    // Save messages to localStorage
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = async (messageText: string) => {
    count.current = count.current + 1;
    const newMessage: Message = {
      id: count.current,
      text: messageText,
      isUser: true,
    };

    setMessages((messages) => [...messages, newMessage]);
    setIsTyping(true);
    // Use the mockService to get a bot response
    try {
      const response = await mockService.getResponse();
      setIsTyping(false);
      count.current = count.current + 1;
      const botMessage: Message = {
        id: count.current,
        text: response.text,
        isUser: false,
      };

      setMessages((messages) => [...messages, botMessage]);
    } catch (error) {
      setIsTyping(false);
      count.current = count.current + 1;
      const errorMessage: Message = {
        id: count.current,
        text: "Sorry, there was an error fetching the bot response.",
        isUser: false,
      };
      setMessages((messages) => [...messages, errorMessage]);
    }
  };

  return (
    <div className="chat-widget">
      <div className="chat-banner">
        <div className="chat-title">Welcome to Chat Service</div>
        <div className="close-button" onClick={props.closeWindow}>
          <CloseIcon fill="#A52A2A" />
        </div>
      </div>
      <div className="chat-window">
        <div className="chatbot-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={message.isUser ? "user-message" : "bot-message"}
            >
              {message.text}
            </div>
          ))}
          {isTyping && (
            <div className={"bot-message"}>Chat Bot Is typing...</div>
          )}
        </div>
      </div>
      <TextInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWidget;

import ChatButton from "./components/ChatButton";
import ChatWidget from "./components/ChatWidget";
import { useState } from "react";
function ChatBot() {
  const [openChat, setOpenChat] = useState<boolean>(false);
  const handleOpen = () => {
    setOpenChat(true);
  };
  const handleClose = () => {
    setOpenChat(false);
  };

  return (
    <>
      <div
        style={{
          opacity: openChat ? 1 : 0,
          height: openChat ? "auto" : 0,
          overflow: "hidden",
          transition: "opacity 0.6s, height 0.6s",
        }}
      >
        <ChatWidget closeWindow={handleClose} />
      </div>
      {!openChat && <ChatButton buttonClick={handleOpen} />}
    </>
  );
}

export default ChatBot;

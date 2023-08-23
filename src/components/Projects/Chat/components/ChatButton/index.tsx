import "./ChatButton.css"; // You can create a CSS file for styling

interface buttonProps {
  buttonClick: () => void;
}

const ChatButton = (props: buttonProps) => {
  return (
    <div className="chat-button" onClick={props.buttonClick}>
      Open Chat
    </div>
  );
};

export default ChatButton;

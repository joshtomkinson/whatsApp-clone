import React from "react";
import emojiIcon from "../assets/tag_faces.svg";
import micIcon from "../assets/mic.svg";
import sendIcon from "../assets/send.svg";

const ChatBox = ({ message, setMessage, pushMessage }) => {
  //function that allows user to send a message via the ENTER key
  function handleKeyDown(e) {
    if (e.key === "Enter" && message) {
      pushMessage();
    }
  }
  return (
    <div className="chat-input-box">
      <div className="icon emoji-selector">
        <img src={emojiIcon} alt="" />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="icon send" onClick={pushMessage}>
        <img src={message ? sendIcon : micIcon} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;

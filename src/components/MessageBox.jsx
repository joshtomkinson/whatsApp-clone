import React, { useRef, useEffect } from "react";
import Message from "./Message";

export const MessageBox = ({ messages }) => {
  //use ref to show the most recent messages, first.
  const endDiv = useRef(null);
  // use effect to render most recent messages firt.
  //function that scrolls into view.
  useEffect(() => {
    endDiv.current.scrollIntoView();
  });

  return (
    <div className="chats">
      {/* sort + convert date */}
      {messages
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map((m) => (
          <Message message={m} key={m.id} />
        ))}
      <div style={{ float: "right", clear: "both" }} ref={endDiv}></div>
    </div>
  );
};

export default MessageBox;

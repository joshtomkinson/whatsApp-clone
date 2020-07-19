import React from "react";
import doubleCheck from "../assets/done_all.svg";
import Avatar from "./Avatar";

const Contact = ({ contact, setContactSelected, messages }) => {
  //show the most recent messages on the sidebar.. in order
  //get most recent message
  const time = Math.max(...messages.map((m) => m.date.getTime()));
  const lastMsg = messages.find((m) => m.date.getTime() === time);

  //make messages smaller on the sidebar (showing too much text )
  function makeSmall(text, length) {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  }

  return (
    <div className="contact-box" onClick={() => setContactSelected(contact)}>
      <Avatar user={contact} />

      <div className="right-section">
        <div className="contact-box-header">
          <h3 className="avatar-title">{contact.name}</h3>
          <span className="time-mark">{lastMsg.date.toLocaleString()}</span>
        </div>
        <div className="last-msg">
          <img src={doubleCheck} alt="" className="icon-small" />
          <span className="text">{makeSmall(lastMsg.msg, 35)}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

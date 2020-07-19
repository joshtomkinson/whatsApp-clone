import React, { useState, useEffect } from "react";
import { mainUser, contactsMessages, Message } from "./FakeData";
import "./App.css";
//components ---------------------------------
import Contact from "./components/Contact";
import Avatar from "./components/Avatar";
import MessageBox from "./components/MessageBox";
import ChatBox from "./components/ChatBox";
import Search from "./components/Search";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState(contactsMessages);
  const [contactSelected, setContactSelected] = useState({});
  const [currentMessages, setCurrentMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilterContacts] = useState([]);

  useEffect(() => {
    const contact = data.find((d) => d.contact.id === contactSelected.id);
    setCurrentMessages((contact && contact.messages) || []);
    filterContacts(data, search);
  }, [contactSelected, data, search]);

  //function that pushes typed messages into the empty messages array to render it.
  //create new object of new data
  //invoke function @ chatbox component
  function pushMessage() {
    const index = data.findIndex((d) => d.contact.id === contactSelected.id);
    const newData = Object.assign([], data, {
      [index]: {
        contact: contactSelected,
        messages: [
          ...data[index].messages,
          new Message(true, message, new Date()),
        ],
      },
    });
    setData(newData);
    setMessage("");
  }

  //ss of search

  function handleSearch(input) {
    setSearch(input);
    filterContacts(data, input);
  }

  //filter the contacts by search term
  function filterContacts(data, search) {
    const result = data.filter(({ contact }) => {
      return (
        !search || contact.name.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilterContacts(result);
  }

  return (
    <div className="app">
      <aside>
        <header>
          <Avatar user={mainUser} />
        </header>
        <Search search={search} handleSearch={handleSearch} />

        <div className="contact-boxes">
          {filteredContacts.map(({ contact, messages }) => (
            <Contact
              contact={contact}
              key={contact.id}
              setContactSelected={setContactSelected}
              messages={messages}
            />
          ))}
        </div>
      </aside>

      {/* logic that renders the home component when nothing else is selected */}
      {contactSelected.id ? (
        <main>
          <header>
            <Avatar user={contactSelected} showName />
          </header>
          <MessageBox messages={currentMessages} />
          <ChatBox
            message={message}
            setMessage={setMessage}
            pushMessage={pushMessage}
          />
        </main>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;

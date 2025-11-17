import { useState } from "react";
import ChatInput from "./components/chatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { id: "1", message: "HELLO IM A USER", sender: "user" },
    { id: "2", message: "HELLO IM A BOT", sender: "bot" },
  ]);

  return (
    <div className="chat-wrapper">
      <div className="chat-window">
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput setChatMessages={setChatMessages} />
      </div>
    </div>
  );
}

export default App;

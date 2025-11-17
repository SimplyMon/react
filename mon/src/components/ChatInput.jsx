import { useState } from "react";
import { Chatbot } from "supersimpledev";

function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (!inputText.trim()) return;

    const userMessage = {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    };

    const botMessage = {
      message: Chatbot.getResponse(inputText),
      sender: "bot",
      id: crypto.randomUUID(),
    };

    setChatMessages((prev) => [...prev, userMessage, botMessage]);
    setInputText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        value={inputText}
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <button className="send-button" onClick={sendMessage}>
        ➤
      </button>
    </div>
  );
}

export default ChatInput;

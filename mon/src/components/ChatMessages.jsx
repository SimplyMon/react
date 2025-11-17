import ChatMessage from "../components/ChatMessage";

function ChatMessages({ chatMessages }) {
  return (
    <div className="messages-container">
      {chatMessages.map((msg) => (
        <ChatMessage key={msg.id} message={msg.message} sender={msg.sender} />
      ))}
    </div>
  );
}

export default ChatMessages;

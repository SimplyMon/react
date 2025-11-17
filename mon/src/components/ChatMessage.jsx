function ChatMessage({ message, sender }) {
  return (
    <div className={`chat-message ${sender === "user" ? "user" : "bot"}`}>
      {sender === "bot" && (
        <img
          className="avatar"
          src="https://e7.pngegg.com/pngimages/234/79/png-clipart-black-robot-face-illustration-robotics-technology-computer-icons-internet-bot-robotics-humanoid-robot-industrial-robot-thumbnail.png"
        />
      )}

      <div className="bubble">{message}</div>

      {sender === "user" && (
        <img
          className="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxiyCh_Ir4qu369Kc7y21bNje1hnXUMKBOIA&s"
        />
      )}
    </div>
  );
}

export default ChatMessage;

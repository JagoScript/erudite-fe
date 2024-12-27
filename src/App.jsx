import { useState } from "react";
import Input from "./components/atoms/Input";
import Header from "./components/organisms/Header";
import CardList from "./components/organisms/CardList";
import Footer from "./components/organisms/Footer";
import useStore from "./store";

const App = () => {
  const { inputValue, setInputValue } = useStore();
  const [messages, setMessages] = useState([]);

  const handleCardClick = (message) => {
    setInputValue(message);
    console.log("Pesan terkirim:", message);
  };

  const handleSend = async () => {
    const newMessage = { sender: "You", text: inputValue };
    setMessages([...messages, newMessage]);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: inputValue }), // Ensure the payload matches the schema
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      const botMessage = { sender: "Erudite", text: data.response };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  
    setInputValue("");
  };

  return (
    <div className="h-screen bg-neutral-800 text-white flex flex-col items-center justify-between">
      <Header />

      <CardList handleCardClick={handleCardClick} />

      {messages.length > 0 && (
        <div className="chat-container mt-4 w-full max-w-3xl bg-neutral-800 p-4 rounded-lg shadow-md border border-neutral-700">
          <div className="chat-box overflow-y-auto max-h-96" id="chat-box">
            {messages.map((message, index) => (
              <div key={index} className="message mb-2">
                <strong>{message.sender}:</strong> {message.text}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 w-full flex justify-center">
        <Input handleSend={handleSend} />
      </div>

      <Footer />
    </div>
  );
};

export default App;

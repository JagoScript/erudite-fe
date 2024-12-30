import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Input from "./components/atoms/Input";
import CardList from "./components/organisms/CardList";
import Footer from "./components/organisms/Footer";
import useStore from "./store";
import Header from "./components/organisms/Header";

const App = () => {
  const { inputValue, setInputValue } = useStore();
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);

  const handleCardClick = (message) => {
    setInputValue(message);
    console.log("Pesan terkirim:", message);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const newMessage = { sender: "You", text: inputValue };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setInputValue("");

    try {
      const response = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: inputValue }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = { sender: "Erudite", text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-screen bg-neutral-800 text-white flex flex-col items-center justify-between">
      {messages.length === 0 ? (
        <>
          <Header />
          <CardList handleCardClick={handleCardClick} />
        </>
      ) : null}

      {messages.length > 0 && (
        <motion.div
          ref={chatBoxRef}
          className="chat-box overflow-y-auto overflow-x-hidden w-full max-w-3xl flex-1 my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="chat-box"
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`message mb-2 flex items-start ${
                message.sender === "You" ? "justify-end" : "justify-start"
              }`}
              initial={{ opacity: 0, x: message.sender === "You" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`bubble p-2 rounded-lg ${
                  message.sender === "You"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-700 text-white self-start"
                }`}
              >
                <strong>{message.sender}:</strong> {message.text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        className="mt-8 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Input handleSend={handleSend} />
      </motion.div>

      <Footer />
    </div>
  );
};

export default App;

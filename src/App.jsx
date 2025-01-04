import { useState, useEffect, useRef } from "react";
import useStore from "./store";
import Header from "./components/organisms/Header";
import CardList from "./components/organisms/CardList";
import ChatBox from "./components/organisms/ChatBox";
import Input from "./components/atoms/Input";
import Footer from "./components/organisms/Footer";

const App = () => {
  const { inputValue, setInputValue } = useStore();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);
  const contextMemory = useRef([]);

  const handleCardClick = (message) => {
    setInputValue(message);
    console.log("Pesan terkirim:", message);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const newMessage = { sender: "You", text: inputValue };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    contextMemory.current.push(newMessage);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://huge-pony-obliging.ngrok-free.app/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: inputValue,
            context: contextMemory.current,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = { sender: "Erudite", text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      contextMemory.current.push(botMessage);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatBoxRef.current) {
      // Add a small delay to ensure the DOM has rendered new messages
      setTimeout(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }, 100); // Delay to make sure scroll happens after rendering
    }
  }, [messages]); // Trigger on message change

  return (
    <div className="h-screen bg-neutral-800 text-white flex flex-col">
      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col items-center px-4 md:px-6 overflow-auto">
          <Header />
          <CardList handleCardClick={handleCardClick} />
        </div>
      ) : (
        <div className="flex-1 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto" ref={chatBoxRef}>
              <ChatBox  
                messages={messages} 
                isLoading={isLoading} 
                aiProfilePic="src\assets\EruditeLogo.svg"
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-neutral-800 border-neutral-700">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Input handleSend={handleSend} isLoading={isLoading} />
          <p className="text-xs text-neutral-500 mt-4 text-center">
            Harap diperhatikan bahwa Erudite sedang dalam tahap pengembangan dan
            mungkin menghasilkan output yang tidak akurat.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

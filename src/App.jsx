import React, { useState } from "react";
import Input from "./components/atoms/Input";
import Header from "./components/organisms/Header";
import CardList from "./components/organisms/CardList";
import Footer from "./components/organisms/Footer";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleCardClick = (message) => {
    setInputValue(message);
    console.log("Pesan terkirim:", message);
  };

  const handleSend = () => {
    console.log("Pesan terkirim:", inputValue);
    setInputValue(""); // Clear input after sending
  };

  return (
    <div className="h-screen bg-neutral-800 text-white flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Cards */}
      <CardList handleCardClick={handleCardClick} />

      {/* Input */}
      <div className="mt-8 w-full flex justify-center">
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSend={handleSend}
        />
      </div>

      {/* Footer Note */}
      <Footer />
    </div>
  );
};

export default App;

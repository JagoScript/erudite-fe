import React from "react";
import Input from "./components/atoms/Input";
import Header from "./components/organisms/Header";
import CardList from "./components/organisms/CardList";
import Footer from "./components/organisms/Footer";
import useStore from "./store";

const App = () => {
  const { inputValue, setInputValue } = useStore();

  const handleCardClick = (message) => {
    setInputValue(message);
    console.log("Pesan terkirim:", message);
  };

  const handleSend = () => {
    console.log("Pesan terkirim:", inputValue);
    setInputValue("");
  };

  return (
    <div className="h-screen bg-neutral-800 text-white flex flex-col items-center">
      <Header />

      <CardList handleCardClick={handleCardClick} />

      <div className="mt-8 w-full flex justify-center">
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSend={handleSend}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;

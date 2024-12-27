import Header from "../organisms/Header";
import CardList from "../organisms/CardList";
import Input from "../atoms/Input";
import Footer from "../organisms/Footer";

const MainTemplate = ({
  handleCardClick,
  inputValue,
  setInputValue,
  handleSend,
}) => {
  return (
    <div className="h-screen bg-neutral-800 text-white flex flex-col justify-between items-center">
      <Header />
      <CardList handleCardClick={handleCardClick} />
      {/* Input */}
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

export default MainTemplate;

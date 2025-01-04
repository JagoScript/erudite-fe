import useStore from "../../store";
import { FaPaperPlane } from "react-icons/fa";

const Input = ({ handleSend, isLoading }) => {
  const { inputValue, setInputValue } = useStore();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      handleSend();
    }
  };

  return (
    <div className="flex w-full bg-neutral-800 p-2 md:p-4 rounded-lg shadow-md border border-neutral-700">
      <input
        type="text"
        className={`flex-grow bg-transparent text-white placeholder-neutral-400 px-2 md:px-4 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:border-blue-500 transition text-sm md:text-base ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        placeholder={isLoading ? "Erudite is thinking..." : "Ketikkan sesuatu..."}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
      />
      <button
        className={`ml-2 md:ml-4 px-2 md:px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full shadow-lg transition ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-white/20"
        }`}
        onClick={handleSend}
        disabled={isLoading}
      >
        <FaPaperPlane size={14} className="md:w-4 md:h-4" />
      </button>
    </div>
  );
};

export default Input;

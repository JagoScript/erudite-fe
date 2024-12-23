import React from "react";
import useStore from "../../store";

const Input = ({ handleSend }) => {
  const { inputValue, setInputValue } = useStore(); // Mengakses state dari Zustand

  return (
    <div className="flex w-full max-w-3xl bg-neutral-800 p-4 rounded-lg shadow-md border border-neutral-700 mt-4">
      <input
        type="text"
        className="flex-grow bg-transparent text-white placeholder-neutral-400 px-4 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:border-blue-500 transition"
        placeholder="Ketikkan sesuatu..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="ml-4 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:shadow-xl text-white rounded-lg shadow-lg transition"
        onClick={handleSend}
      >
        Kirim
      </button>
    </div>
  );
};

export default Input;

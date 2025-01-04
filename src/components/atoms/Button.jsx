const Button = ({ onClick, label }) => {
  return (
    <button
      className="ml-2 md:ml-4 px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm md:text-base"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

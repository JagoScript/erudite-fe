

const Button = ({ onClick, label }) => {
  return (
    <button
      className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

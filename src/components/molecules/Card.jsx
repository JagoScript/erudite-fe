const Card = ({ icon, color, text, onClick }) => {
  return (
    <div
      className="w-full bg-neutral-800 p-4 rounded-lg shadow-md hover:bg-neutral-700 cursor-pointer transition"
      onClick={onClick}
    >
      <p className={`text-${color}-500 font-semibold mb-2`}>{icon}</p>
      <p className="text-sm md:text-base">{text}</p>
    </div>
  );
};

export default Card;


import CardIcon from "../atoms/CardIcon";

const Card = ({ icon, color, text, onClick }) => {
  return (
    <div
      className="w-64 bg-neutral-800 p-4 rounded-lg shadow-md hover:bg-neutral-700 cursor-pointer transition"
      onClick={onClick}
    >
      <CardIcon icon={icon} color={color} />
      <p>{text}</p>
    </div>
  );
};

export default Card;

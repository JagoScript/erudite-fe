import { motion } from "framer-motion";

const CardList = ({ handleCardClick }) => {
  const cards = [
    {
      message: "Buatkan saya resep ayam saus bombay",
      icon: "🍗",
      color: "text-neutral-300",
    },
    {
      message: "Buatkan saya website sederhana dari HTML CSS",
      icon: "💻",
      color: "text-neutral-300",
    },
    {
      message: "Berapa luas lingkaran dengan jari-jari 5 cm?",
      icon: "📐",
      color: "text-neutral-300",
    },
    {
      message: "Sejarah masuknya internet ke Indonesia",
      icon: "🌐",
      color: "text-neutral-300",
    },
  ];

  return (
    <motion.main
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 px-4 w-full max-w-7xl"
      style={{ direction: "rtl" }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={`bg-neutral-800 p-4 rounded-lg shadow-md hover:bg-neutral-700 cursor-pointer transition ${card.color}`}
          style={{ direction: "ltr" }}
          onClick={() => handleCardClick(card.message)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-semibold mb-2 text-lg">{card.icon}</p>
          <p className="text-sm md:text-base">{card.message}</p>
        </motion.div>
      ))}
    </motion.main>
  );
};

export default CardList;

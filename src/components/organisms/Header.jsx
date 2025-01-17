import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="w-full py-4 md:py-6">
      <motion.h1
        className="text-xl md:text-2xl font-bold flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="src\assets\Erudite.svg" alt="Erudite AI" className="w-66 md:h-28 object-cover" />
        <span className="text-neutral-400 text-xs md:text-sm mt-6">Beta</span> 
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl font-bold flex justify-center text-center my-16 md:my-32 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        Halo! Erudite disini. Ingin Tanya Apa?
      </motion.h2>
    </header>
  );
};

export default Header;

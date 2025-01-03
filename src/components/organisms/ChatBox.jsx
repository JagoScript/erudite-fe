import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ChatBox = ({ messages, isLoading }) => (
  <div className="max-w-3xl mx-auto px-4 py-6 md:px-6">
    {messages.map((message, index) => (
      <motion.div
        key={index}
        className={`message mb-6 flex items-start ${
          message.sender === "You" ? "justify-end" : "justify-start"
        }`}
        initial={{ opacity: 0, x: message.sender === "You" ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`bubble p-2 rounded-lg max-w-[80%] md:max-w-[70%] ${
            message.sender === "You"
              ? "bg-blue-500 text-white self-end"
              : "bg-neutral-800 text-white self-start"
          } break-words`} // Add this class to enable text wrapping
        >
          {message.text}
        </div>
      </motion.div>
    ))}

    {isLoading && (
      <motion.div
        className="message mb-2 flex items-start justify-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bubble p-2 rounded-lg bg-neutral-700 text-white self-start">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-400"></div>
          </div>
        </div>
      </motion.div>
    )}
  </div>
);

ChatBox.propTypes = {
  chatBoxRef: PropTypes.shape({
    current: PropTypes.any,
  }).isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ChatBox;

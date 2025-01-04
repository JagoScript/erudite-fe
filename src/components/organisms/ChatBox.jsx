import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegCopy } from "react-icons/fa";

const ChatBox = ({ messages, isLoading, aiProfilePic }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Pesan disalin ke clipboard.", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  };

  return (
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
          {message.sender !== "You" && (
            <img
              src={aiProfilePic}
              alt="AI Profile"
              className="w-10 h-10 mt-[12px] rounded-full mr-2 p-1 border-[1px] border-[#878685] flex-shrink-0"
            />
          )}
          <div className="max-w-[80%]">
            <div
              className={`bubble p-3 rounded-lg ${
                message.sender === "You"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-neutral-800 text-white"
              } whitespace-pre-wrap break-words`}
            >
              {message.text}
            </div>
            {message.sender !== "You" && (
              <button
                onClick={() => handleCopy(message.text)}
                className="mt-2 mr-2 text-sm text-[#878685] hover:text-neutral-400 flex items-center"
              >
                <FaRegCopy className="mr-1" />
              </button>
            )}
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
          <div className="bubble p-3 rounded-lg bg-neutral-700 text-white self-start">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#878685] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#878685] rounded-full animate-bounce delay-200"></div>
              <div className="w-2 h-2 bg-[#878685] rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
        </motion.div>
      )}
      <ToastContainer />
    </div>
  );
};

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  aiProfilePic: PropTypes.string.isRequired,
};

export default ChatBox;

import React from "react";
import { FaVolumeUp } from "react-icons/fa";

const FawnSpeaker = () => {
  const speak = () => {
    const fawn = new SpeechSynthesisUtterance("fawn");
    speechSynthesis.speak(fawn);
  };

  return (
    <button
      onClick={speak}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
      aria-label="Play pronunciation of 'fawn'"
    >
      <FaVolumeUp className="text-gray-800 dark:text-gray-200" />
    </button>
  );
};

export default FawnSpeaker;

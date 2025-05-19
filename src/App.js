// src/App.js
import React, { useState } from "react";
import featuresList from "./features";

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleEffect = () => {
    setIsShuffling(true);
    let count = 0;
    const interval = setInterval(() => {
      const random =
        featuresList[Math.floor(Math.random() * featuresList.length)];
      setSelectedFeature(random);
      count++;
      if (count > 15) {
        clearInterval(interval);
        setIsShuffling(false);
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-[#0b0f1a] text-white overflow-hidden px-6">
      {/* 🟢 Animated Gradient Balls */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-[100px] top-[-100px] left-[-100px] animate-float-1 z-0" />
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-20 blur-[80px] top-[200px] right-[-80px] animate-float-2 z-0" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-full opacity-20 blur-[120px] bottom-[100px] left-[-150px] animate-float-3 z-0" />
      <div className="absolute w-[250px] h-[250px] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-[70px] bottom-[50px] right-[50px] animate-float-4 z-0" />
      <div className="absolute w-[350px] h-[350px] bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full opacity-20 blur-[90px] top-[40%] left-[40%] animate-float-5 z-0" />

      {/* Content */}
      <h1 className="text-5xl font-bold mb-12 text-center drop-shadow-2xl z-10">
        Question Shuffler
      </h1>

      <button
        onClick={shuffleEffect}
        disabled={isShuffling}
        className={`mb-10 text-2xl px-10 py-4 rounded-full font-bold shadow-xl transition z-10 ${
          isShuffling ? "bg-gray-600" : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {isShuffling ? "Shuffling..." : "Shuffle Question"}
      </button>

      {selectedFeature && (
        <div className="relative z-10 w-full max-w-4xl p-10 rounded-3xl border border-white/20 backdrop-blur-md bg-white/10 text-2xl leading-relaxed shadow-xl animate-fadeIn glass-card">
          <h2 className="text-3xl font-semibold mb-6">Question:</h2>
          <p>{selectedFeature}</p>
        </div>
      )}

      {!selectedFeature && (
        <p className="text-gray-400 text-xl z-10">
          Click the button to shuffle a random question.
        </p>
      )}
    </div>
  );
};

export default App;


import React, { useState } from 'react';

// A simple, reusable Star component defined outside the main App component
// to prevent re-definition on each render, which is a React best practice.
const Star: React.FC<{ className: string }> = ({ className }) => (
  <div className={`absolute rounded-full bg-purple-300/70 animate-pulse ${className}`}></div>
);

// A component to render the firework effect.
const Fireworks: React.FC = () => {
    // Creates an array of 80 firework particles for a vibrant display.
    const particles = Array.from({ length: 80 }).map((_, index) => {
        const colors = ['bg-pink-400', 'bg-cyan-400', 'bg-yellow-300', 'bg-lime-400', 'bg-purple-400'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const style: React.CSSProperties = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            // Spreads the start of each firework animation over 4 seconds for a continuous effect.
            animationDelay: `${Math.random() * 4}s`,
        };
        return (
            <div
                key={index}
                className={`absolute w-1 h-1 rounded-full animate-firework ${color}`}
                style={style}
            ></div>
        );
    });

    return <div className="absolute inset-0 z-50 pointer-events-none">{particles}</div>;
};


const App: React.FC = () => {
  const [fireworksActive, setFireworksActive] = useState(false);

  const handlePressStart = () => {
    if (fireworksActive) return;

    setFireworksActive(true);
    // The firework effect will last for 5 seconds.
    setTimeout(() => {
        setFireworksActive(false);
    }, 5000);
  };

  return (
    // Main container with a dark base, set up for centering and a space-like feel.
    <main className="relative min-h-screen flex items-center justify-center bg-[#0d051c] overflow-hidden text-white p-4">
      
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-[#3c1e5a] via-[#1e102f] to-[#0d051c]"></div>
      
      {/* Vignette effect to draw focus to the center */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-transparent to-black/60"></div>

      {/* Starfield background composed of several Star components */}
      <div className="absolute inset-0 z-20">
        <Star className="w-1 h-1 top-[10%] left-[15%]" />
        <Star className="w-2 h-2 top-[20%] left-[80%]" />
        <Star className="w-1 h-1 top-[50%] left-[5%]" />
        <Star className="w-1 h-1 top-[85%] left-[25%]" />
        <Star className="w-2 h-2 top-[90%] left-[90%]" />
        <Star className="w-1 h-1 top-[35%] left-[40%]" />
        <Star className="w-1 h-1 top-[60%] left-[60%]" />
        <Star className="w-1 h-1 top-[70%] left-[45%]" />
        <Star className="w-2 h-2 top-[15%] left-[55%]" />
        <Star className="w-1 h-1 top-[5%] left-[50%]" />
        <Star className="w-1 h-1 top-[95%] left-[50%]" />
      </div>

      {/* Wrapper for the main content and the new button, now with responsive padding and max-width */}
      <div className="relative z-30 flex w-full max-w-screen-md flex-col items-center gap-10 px-4">
        {/* The main content box with the celebratory message */}
        <div className="text-center p-8 sm:p-12 md:p-16 border-4 border-purple-400 bg-[#1e102f]/50 backdrop-blur-sm rounded-lg shadow-[0_0_20px_theme(colors.purple.500),inset_0_0_15px_theme(colors.purple.600)] transition-all duration-300 hover:shadow-[0_0_35px_theme(colors.purple.400),inset_0_0_20px_theme(colors.purple.500)] hover:border-purple-300">
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold text-purple-200 drop-shadow-[0_0_8px_#c084fc]">
            Feliz Día del Programador
            {/* Superscript for the number 256, styled to match the retro theme */}
            <sup className="text-xl sm:text-3xl md:text-4xl align-super ml-1">256</sup>
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-purple-300 drop-shadow-[0_0_5px_#e9d5ff]">
            Te Desea Marin
          </p>
        </div>

        {/* The button to trigger the firework effects */}
        <button
          onClick={handlePressStart}
          disabled={fireworksActive}
          aria-label="Iniciar efectos de fuegos artificiales"
          className="px-8 py-4 text-xl bg-purple-700/80 border-2 border-purple-400 text-purple-100 rounded-md shadow-[0_0_15px_theme(colors.purple.600)] hover:bg-purple-600/80 hover:shadow-[0_0_25px_theme(colors.purple.500)] hover:border-purple-300 transition-all duration-300 ease-in-out disabled:bg-gray-700/50 disabled:text-gray-400 disabled:border-gray-500 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {fireworksActive ? 'Celebrando...' : 'Press Start'}
        </button>
      </div>
      
      {/* Conditionally render the fireworks component when active */}
      {fireworksActive && <Fireworks />}

      {/* Footer text */}
      <footer className="absolute bottom-4 left-0 right-0 z-40 text-center">
        <p className="text-sm text-purple-300/80 drop-shadow-[0_0_3px_#e9d5ff]">
          ¡Por favor, hagan backup!
        </p>
      </footer>
    </main>
  );
};

export default App;

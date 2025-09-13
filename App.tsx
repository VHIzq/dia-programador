
import React from 'react';

// A simple, reusable Star component defined outside the main App component
// to prevent re-definition on each render, which is a React best practice.
const Star: React.FC<{ className: string }> = ({ className }) => (
  <div className={`absolute rounded-full bg-purple-300/70 animate-pulse ${className}`}></div>
);

const App: React.FC = () => {
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

      {/* The main content box with the celebratory message */}
      <div className="relative z-30 text-center p-8 sm:p-12 md:p-16 border-4 border-purple-400 bg-[#1e102f]/50 backdrop-blur-sm rounded-lg shadow-[0_0_20px_theme(colors.purple.500),inset_0_0_15px_theme(colors.purple.600)] transition-all duration-300 hover:shadow-[0_0_35px_theme(colors.purple.400),inset_0_0_20px_theme(colors.purple.500)] hover:border-purple-300">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-purple-200 drop-shadow-[0_0_8px_#c084fc]">
          Feliz Día del Programador
          {/* Superscript for the number 256, styled to match the retro theme */}
          <sup className="text-xl sm:text-3xl md:text-4xl align-super ml-1">256</sup>
        </h1>
        <p className="mt-6 text-lg sm:text-2xl text-purple-300 drop-shadow-[0_0_5px_#e9d5ff]">
          Te Desea Marin
        </p>
      </div>
    </main>
  );
};

export default App;

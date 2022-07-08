import React from "react";
import { WaveCard } from "./internals/WaveCard";
import "./WavesShowcase.styles.css";

const WavesShowcase = ({ waves }) => {
  return (
    <div className="container">
      {!waves.length ? (
        <span>"There are no waves yet</span>
      ) : (
        <h1>All waves</h1>
      )}

      <div className="waves">
        {waves.map((wave, index) => (
          <WaveCard wave={wave} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WavesShowcase;

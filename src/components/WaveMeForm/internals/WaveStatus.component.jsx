import React from "react";
import "./styles/WaveStatus.component.css";

export const WaveStatus = ({ successfulWave, wavingErrorMessage }) => {
  return (
    <span
      className={`wave-status ${
        successfulWave ? "wave-status-success" : "wave-status-error"
      }`}
    >
      {successfulWave ? "Thank you for waving me!" : wavingErrorMessage}
    </span>
  );
};

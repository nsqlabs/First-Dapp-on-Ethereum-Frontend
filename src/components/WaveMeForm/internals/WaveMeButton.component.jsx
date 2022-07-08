import React from "react";
import "./styles/WaveMeButton.component.css"

const WaveMeButtonContent = ({ waving }) => {
  if (!waving) {
    return (
      <>
        Wave at Me{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </>
    );
  } else {
    return "Waving ...";
  }
};

export const WaveMeButton = ({ handleFormSubmit, waving, isFormEmpty }) => {
  return (
    <button
      className={`waveButton ${waving ? "waving" : ""}`}
      onClick={(e) => handleFormSubmit(e)}
      type="submit"
      disabled={isFormEmpty || waving}
    >
      <WaveMeButtonContent waving={waving} empty={isFormEmpty} />
    </button>
  );
};

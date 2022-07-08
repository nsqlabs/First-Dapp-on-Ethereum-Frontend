import React, { useState } from "react";
import { wave } from "../../services/waves";
import { WaveMeButton } from "./internals/WaveMeButton.component";
import { WaveStatus } from "./internals/WaveStatus.component";
import "./WaveMeForm.styles.css";

const WaveMeForm = () => {
  const [message, setMessage] = useState("");
  const [waving, setWaving] = useState(false);
  const [alreadyWaved, setAlreadyWaved] = useState(false);
  const [successfulWave, setSuccessfulWave] = useState(false);
  const [wavingErrorMessage, setWavingErrorMessage] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    if (event.target.value.length <= 256) {
      setMessage(event.target.value);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setWaving(true);
    try {
      await wave(message);
      setSuccessfulWave(true);
    } catch (error) {
      setSuccessfulWave(false);
      setWavingErrorMessage(error.message);
    }

    setAlreadyWaved(true);
    setMessage("");
    setWaving(false);
  };

  return (
    <div className="container">
      <form className="form">
        <input
          value={message}
          onChange={(e) => handleInputChange(e)}
          type="text"
          placeholder="Leave me a message! (Max 256 chars)"
          disabled={waving || alreadyWaved}
          className="form__field"
        />
        <WaveMeButton
          handleFormSubmit={handleFormSubmit}
          waving={waving}
          isFormEmpty={!message}
        />
      </form>

      {alreadyWaved && (
        <WaveStatus
          successfulWave={successfulWave}
          wavingErrorMessage={wavingErrorMessage}
        />
      )}
    </div>
  );
};

export default WaveMeForm;

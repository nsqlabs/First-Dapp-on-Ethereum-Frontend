import React from "react";
import "./ConnectWalletButton.styles.css";

const ConnectWalletButton = ({ onClick }) => {
  return (
    <button className="connectWalletButton" onClick={onClick}>
      Connect Wallet
      <span role="img" aria-label="link" className="emoji">
      🔗
      </span>
    </button>
  );
};

export default ConnectWalletButton;

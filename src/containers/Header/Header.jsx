import React from "react";
import Bio from "../../components/Bio";
import "./Header.styles.css";

const Header = ({ walletConnected }) => {
  return (
    <div className="header">
      <Bio />
      {!walletConnected && (
        <span>Connect your Ethereum wallet and wave at me!</span>
      )}
    </div>
  );
};

export default Header;

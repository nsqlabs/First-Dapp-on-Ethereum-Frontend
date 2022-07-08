import React, { useEffect, useState } from "react";
import Header from "./containers/Header";
import { checkIfWalletIsConnected, connectWallet } from "./utils/wallet";
import "./App.css";
import ConnectWalletButton from "./components/ConnectWalletButton/ConnectWalletButton";
import { getAllWaves, wave } from "./services/waves";
import WaveMeForm from "./components/WaveMeForm";
import WavesShowcase from "./components/WavesShowcase/WavesShowcase";

const App = () => {
  /*
   * This runs our function when the page loads.
   */
  const [allWaves, setAllWaves] = useState([]);
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setCurrentAccount);
    const getWaves = async () => {
      const waves = await getAllWaves();
      setAllWaves(waves);
    };
    getWaves();
  }, []);

  return (
    <div className="mainContainer">
      <Header onClick={null} walletConnected={!!currentAccount} />
      {!currentAccount && (
        <ConnectWalletButton onClick={() => connectWallet(setCurrentAccount)} />
      )}
      {currentAccount && (
        <>
          <WaveMeForm />
          <WavesShowcase waves={allWaves} />
        </>
      )}
    </div>
  );
};

export default App;

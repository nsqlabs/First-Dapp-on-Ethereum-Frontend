import { ethers } from "ethers";
import { getContractABI } from "../utils/contract";

export const wave = async (message) => {
  // Error is not handled here because I need the error message in the form.
  const { ethereum } = window;
  const CONTRACT_ADDRESS = process.env.REACT_APP_WAVE_CONTRACT_ADDRESS;
  const CONTRACT_ABI = getContractABI();

  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const wavePortalContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    const waveTxn = await wavePortalContract.wave(message);
    console.log("Mining...", waveTxn.hash);

    await waveTxn.wait();
    console.log("Mined -- ", waveTxn.hash);

    let count = await wavePortalContract.getTotalWaves();
    console.log("Retrieved total wave count...", count.toNumber());
  } else {
    console.log("Ethereum object doesn't exist!");
  }
};

export const getAllWaves = async () => {
  try {
    const { ethereum } = window;
    const CONTRACT_ADDRESS = process.env.REACT_APP_WAVE_CONTRACT_ADDRESS;
    const CONTRACT_ABI = getContractABI();

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      const waves = await wavePortalContract.getAllWaves();
      return waves.map(({ waver, message, timestamp }) => ({
        address: waver,
        timestamp: new Date(timestamp * 1000),
        message: message,
      }));
    }
  } catch (error) {
    console.log(error);
  }
};

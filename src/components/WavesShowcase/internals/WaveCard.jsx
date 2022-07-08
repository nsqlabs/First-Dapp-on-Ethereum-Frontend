import React from "react";
import "./WaveCard.styles.css";

export const WaveCard = ({ wave: { address, timestamp, message } }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-header">
          <img
            className="card-header__image"
            src="http://www.clipartbest.com/cliparts/LcK/zqx/LcKzqxBLi.gif"
            alt=""
          />
        </div>
        <div className="card__information">
          <h3 className="card__information-message">{message}</h3>
          <span>
            <strong>Sent at: </strong>
            {timestamp.toDateString()}
          </span>
        </div>
        <div className="card__footer">
          <span className="message-address">
            <strong>From: </strong>
            <a href={`https://etherscan.io/address/${address}`}>{address}</a>
          </span>
        </div>
      </div>
    </div>
  );
};

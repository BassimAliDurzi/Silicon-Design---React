import React from "react";

const ReceiveInfo = (transaction) => {
  return (
    <div className="receive-1">
      <div className="receive-img">
        <img src={transaction.img} alt="transaction.imgAlt" />
      </div>
      <p>{transaction.text}</p>
    </div>
  );
};

export default ReceiveInfo;

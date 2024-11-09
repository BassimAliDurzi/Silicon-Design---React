import React, { useState } from "react";

const FaqItems = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq">
      <details>
        <summary onClick={() => setIsOpen(!isOpen)}>
          <span>{question}</span>
          <div className="icon">
            <div
              className={`${
                isOpen
                  ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 size-9 rounded-full content-center"
                  : ""
              } `}
            >
              {isOpen ? (
                <i className="fa-regular fa-angle-up"></i>
              ) : (
                <i className="fa-regular fa-angle-down"></i>
              )}
            </div>
          </div>
        </summary>
        {isOpen && <p>{answer}</p>}
      </details>
    </div>
  );
};

export default FaqItems;

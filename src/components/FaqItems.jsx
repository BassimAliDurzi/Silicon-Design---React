import React, { useState } from "react";

const FaqItems = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq">
      <details>
        <summary onClick={() => setIsOpen(!isOpen)}>
          <span>{item.title}</span>
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
        {isOpen && <p>{item.content}</p>}
      </details>
    </div>
  );
};

export default FaqItems;

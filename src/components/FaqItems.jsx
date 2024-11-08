import React, { useState } from "react";

const FaqItems = (faq) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq">
      <details>
        <summary onClick={() => setIsOpen(!isOpen)}>
          <span>{faq.question}</span>
          <div className="icon">
            <div>
              {isOpen ? (
                <i className="fa-regular fa-angle-up"></i>
              ) : (
                <i className="fa-regular fa-angle-down"></i>
              )}
            </div>
          </div>
        </summary>
        {isOpen && <p>{faq.answer}</p>}
      </details>
    </div>
  );
};

export default FaqItems;

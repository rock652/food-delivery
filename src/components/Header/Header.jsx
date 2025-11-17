import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          I would like to order some food. Please send me the menu options
          available right now. I’m looking for something fresh, tasty, and quick
          to deliver. Kindly confirm the order details and estimated delivery
          time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import icon from "./icon.svg";
import knife2 from "./knife-2.png";
import chefEmoji from "./chef-emoji.png";
import "./home.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="text-box" />
    </div>
  );
};

export const SendIcon = () => {
    return (
      <div className="send-icon">
        <img className="icon" alt="Icon" src={icon} />
      </div>
    );
  };

  export const Knife1 = () => {
    return (
      <div className="image">
        <img className="knife" alt="Knife" src={knife2} />
      </div>
    );
  };

  export const Knife2 = () => {
    return (
      <div className="image2">
        <img className="knife2" alt="Knife" src={knife1} />
      </div>
    );
  };

  export const ChefEmoji = () => {
    return (
        <div className = "iamge3">
            <img className = "chef-emoji" alt = "Chef emoji" src = {chefEmoji} />
        </div>
    );
  };

  export const MenuIcon = () => {
    return (
        <div className="menu-icon">
            <img className = "icon" alt = "Icon" src = {icon} />
        </div>
    );
  };

  export const Label = () => {
    return (
        <div className = "label">
            <div className = "text-wrapper">PantryAI</div>
        </div>
    );
  };

  export const Header = () => {
    return (
        <div className = "header">
            <div className = "header2" />
        </div>
    );
  };

  export const Footer = () => {
    return (
        <div className = "footer1">
            <div className = "footer2" />
        </div>
    )
  }
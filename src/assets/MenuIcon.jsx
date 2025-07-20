import React from "react";

const MenuIcon = ({ className = "", ...props }) => (
  <svg 
    width="26" 
    height="23" 
    viewBox="0 0 26 23" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M2 2.5H24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M2 11.5H24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M2 20.5H24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export default MenuIcon; 
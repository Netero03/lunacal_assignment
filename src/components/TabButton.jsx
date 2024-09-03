import React from "react";

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative z-10 w-1/3 py-2 text-xs lg:text-base font-medium rounded-xl transition-colors duration-300 ${isActive ? "text-white shadow-black shadow-2xl" : "text-gray-400"
        }`}
    >
      {label}
    </button>
  );
}
export default TabButton;
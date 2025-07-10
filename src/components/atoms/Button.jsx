"use client";
import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#D72863] text-white px-4 py-2 hover:bg-pink-700 transition-colors rounded-none border-r-1 ${className}`}
    >
      {children}
    </button>
  );
}

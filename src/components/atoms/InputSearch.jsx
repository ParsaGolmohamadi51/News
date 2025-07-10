"use client";
import React from "react";

export default function InputSearch({
  value,
  onChange,
  placeholder = "جستجو...",
  className = "",
}) {
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 rounded-none focus:outline-none placeholder-white placeholder:text-[10px] sm:placeholder:text-sm bg-[#D72863] text-white ${className}`}
    />
  );
}

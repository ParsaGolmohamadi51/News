"use client";
import React from "react";

export default function CategoryItem({ label, onClick, isActive = false }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? " text-gray-900"
          : "text-gray-700 "
      }`}
    >
      {label}
    </button>
  );
}

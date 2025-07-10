"use client";
import React from "react";

export default function CardText({ title, description }) {
  return (
    <div className="p-4 flex flex-col justify-center gap-2">
      <h3 className="text-sm sm:text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-[10px] sm:text-sm text-gray-600">{description}</p>
    </div>
  );
}

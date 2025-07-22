"use client";
import React from "react";

export default function CardImage({ src, alt = "تصویر کارت", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover w-full h-full ${className}`}
    />
  );
}

"use client";
import React from "react";

export default function Logo({
  src = "/assets/images/Logo.png",
  alt = "Logo",
  className = "w-5 h-10 sm:w-7 sm:h-13",
}) {
  return <img src={src} alt={alt} className={className} />;
}

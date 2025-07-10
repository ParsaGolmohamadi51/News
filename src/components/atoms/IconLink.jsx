"use client";
import React from "react";

export default function IconLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-black hover:text-gray-900 transition-colors text-xl"
    >
      <Icon />
    </a>
  );
}

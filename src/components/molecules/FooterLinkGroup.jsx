"use client";
import React from "react";

export default function FooterLinkGroup({ title, links }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <h4 className="text-black font-bold mb-2">{title}</h4>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-[10px] sm:text-sm text-gary-300 hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

"use client";
import React from "react";

export default function CardText({ title, description, url }) {
  return (
    <div className="p-4 flex flex-col justify-center gap-2">
      <h3 className="text-sm sm:text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-[10px] sm:text-sm text-gray-600">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          مشاهده خبر
        </a>
      )}
    </div>
  );
}

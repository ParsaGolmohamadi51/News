"use client";
import React from "react";
export default function CurrentDate({ label = "تاریخ امروز" }) {
  const today = new Date();
  const formatted = today.toLocaleDateString("fa-IR-u-nu-latn", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="flex flex-row text-sm gap-1">
      <label>{label}</label>
      {formatted}
    </div>
  );
}

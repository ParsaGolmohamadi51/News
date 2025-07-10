"use client";
import React, { useState } from "react";
import CategoryItem from "@/components/atoms/CategoryItem";

const categories = [
  "دانش و فن آوری",
  "سلامت",
  "جامعه",
  "اقتصاد",
  "بازار",
  "ورزش",
  "سیاست",
  "بین الملل",
];

export default function CategoryList({ className = "" }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-2 px-4 py-2 bg-white rounded-t-lg w-full ${className}`}>
      {categories.map((category) => (
        <CategoryItem
          key={category}
          label={category}
          isActive={activeCategory === category}
          onClick={() => setActiveCategory(category)}
        />
      ))}
    </div>
  );
}

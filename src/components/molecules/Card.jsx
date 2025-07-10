"use client";
import React from "react";
import CardImage from "@/components/atoms/CardImage";
import CardText from "@/components/atoms/CardText";

export default function Card({ imageSrc, title, description }) {
  return (
    <div className="flex flex-row border-b overflow-hidden bg-[#d9d9d9] shadow-md w-full">
      <div className="flex justify-center items-center w-1/5 ">
        <CardImage src={imageSrc} />
      </div>
      <div className="w-4/5">
        <CardText title={title} description={description} />
      </div>
    </div>
  );
}

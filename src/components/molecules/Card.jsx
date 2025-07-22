"use client";
import React from "react";
import CardImage from "@/components/atoms/CardImage";
import CardText from "@/components/atoms/CardText";

export default function Card({ imageSrc, title, description, url }) {
  return (
    <div className="flex flex-col md:flex-row border-b overflow-hidden bg-[#d9d9d9] shadow-md w-full">
      <div className="flex justify-center items-center md:w-1/5 ">
        <CardImage src={imageSrc} />
      </div>
      <div className="w-4/5">
        <CardText title={title} description={description} url={url} />
      </div>
    </div>
  );
}

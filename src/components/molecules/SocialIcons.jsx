"use client";
import React from "react";
import IconLink from "@/components/atoms/IconLink";
import { FaTelegram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <IconLink href="#" icon={FaTelegram} label="تلگرام" />
      <IconLink href="#" icon={FaFacebook} label="فیسبوک" />
      <IconLink href="#" icon={FaYoutube} label="یوتیوب" />
    </div>
  );
}

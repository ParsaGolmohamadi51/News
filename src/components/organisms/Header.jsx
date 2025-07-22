"use client";
import React, { useState, useRef, useEffect } from "react";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import SearchBar from "@/components/molecules/SearchBar";
import DatePicker from "@/components/atoms/DatePicker";
import { sendSearchQuery } from "@/services/searchService";
import { useSearch } from "@/context/SearchContext";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { setSearchResults } = useSearch();

  const handleSearch = async () => {
    try {
      const result = await sendSearchQuery(searchText);
      setSearchResults(result);
    } catch (err) {
      alert("مشکلی در جستجو پیش آمد.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        // اگر منویی باز داری، اینجا باید با useState کنترلش کنی
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="text-white relative">
      <div className="p-3 bg-[#004E7C] text-white">
        <DatePicker
          label="تاریخ : "
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />
      </div>

      <div className="bg-[#005689] flex items-center justify-around px-4 sm:px-6 gap-4 py-1 sm:py-8">
        <div className="flex items-center gap-3">
          <Logo />
          <Text className="text-sm sm:text-xl font-bold">سایت خبری تروسکه</Text>
        </div>

        <div className="hidden sm:flex w-[40rem]">
          <SearchBar
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onSearch={handleSearch}
          />
        </div>
      </div>

      <section className="flex justify-center items-center sm:hidden py-7">
        <div className="w-5/6 py-2">
          <SearchBar
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onSearch={handleSearch}
          />
        </div>
      </section>
    </header>
  );
}

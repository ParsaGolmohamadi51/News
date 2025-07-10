"use client";
import React, { useState, useRef, useEffect } from "react";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import SearchBar from "@/components/molecules/SearchBar";
import DatePicker from "@/components/atoms/DatePicker";
import { sendSearchQuery } from "@/services/searchService";
import CategoryList from "@/components/molecules/CategoryList";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSearch = async () => {
    try {
      const result = await sendSearchQuery(searchText);
      console.log("نتایج جستجو:", result);
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
        setIsMenuOpen(false);
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

        <div className="block sm:hidden">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 sm:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex w-[40rem]">
          <SearchBar
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onSearch={handleSearch}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="sm:hidden absolute top-0 w-1/2 bg-white text-black shadow z-50"
        >
          <CategoryList isMobile />
        </div>
      )}

      <section className="hidden sm:flex justify-center items-center">
        <div className="-mt-6 w-5/6 py-2">
          <CategoryList />
        </div>
      </section>

      <section className="flex justify-center items-center sm:hidden py-7">
        <div className="-mt-6 w-5/6 py-2">
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

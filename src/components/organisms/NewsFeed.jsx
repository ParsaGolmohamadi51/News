"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/molecules/Card";
import { fetchNews } from "@/services/newsService";
import { useSearch } from "@/context/SearchContext";

export default function NewsSection() {
  const [newsList, setNewsList] = useState([]);
  const { searchResults } = useSearch();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchNews();
        setNewsList(data);
      } catch (err) {
        console.error("خطا در دریافت اخبار:", err.message);
      }
    };

    getData();
  }, []);

  const listToShow = searchResults || newsList;

  return (
    <section className="w-full flex flex-col justify-center items-center bg-white py-14">
      <div className="-mt-6 w-5/6">
        {listToShow.map((item, index) => (
          <Card
            key={index}
            imageSrc={item.urlToImage}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}

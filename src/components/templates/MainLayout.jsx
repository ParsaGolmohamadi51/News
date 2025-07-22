"use client";
import React from "react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import NewsFeed from "@/components/organisms/NewsFeed";
import { SearchProvider } from "@/context/SearchContext";

export default function MainLayout({ children }) {
  return (
    <SearchProvider>
      <Header />
      <NewsFeed />
      <main>{children}</main>
      <Footer />
    </SearchProvider>
  );
}

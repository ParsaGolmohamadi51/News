"use client";
import React from "react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import NewsFeed from "@/components/organisms/NewsFeed";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <NewsFeed />
      <main>{children}</main>
      <Footer />
    </>
  );
}

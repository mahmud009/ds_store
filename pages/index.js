import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import NavMenu from "@/components/NavMenu/NavMenu";
import { Products } from "@/components/Products/Products";
import { ProductsProvider } from "@/context/ProductCtx";

export default function Home() {
  return (
    <>
      <ProductsProvider>
        <Head>
          <title>DS Store | Products</title>
        </Head>
        <main>
          <NavMenu />
          <Hero />
          <Products />
          <Footer />
        </main>
      </ProductsProvider>
    </>
  );
}

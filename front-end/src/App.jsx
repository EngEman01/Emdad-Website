import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home"; 

export default function App() {
  const [language, setLanguage] = useState("ar"); // Default language is Arabic

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ar" ? "en" : "ar"));
  };

  const arabicContent = {
    welcomeMessage: "أهلاً بك في الصفحة الرئيسية",
    description: "وصف المنتجات الرائعة لدينا",
    productsHeading: "منتجاتنا",
    product1: "منتج 1",
    product2: "منتج 2",
    product3: "منتج 3",
    image1: "/images/product1-ar.jpg",
    image2: "/images/product2-ar.jpg",
    image3: "/images/product3-ar.jpg"
  };
  
  const englishContent = {
    welcomeMessage: "Welcome to the Home Page",
    description: "Description of our amazing products",
    productsHeading: "Our Products",
    product1: "Product 1",
    product2: "Product 2",
    product3: "Product 3",
    image1: "/images/product1-en.jpg",
    image2: "/images/product2-en.jpg",
    image3: "/images/product3-en.jpg"
  };

  const content = language === "ar" ? arabicContent : englishContent;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout language={language} toggleLanguage={toggleLanguage} />, // Pass language and toggle function
      children: [
        {
          path: "",
          element: <Home content={content} />, // Pass content to Home
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
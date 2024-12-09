import React from "react";
import styleHome from "./Home.module.css";

export default function Home({ content }) {
  return (
    <div className={styleHome.homeStyle}>
      <div className={styleHome.firstLook}>
        <div className={styleHome.leftSide}>
          <h1>{content.welcomeMessage}</h1>

          {/* Description */}
          <p>{content.description}</p>
        </div>

        <div className={styleHome.rightSide}>
          <img className={styleHome.homeLook} src="./images/homeLogo.png" alt="not found" />
        </div>
        </div>
        {/* Product List */}
        <h2>{content.productsHeading}</h2>
        <div className={styleHome.productList}>
          <div className={styleHome.productItem}>
            <img
              src={content.image1}
              alt={content.product1}
              className={styleHome.productImage}
            />
            <h3>{content.product1}</h3>
          </div>

          <div className={styleHome.productItem}>
            <img
              src={content.image2}
              alt={content.product2}
              className={styleHome.productImage}
            />
            <h3>{content.product2}</h3>
          </div>

          <div className={styleHome.productItem}>
            <img
              src={content.image3}
              alt={content.product3}
              className={styleHome.productImage}
            />
            <h3>{content.product3}</h3>
          </div>
          <div className={styleHome.productItem}>
            <img
              src={content.image3}
              alt={content.product3}
              className={styleHome.productImage}
            />
            <h3>{content.product3}</h3>
          </div>
          <div className={styleHome.productItem}>
            <img
              src={content.image3}
              alt={content.product3}
              className={styleHome.productImage}
            />
            <h3>{content.product3}</h3>
          </div>
          <div className={styleHome.productItem}>
            <img
              src={content.image3}
              alt={content.product3}
              className={styleHome.productImage}
            />
            <h3>{content.product3}</h3>
          </div>
          <div className={styleHome.productItem}>
            <img
              src={content.image3}
              alt={content.product3}
              className={styleHome.productImage}
            />
            <h3>{content.product3}</h3>
          </div>
          <div className={styleHome.productItem}>
            <img
              src={content.image3}
              alt={content.product3}
              className={styleHome.productImage}
            />
            <h3>{content.product3}</h3>
          </div>
          <div className={styleHome.productItem}>
            <img
              src={content.image3}
              alt={content.product3}
              className={styleHome.productImage}
            />
            <h3>{content.product3}</h3>
          </div>
        </div>
      
    </div>
  );
}

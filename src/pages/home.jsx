import React from 'react'
import HeroSlider from "../components/HeroSlider";
import Categories from "../components/Categories";
import BrandBar from "../components/BrandBar";
import ProductSection1 from "../components/ProductSection1";
import ProductSection2 from "../components/ProductSection2";
import ProductSection3 from "../components/ProductSection3";

import Mapfacebook from "../components/Mapfacebook";
import Footer from "../components/Footer";

export const home = () => {
  return (
    <div className="font-sans">
    <main className="mt-4">
      <HeroSlider />
      <Categories />
      <BrandBar />
      <ProductSection1 />
      <ProductSection2 />
      <ProductSection3 />
    </main>
  </div>
  )
}

export default home
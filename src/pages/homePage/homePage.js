import React from "react";
import HomePageCard from "../../components/homePage-Card";
import { shopItems } from "../../utils/constant";

const HomePage = () => {
  return (
    <div className="container">
      <div className="items-container">
        <HomePageCard data={shopItems} />
      </div>
    </div>
  );
};

export default HomePage;

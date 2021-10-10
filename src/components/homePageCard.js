import React from "react";
import { Card } from "antd";
import { shopItems } from "../utils/constant";

const homePageCard = () => {
  return (
    <>
      {shopItems.map((item) => {
        const { title } = item;

        return (
          <Card hoverable>
            <Card title={title}>
              <p>Shop Now</p>
            </Card>
          </Card>
        );
      })}
    </>
  );
};

export default homePageCard;

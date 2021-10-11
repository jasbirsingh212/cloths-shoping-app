import React from "react";
import { Card } from "antd";

const homePageCard = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item) => {
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

import React from "react";
import { Card } from "antd";

const shopNowStyle = {
  paddingTop: 12,
  paddingBottom: 12,
};

const homePageCard = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item) => {
        const { title, width, id, imageUrl } = item;
        const cardWidth = `${
          width ? "item-container-large" : "item-container-small"
        } center-inner-card background-image`;

        return (
          <Card
            hoverable
            className={cardWidth}
            key={id}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <Card
              title={title}
              className="inner-card"
              bodyStyle={shopNowStyle}
              hoverable
            >
              <p>
                <a href="#">Shop Now</a>
              </p>
            </Card>
          </Card>
        );
      })}
    </>
  );
};

export default homePageCard;

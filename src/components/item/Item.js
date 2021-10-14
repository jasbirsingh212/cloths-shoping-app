import React from "react";
import { Card } from "antd";
import { shopNowStyle } from "../../utils/constant";
import "./item.scss";

const homePageCard = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item) => {
        const { title, width, id, imageUrl } = item;
        const cardWidth = `${
          width ? "item-container-large" : "item-container-small"
        } `

        return (
          
            <Card
              hoverable
              className={cardWidth}
              key={id}
              cover={<ImageItem title={title} imageUrl={imageUrl} />}
            >
            </Card>
        );
      })}
    </>
  );
};

const ImageItem = ({title, imageUrl}) => {

      return (
        <>
          <img alt={title} src={`${imageUrl}`} className='hover-item'/>
          <Card
              title={title}
              className="inner-card"
              bodyStyle={shopNowStyle}
            >
              <p>
                <a href={`/${title.toLowerCase()}`}>Shop Now</a>
              </p>
            </Card>
        </>
      )

}


export default homePageCard;

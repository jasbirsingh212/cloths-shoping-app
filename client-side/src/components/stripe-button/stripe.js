import React from "react";
//import { AiOutlineCrown } from "react-icons/ai";
import StripeCheckout from "react-stripe-checkout";
import "./stripe.scss";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 70;
  const publishKey =
    "pk_test_51K4JGbSDAJsDOSumUaSlvePpTTTQ8yDFJsSyMXRFtzkQzxSXHpJOld73A8CP3XiTNpCaEr9ViH0gpvMcfSIsYN3i00ejmXIVsM";

  const onToken = (token) => {
    //console.log(token);
    axios({
      url: "payments",
      method: "post",
      data: {
        token,
        amount: priceForStripe,
      },
    }).then((res) => {
        alert("payement Success");
        console.log(res);
      })
      .catch((error) => {
        console.log("Something went wrong", JSON.stringify(error));
      });
  };

  return (
    <div className="stripe">
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        //image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AFont_Awesome_5_solid_crown.svg&psig=AOvVaw2jzprbrXK-v9ILG_2CDB0w&ust=1635487144646000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODkscS27PMCFQAAAAAdAAAAABAD"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishKey}
        ComponentClass="div"
      />
    </div>
  );
};

export default StripeButton;

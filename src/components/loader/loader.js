import React from 'react';
import './loader.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderComponent from "react-loader-spinner";

const Loader = () => {
    return (
        <div className='loader-container'>
        <LoaderComponent
        type="ThreeDots"
        color="#ff4d4f"
        height={100}
        width={100}
        timeout={4000} //3 secs
      />
      </div>
    )
}

export default Loader;

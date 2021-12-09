import React, { useState, useEffect } from 'react';

import Loader from '../loader/loader';

const withSpinner = (WrappedComponent) => {

    
    const WithSpinnerComponent = ({  ...otherProps}) => {
        const [isLoading, setLoading] = useState(true)

        useEffect(() => {
            setTimeout(() => {
                setLoading(false)  
            }, 2000);
        })

        return  isLoading ? <Loader /> : <WrappedComponent {...otherProps} /> 
    }

    return WithSpinnerComponent;
}

export default withSpinner

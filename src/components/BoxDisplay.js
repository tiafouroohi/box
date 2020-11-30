import React, {useState} from 'react';
import StyledBox from './StyledBox';

const BoxDisplay = (props) => {
        const {color} = props;
        return(
                <>
                <StyledBox bgColor={color} />  
                </>
        )   
};

export default BoxDisplay;

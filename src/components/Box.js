import React, {useState} from 'react';


const Box = (props) => {
    const {box, submitHandler, changeHandler} = props;
    let {color} = box;
    return (
        <>
        <form onSubmit = {submitHandler} >
            <label>Color:</label>
            <input type = "text" name="color" onChange={changeHandler} value={color}/>
            <input type = "submit" value="Create a Box!" />
        </form> 
        </>
    );
};

export default Box;

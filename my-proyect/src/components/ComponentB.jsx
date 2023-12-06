import React from "react";

const ComponentB = ({ textBtn, onClick }) => {
    
    return (
        <>
            <button onClick={onClick} >{textBtn}</button>
        </>
    );
};



export default ComponentB;


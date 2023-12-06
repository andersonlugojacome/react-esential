import React from 'react';
import ComponentC from './ComponentC';

const ComponentA = ({ emoji, title }) => {

    return (
        <>

            <ComponentC emoji={emoji} />
            <p>{title}</p>
        </>
    );
};

export default ComponentA;
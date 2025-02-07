import React from 'react'
import "../app/Styles/heading.css";

interface propsType {
    title: string;
}

const Heading: React.FC<propsType>  = ({title}) => {
  return (
    <div className='heading-container'>
        <p className='heading-title'>{title}</p>
      
    </div>
  );
};

export default Heading;

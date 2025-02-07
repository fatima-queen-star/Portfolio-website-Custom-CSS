import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import '../app/Styles/card.css';

// interface propsType {
//     title: string;
//     desc: string;
//     img: string;
//     tags: string[];
// }

// const Card:React.FC<propsType> = ({ title, desc, img, tags }) => {
//   return (
//     <div className={`card ${window.innerWidth >= 640 ? 'card-sm' : ''}`} data-aos = "zoom-in-up">
//         <div>
//             <Image 
//             className={`card-image ${window.innerWidth >= 640 ? 'card-image-sm' : ''}`}
//             src={img}
//             width={350}
//             height={350}
//             alt={title}
//             />
//         </div>

//         <div className='card-content'>
//             <div className='card-title'>{title}</div>
//             <div>{desc}</div>
//             <div>
//                 {tags.map((el) => (
//                     <div className='card-tags' key={el}>
//                         {el}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
//   );
// };
// export default Card;

type PropsType = {
  title: string;
  desc: string;
  img: string;
  tags: string[];
};

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Set the initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`card ${isSmallScreen ? 'card-sm' : ''}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${isSmallScreen ? 'card-image-sm' : ''}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className='card-tags' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
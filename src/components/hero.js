"use client"

// import { CgSearchLoading } from "react-icons/cg";
// import Modalbutton from "./modalbutton";

// function Hero() {
//   return (
//     <div
//       style={{
//         backgroundImage: "url('../hero.jpeg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: 402,
//         width: 'auto',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: 'white',
//         fontSize: '1.5rem',
//         marginTop: '0px',
//         paddingTop: '60px',
//         marginLeft: '25px',
//         marginRight: '25px',
//       }}
//     >
//       {/* Content */}
//       {/* <div style={{ backgroundColor: '#0EC3EB', borderRadius: '15px', padding: '0.5rem', width: '100%', maxWidth: '200px', textAlign: 'center', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <div>
//           <CgSearchLoading style={{ fontSize: '30px' }} />
//         </div>
//         <div style={{ marginRight: '20px' }}>Destination</div>
//       </div> */}
//       <div style={{marginBottom:"80px"}}>
//       <Modalbutton />
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React, { useEffect, useState } from 'react';
import { CgSearchLoading } from "react-icons/cg";
import Modalbutton from "./modalbutton";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on initial render and set state
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener to check screen size on window resize
    window.addEventListener('resize', checkScreenSize);

    // Check screen size initially
    checkScreenSize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const heroStyle = {
    backgroundImage: "url('../hero.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 402,
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.5rem',
    marginTop: '0px',
    paddingTop: '60px',
    marginLeft: isMobile ? '0px' : '25px',
    marginRight: isMobile ? '0px' : '25px',
  };

  return (
    <div style={heroStyle}>
      {/* Content */}
      <div style={{ marginBottom: "80px" }}>
        <Modalbutton />
      </div>
    </div>
  );
}

export default Hero;



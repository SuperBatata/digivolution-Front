

import React from 'react';
import CountUp from 'react-countup';

function AnimatedNumber() {
  return (

    <div className='container-num'>

    <div className='item-num'>
        <h5>Clients Growth</h5>
      <CountUp start={0} end={260} duration={5.5} separator="," /><span>%</span>
    </div>

    <div className='item-num'>
        <h5>Views</h5>
      <CountUp start={0} end={4} duration={9.5} separator="," /><span>M</span>
    </div>

    <div className='item-num'>
        <h5>Projects</h5>
      <CountUp start={0} end={10} duration={7.5} separator="," /><span>+</span>
    </div>

    <div className='item-num'>
        <h5>Countries</h5>
      <CountUp start={0} end={3} duration={9.5} separator="," />
    </div>

    <div className='item-num' >
        <h5>Impressions</h5>
      <CountUp start={0} end={1000} duration={5.5} separator=""/><span>K</span>
    </div>

    </div>
  );
}

export default AnimatedNumber;


// import React, { useState, useEffect, useRef } from 'react';
// import CountUp from 'react-countup';

// function AnimatedNumbers() {
//   const [isAnimated, setIsAnimated] = useState(false);
//   const numberRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsAnimated(true);
//         }
//       },
//       { threshold: 0.5 } // Adjust the threshold as needed
//     );

//     if (numberRef.current) {
//       observer.observe(numberRef.current);
//     }

//     return () => {
//       if (numberRef.current) {
//         observer.unobserve(numberRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <h3>k</h3>
//       <div ref={numberRef}>
//         {isAnimated && (
//           <CountUp
//             start={0}
//             end={10}
//             duration={2.5}
//             separator=","
//             formattingFn={(value) => `${value}k`}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default AnimatedNumbers;




// // import React, { useState, useEffect, useRef } from 'react';
// // import CountUp from 'react-countup';

// // function AnimatedNumbers() {
// //   const [isAnimated, setIsAnimated] = useState(false);
// //   const numberRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsAnimated(true);
// //         }
// //       },
// //       { threshold: 0.5 } // Adjust the threshold as needed
// //     );

// //     if (numberRef.current) {
// //       observer.observe(numberRef.current);
// //     }

// //     return () => {
// //       if (numberRef.current) {
// //         observer.unobserve(numberRef.current);
// //       }
// //     };
// //   }, []);

// //   const formatNumber = (num) => {
// //     if (num >= 1000000) {
// //       return (num / 1000000).toFixed(1) + 'M';
// //     } else if (num >= 1000) {
// //       return (num / 1000).toFixed(1) + 'k';
// //     } else {
// //       return num.toString();
// //     }
// //   };

// //   return (
// //     <>
// //     <div ref={numberRef}>
// //       <h3>k</h3>
// //       {isAnimated && (
// //         <CountUp
// //           start={0}
// //           end={100000}
// //           duration={2.5}
// //           separator=","
// //           formattingFn={formatNumber}
// //         />
// //       )}
// //     </div>
    
// //     <div ref={numberRef}>
// //       <h3>k</h3>
// //       {isAnimated && (
// //         <CountUp
// //           start={0}
// //           end={100000}
// //           duration={2.5}
// //           separator=","
// //           formattingFn={formatNumber}
// //         />
// //       )}
// //     </div>
    
// //     </>
// //   );
// // }

// // export default AnimatedNumbers;

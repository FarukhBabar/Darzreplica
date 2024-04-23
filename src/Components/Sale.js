// import React, { useState, useEffect } from 'react';

// const Sale = ({ endTime }) => {
//   const calculateTimeLeft = () => {
//     const difference = endTime - new Date().getTime();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timerComponents.push(
//       <span key={interval}>
//         {timeLeft[interval]} {interval}{' '}
//       </span>
//     );
//   });

//   return (
//     <div>
//       {timerComponents.length ? (
//         timerComponents
//       ) : (
//         <span>Flash Sale Ended!</span>
//       )}
//     </div>
//   );
// };

// export default Sale;


import React, { useState, useEffect } from 'react';
import "./full.css"

const Sale = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = endTime - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const timeString = `${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`;

  return (
    <div>
      {Object.keys(timeLeft).length ? (
        <span className='timer'>{timeString}</span>
      ) : (
        <span className='text-white'>Flash Sale Ended!</span>
      )}
    </div>
  );
};

export default Sale;

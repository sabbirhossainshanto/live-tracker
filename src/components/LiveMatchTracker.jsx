// import { IoMdFootball } from "react-icons/io";
// import assets from "../../../../assets";
// import { useEffect, useRef, useState } from "react";

// const LiveMatchTracker = () => {
//   const [coordinates, setCoordinates] = useState({ x: 50, y: 60 });
//   const [previousCoordinates, setPreviousCoordinates] = useState({
//     x: 50,
//     y: 60,
//   });
//   const canvasRef = useRef(null);

//   // Generate random coordinates
//   const generateRandomCoordinates = () => ({
//     x: Math.floor(Math.random() * 101),
//     y: Math.floor(Math.random() * 101),
//   });

//   // Update coordinates randomly every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPreviousCoordinates({ ...coordinates });
//       setCoordinates(generateRandomCoordinates());
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [coordinates]);

//   // Animate line along with the ball
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (canvas) {
//       const ctx = canvas.getContext("2d");

//       const canvasWidth = canvas.width;
//       const canvasHeight = canvas.height;

//       const startX = (previousCoordinates.x / 100) * canvasWidth;
//       const startY = (previousCoordinates.y / 100) * canvasHeight;
//       const endX = (coordinates.x / 100) * canvasWidth;
//       const endY = (coordinates.y / 100) * canvasHeight;

//       // Animation variables
//       const animationDuration = 500; // in ms
//       const frameRate = 60; // frames per second
//       const totalFrames = (animationDuration / 1000) * frameRate;
//       let frame = 0;

//       const animateLine = () => {
//         if (frame <= totalFrames) {
//           const progress = frame / totalFrames;
//           const currentX = startX + (endX - startX) * progress;
//           const currentY = startY + (endY - startY) * progress;

//           // Draw progressive line
//           ctx.beginPath();
//           ctx.moveTo(startX, startY);
//           ctx.lineTo(currentX, currentY);
//           ctx.strokeStyle = "#b4c390";
//           ctx.lineWidth = 2;
//           ctx.stroke();

//           frame++;
//           requestAnimationFrame(animateLine);
//         }
//       };

//       animateLine();
//     }
//   }, [coordinates, previousCoordinates]);

//   return (
//     <div style={{ position: "relative", width: "100%", height: "300px" }}>
//       {/* Football field image */}
//       <img
//         src={assets.matchField} // Replace with your football field image
//         alt="Football Field"
//         style={{ width: "100%", height: "100%", display: "block" }}
//       />
//       <canvas
//         ref={canvasRef}
//         width={500}
//         height={300}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           pointerEvents: "none",
//         }}
//       />
//       {/* Ball Icon */}
//       <IoMdFootball
//         style={{
//           position: "absolute",
//           top: `${coordinates.y}%`,
//           left: `${coordinates.x}%`,
//           transform: "translate(-50%, -50%)",
//           color: "white",
//           fontSize: "24px",
//           transition: "top 0.5s linear, left 0.5s linear",
//         }}
//       />
//     </div>
//   );
// };

// export default LiveMatchTracker;

import { IoMdFootball } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const LiveMatchTracker = () => {
  const [coordinates, setCoordinates] = useState({ x: 50, y: 0 });
  const [previousCoordinates, setPreviousCoordinates] = useState({
    x: 50,
    y: 60,
  });
  const canvasRef = useRef(null);

  // Generate random coordinates
  const generateRandomCoordinates = () => ({
    x: Math.floor(Math.random() * 101),
    y: Math.floor(Math.random() * 101),
  });

  // Update coordinates randomly every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousCoordinates({ ...coordinates });
      setCoordinates(generateRandomCoordinates());
    }, 2000);

    return () => clearInterval(interval);
  }, [coordinates]);

  // Animate line along with the ball
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      const canvasWidth = canvas.width - 15; // Account for 5px padding on both sides
      const canvasHeight = canvas.height - 15; // Account for 5px padding on both sides

      const startX = (previousCoordinates.x / 100) * canvasWidth + 5; // Add padding offset
      const startY = (previousCoordinates.y / 100) * canvasHeight + 5; // Add padding offset
      const endX = (coordinates.x / 100) * canvasWidth + 5; // Add padding offset
      const endY = (coordinates.y / 100) * canvasHeight + 5; // Add padding offset

      // Animation variables
      const animationDuration = 500; // in ms
      const frameRate = 60; // frames per second
      const totalFrames = (animationDuration / 1000) * frameRate;
      let frame = 0;

      const animateLine = () => {
        if (frame <= totalFrames) {
          const progress = frame / totalFrames;
          const currentX = startX + (endX - startX) * progress;
          const currentY = startY + (endY - startY) * progress;

          // Draw progressive line
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(currentX, currentY);
          ctx.strokeStyle = "#b4c390";
          ctx.lineWidth = 2;
          ctx.stroke();

          frame++;
          requestAnimationFrame(animateLine);
        }
      };

      animateLine();
    }
  }, [coordinates, previousCoordinates]);

  return (
    <div style={{ position: "relative", width: "800px", height: "300px" }}>
      {/* Football field image */}
      <img
        src={"/src/assets/liveMatchField.jpg"} // Replace with your football field image
        alt="Football Field"
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      <canvas
        ref={canvasRef}
        width={500}
        height={300}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
      {/* Ball Icon */}
      <IoMdFootball
        style={{
          position: "absolute",
          top: `calc(${coordinates.y}% - 5px)`, // Adjust for top padding
          left: `calc(${coordinates.x}% - 5px)`, // Adjust for left padding
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "24px",
          transition: "top 0.5s linear, left 0.5s linear",
        }}
      />
    </div>
  );
};

export default LiveMatchTracker;

import Image from "next/image";
import React from "react";
import MotionBox from "./motion/Box";

const SomeImage = () => {
  return (
    <>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[280, 400]}
        marginX="auto"
      >
        <Image
          src="/Launching-amico.svg"
          width={400}
          height={400}
          alt="Launching Illustration"
        />
      </MotionBox>
    </>
  );
};

export default SomeImage;

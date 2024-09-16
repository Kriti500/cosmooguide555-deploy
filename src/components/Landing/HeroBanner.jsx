import Image from "next/image";
import React from "react";

function HeroBanner() {
  return (
    <div className="h-[500px] relative bg-cover">
      <div className="absolute top-0 right-0 w-[100vw] h-full transition-opacity z-0">
        <Image
          alt="hero"
          src="/banner9.png"
          fill
          
        />
        
      </div>
     
    </div>
  );
}

export default HeroBanner;

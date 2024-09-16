
import Everything from "../components/Landing/Everything";
import HeroBanner from "../components/Landing/HeroBanner";
import CarrierExpert from "../components/Landing/CarrierExpert";
//import CardComponent from '../components/Landing/CardComponent';
import React from "react";
import Health from "@/components/Landing/Health";
import Astrologers from "@/components/Landing/Astrologers";

function Index() {

  return (
    <div>
      <HeroBanner />
      <CarrierExpert />
      <Health/>
      <Astrologers/>
      <Everything />
    </div>
  );
}

export default Index;
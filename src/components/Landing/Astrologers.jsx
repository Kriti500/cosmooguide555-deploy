import Image from "next/image";
//import { useRouter } from "next/router";
import {React,useState} from "react";

function Astrologers() {
 // State for active popup


  return (
    <div className="mx-10 my-10">
    <h2 className="text-4xl mb-5 text-[#404145] font-bold mx-8 font-mono">
     Astrologers
    </h2>
    <div className="bg-[#f5f2db] my-10 mx-8 rounded-lg">
   <div className="card">
    <img className="card-image-top" src="/deepak mama ji.jpg"alt="Rishi"></img>
    <h2 className="card-title font-bold ">Pt.Deepak Diwan | Consultation Charges Rs. 550</h2>
    <p className="card-text font-semibold">  </p>
    <p className="card-text ">Having an experience of 10+ years in vedic astrology .He is an expert in providing easy and affordable remedies
      
       </p>
    <div>
    <button class="bg-[#f5f2db] text-black px-4 py-2 rounded hover:bg-[#f8f0b6] transition-colors duration-300">
  <a href="https://forms.gle/9cBo2eZzKo5NgVQq8">Book A Slot</a>
</button>

    </div>
    </div>
    <div className="card">
    <img className="card-image-top" src="/shalini mishra 2.jpg"alt="Rishi"></img>
    <h2 className="card-title font-bold ">Shalini Mishra | Consultation charges - Rs. 2200</h2>
    <p className="card-text font-semibold"></p>
    <p className="card-text ">
      
      Civil engg turned astrologer who has over 10 years of experinece in Astrology ,Vastu,Numerology, Reiki Healing and Tarot card healing.Shalini has served inmureable clients and her expertise lies in Career guidance. Do consult her to get the rigth direction in your life. </p>
    <div>
    <button class="bg-[#f5f2db] text-black px-4 py-2 rounded hover:bg-[#f8f0b6] transition-colors duration-300">
  <a href="https://forms.gle/nRSHxJAPma3GXc7u8">Book A Slot</a>
</button>

    </div>
   </div>
   <div className="card">
    <img className="card-image-top" src="/shweta agrawal.jpg"alt="Rishi"></img>
    <h2 className="card-title font-bold ">Shweta Argrawal| Consultation Charges - Rs 1100 </h2>
    <p className="card-text font-semibold"></p>
    <p className="card-text ">Being a mechanical engg. Shweta knows the power of numbers .
After pursuing Numerology She started using the energy of those numbers to influence one's life towards positivity .
Do consult her to get remedial solution for your career,financial ,health and relationship issues .
( Remedies are beyond religion  )
</p>
    <div>
    <button class="bg-[#f5f2db] text-black px-4 py-2 rounded hover:bg-[#f8f0b6] transition-colors duration-300">
  <a href="https://forms.gle/NumVLGFG6n2jo4gQ8">Book A Slot</a>
</button>

    </div>

    </div>
   <div className="card">
    <img className="card-image-top" src="/anurag pandit.jpeg"alt="Rishi"></img>
    <h2 className="card-title font-bold ">Astro Anurag Dwivedi| Consultation Charges - Rs 2200 </h2>
    <p className="card-text font-semibold"></p>
    <p className="card-text ">He has been providing remedies to every problem related to career , marriage and relationships
</p>
    <div>
    <button class="bg-[#f5f2db] text-black px-4 py-2 rounded hover:bg-[#f8f0b6] transition-colors duration-300">
  <a href="https://forms.gle/zF54Se9eNvPyoEDD7">Book A Slot</a>
</button>

    </div>
   


   
    
 

   
   </div>
   
   </div>
  </div>
  );
}

export default Astrologers;
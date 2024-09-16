import Image from "next/image";
import { React } from "react";
import Link from "next/link";
function Health() {
  const handleContactClick = () => {
    window.location.href = 'https://www.google.com'; // Redirect to Contact Us
  };
  return (
    <div className="mx-10 my-10">
    <h2 className="text-4xl mb-5 text-[#404145] font-bold mx-8 font-mono">
     Health & Fitness Experts
    </h2>
    <div className="bg-[#f5f2db] my-10 mx-8 rounded-lg">
   <div className="card">
    <img className="card-image-top" src="/Foram Modi.jpg"alt="Rishi"></img>
    <h2 className="card-title font-bold ">Foram Modi</h2>
    <p className="card-text font-semibold">Dietician , Nutritionist& PCOD reversal specialist</p>
    <p className="card-text ">Having 13+ years of experience in making people fit and healthy by providing personalised diet plan.She has served 5000+ clients and most of them are working women.Do consult her to perfectly begin your fitness journey. </p>
    <div>
    <button class="bg-[#f5f2db] text-black px-4 py-2 rounded hover:bg-[#f8f0b6] transition-colors duration-300">
  <a href="https://forms.gle/auRfb1fZ8nNMaiTf8">Book A Slot</a>
</button>

    </div>
   </div>
   <div className="card">
    <img className="card-image-top" src="/vidhi rana 2.jpg"alt="Rishi"></img>
    <h2 className="card-title font-bold ">Vidhi Rana</h2>
    <p className="card-text font-semibold">Certified CBT Therapist|Consultation Charges - Rs.1100</p>
    <p className="card-text ">A UK based engineer turned Counselling Psychologist . 
Do consult her with you are facing stress, anxiety, childhood trauma and relationship issues.</p>
    <div>
    <button class="bg-[#f5f2db] text-black px-4 py-2 rounded hover:bg-[#f8f0b6] transition-colors duration-300">
  <a href="https://forms.gle/5QH3FXNSFiiLP7GX7">Book A Slot</a>
</button>

    </div>
   </div>
   <div className="card">
    <img className="card-image-top" src="/ayushi koushal health.jpg"alt="Rishi"></img>
    <h2 className="card-title font-bold ">Ayushi Koushal</h2>
    <p className="card-text font-semibold">Certified Fashion Stylist & Image Consultant|Consultation Charges - Rs.1100</p>
    <p className="card-text ">A certified fashion consultant with a flair for working alongside 
top stylists and styling over 50 clients. 
Services offered:
1. Body Shape , Face Shape & Undertone Analysis
2. Event-Specific Looks
3. Wardrobe Analysis
4. Color Consulting
5. Personal Styling</p>
    <div>
    <button class="bg-[#f5f2db] text-black px-4 py-2 rounded hover:bg-[#f8f0b6] transition-colors duration-300">
  <a href="https://forms.gle/CJWfs7Wq9E5J4CG49">Book A Slot</a>
</button>
    </div>
    </div>
   <div className="card">
    <img className="card-image-top" src="/Kanchan yoga.jpg"alt="Rishi"></img>
    <h2 className="card-title font-bold ">Dr.Kanchan Choudhary</h2>
    <p className="card-text font-semibold">Naturopathy and Yoga Physician|Consultation Charges - Rs.550</p>
    <p className="card-text ">Kanchan is having an experience of over 5 years in providing yoga consultation</p>
    <div>
    <button class="bg-[#f5f2db] text-black px-4 py-2 rounded hover:bg-[#f8f0b6] transition-colors duration-300">
  <a href="your_desired_link">Book A Slot</a>
</button>

  
    

    </div>
   </div>
   
   </div>
  </div>
  );
}

export default Health;
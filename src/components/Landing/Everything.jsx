import React, { useState } from "react";

function Everything() {
  const questions = [
    {
      question: "What services does Cosmooguide offer?",
      answer: "Cosmooguide is an online consultation platform .It provides services like career counselling , personalised diet chart , yoga/exercise plan , remedies for mental well-being,astrology consultation etc. "
    },
    {
      question: "How can I book a session ?",
      answer: "You can book a session with a  counselor/expert by clicking on Book a slot button and  selecting a convenient time slot and filling in the necessary details.Else You can book a Report from Cosmooguide which provides a holistic solution to your problem by combining the advice from an Astrologer and an Expert"
    },
    {
      question: "What makes Cosmooguide different from other counseling services?",
      answer: "Cosmooguide is a unique platform where you can find solution to your problem either by an expert , an astrologer or a combination of both."
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    
    <div
      className="bg-[#f7f5de] rounded-lg overflow-hidden flex flex-col py-10 md:py-20 justify-between items-center gap-8 md:gap-12 px-6 md:px-24"
      style={{ maxWidth: "1200px", margin: "30px auto" }}
    >
      <div className="w-full">
        <ul className="flex flex-col gap-6 md:gap-10">
          {questions.map(({ question, answer }, index) => (
            <li key={index}>
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
                <p className="text-black text-lg md:text-2xl font-semibold">{question}</p>
                <span className="text-black text-lg md:text-2xl font-semibold">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && <p className="text-black text-lg md:text-xl mt-2">{answer}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Everything;



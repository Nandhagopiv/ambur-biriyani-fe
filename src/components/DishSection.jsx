import React, { useState, useEffect } from 'react';
import splCB from '../Assets/Images/Spl Chicken Biriyani Poster.webp';
import MB from '../Assets/Images/Mutton biriyani poster.png';
import Nijam from '../Assets/Images/nizam chicken.png';
import leg from '../Assets/Images/leg poster.png';
import next from '../Assets/Images/right-chevron.png';
import back from '../Assets/Images/left-chevron.png';

const dishes = [
  {
    title: "SPL CHICKEN BIRIYANI",
    description: "SPL Chicken Biryani is a fragrant, flavorful dish made with marinated chicken, basmati rice, and a blend of aromatic spices. ",
    imgSrc: splCB
  },
  {
    title: "CHICKEN LEG",
    description: "Chicken Leg is a simple yet flavorful dish where the chicken legs are marinated with a special blend of spices, then roasted or grilled to perfection. ",
    imgSrc: leg
  },
  {
    title: "MUTTON BIRIYANI",
    description: "Mutton Biryani is a traditional and rich dish made with tender marinated mutton, basmati rice, and a blend of spices.",
    imgSrc: MB
  },
  {
    title: "NIZAM CHICKEN",
    description: "Nizam Chicken is a royal dish from Hyderabad, made with marinated chicken cooked in a flavorful and aromatic gravy.",
    imgSrc: Nijam
  }
];

const DishSection = () => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  
  // Automatically scroll every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const scrollContainer = document.querySelector('.scroll-container');
      const scrollAmount = scrollContainer.clientWidth; // Scroll by the full width of the container (same as the width of one item)
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }, 5000); // 3000ms = 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const scroll = (direction) => {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollAmount = scrollContainer.clientWidth; // Scroll by the full width of the container
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      const scrollAmount = scrollContainer.scrollLeft;
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // Check if the scroller is at the start (first item)
      setIsAtStart(scrollAmount === 0);

      // Check if the scroller is at the end (last item)
      // Allow for a small margin (50px or so) in case of slight scroll differences
      setIsAtEnd(scrollAmount + 50 >= maxScrollLeft);
    };

    const scrollContainer = document.querySelector('.scroll-container');
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="w-full lg:py-20 flex overflow-x-auto scrollbar bg-[#0E1317] scroll-container">
      {/* Prev Button */}
      {!isAtStart && (
        <button
          onClick={() => scroll(-1)}
          className="absolute hidden lg:block left-[3%] top-[50%] transform -translate-y-1/2 px-4 py-2 hover:opacity-100 opacity-25 text-white rounded-lg"
        >
          <img className="w-10" src={back} alt="prev" />
        </button>
      )}

      {/* Dish Items */}
      {dishes.map((dish, index) => (
        <div key={index} className="flex justify-center lg:justify-between shrink-0 w-full md:px-24 font-bold">
          <div className="w-[50%] md:w-2/5 flex p-5 lg:p-10 flex-col gap-5 lg:gap-10">
            <h2 className="text-3xl md:text-5xl">{dish.title}</h2>
            <p className="text-xs md:text-base">{dish.description}</p>
            <button className="lg:px-8 lg:py-3 px-5 py-2 text-sm lg:text-xl rounded-sm bg-[#E13750] w-fit">VIEW MENU</button>
          </div>
          <div className="w-[50%] md:w-3/5 flex items-center justify-center">
            <img className="w-[300px] md:w-[450px]" src={dish.imgSrc} alt={dish.title} />
          </div>
        </div>
      ))}

      {/* Next Button */}
      {!isAtEnd && (
        <button
          onClick={() => scroll(1)}
          className="absolute hidden lg:block right-[3%] top-[50%] transform -translate-y-1/2 px-4 py-2 hover:opacity-100 opacity-25 text-white rounded-lg"
        >
          <img className="w-10" src={next} alt="next" />
        </button>
      )}
    </section>
  );
};

export default DishSection;

import React, { useEffect, useState } from 'react';
import poster1 from '../Assets/Images/poster (1).png';
import poster2 from '../Assets/Images/poster (2).png';

const catalog = [
  {
    imgSrc: poster1
  },
  {
    imgSrc: poster2
  }
];

const Slider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollAmount = scrollContainer.clientWidth;

    if (direction === 'next') {
      setScrollPosition(scrollPosition + scrollAmount);
      scrollContainer.scrollTo({
        left: scrollPosition + scrollAmount,
        behavior: 'smooth'
      });
    } else {
      setScrollPosition(scrollPosition - scrollAmount);
      scrollContainer.scrollTo({
        left: scrollPosition - scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const scrollContainer = document.querySelector('.scroll-container');
      const scrollAmount = scrollContainer.clientWidth; 
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft + scrollAmount >= maxScrollLeft) {
        scrollContainer.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + scrollAmount,
          behavior: 'smooth'
        });
      }
    }, 5000)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className='relative'>
      <button
        onClick={() => scroll('prev')}
        className="absolute left-5 md:block hidden top-[50%] transform -translate-y-1/2 px-4 py-2 bg-black text-white opacity-50 hover:opacity-100 rounded-full"
      >
        &#60;
      </button>
      <section className="w-full flex overflow-x-auto scrollbar bg-[#DBDBDB] scroll-container">
        
        {catalog.map((item, index) => (
          <div key={index} className="flex justify-center shrink-0 w-full md:w-[100%] font-bold">
            <div className="flex items-center justify-center">
              <img className="w-[100vw] object-cover" src={item.imgSrc} alt={`Catalog Item ${index + 1}`} />
            </div>
          </div>
        ))}

      </section>
      <button
        onClick={() => scroll('next')}
        className="absolute right-5 md:block hidden top-[50%] transform -translate-y-1/2 px-4 py-2 bg-black text-white opacity-50 hover:opacity-100 rounded-full"
      >
        &#62;
      </button>
    </main>
  );
};

export default Slider;

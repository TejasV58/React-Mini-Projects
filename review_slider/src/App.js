import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (activeSlide < 0) {
      setActiveSlide(lastIndex);
    }
    if (activeSlide > data.length - 1) {
      setActiveSlide(0);
    }
  }, [activeSlide]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide(activeSlide + 1);
    }, 3000);
    return () => {
      clearInterval(slideInterval);
    }
  },[activeSlide])

  return (
    <>
      <div className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="section-center">
          {data.map((slide,slideIndex) => {
            let slideclass = "nextSlide";
            if (slideIndex === activeSlide)
              slideclass = "activeSlide";
            if (slideIndex === activeSlide-1 || (activeSlide===0 && slideIndex===data.length-1))
              slideclass = "lastSlide";
              return (
                <Slides
                  slideclass={slideclass}
                  slideData={slide}
                  setActiveSlide={setActiveSlide}
                  activeSlide={activeSlide}
                />
              );
          })}
          <button
            className="prev"
            type="button"
            onClick={() => setActiveSlide(activeSlide - 1)}
          >
            <FiChevronLeft />
          </button>

          <button
            className="next"
            onClick={() => setActiveSlide(activeSlide + 1)}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}


const Slides = (props) => {
  const { id, image, name, title, quote } = props.slideData;
  return (
      <article className={props.slideclass}>
        <img className="person-img" src={image} alt="" />
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <div className="icon">
          <FaQuoteRight />
        </div>
      </article>
  );};

export default App;

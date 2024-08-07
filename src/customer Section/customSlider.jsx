
import styles from './Customer.module.css'
import React, { useState, useEffect } from 'react';

const CustomSlide = ({ reviews }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((currentSlide) => {
          if (currentSlide === reviews.length - 1) {
            return 0;
          }
          return currentSlide + 1;
        });
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [reviews]);



  useEffect(() => {
    // Optional: Check for missing styles
    if (!styles.slide || !styles.slide_hidden) {
      console.warn('Missing CSS styles for slide classes');
    }
  }, []);

  return (
    <div className={styles.reviews}>
      <div className={styles.rev_container}>
        {reviews.map((comment, idx) => (
          <div
            id={styles.review}
            key={idx}
            className={`${currentSlide === idx ? styles.slide : styles.slide_hidden}`} // Conditional rendering
          >
            <div className={styles.Review_head}>
              <h2>{comment.author}</h2>
              <p>{comment.website}</p>
            </div>
            <div className={styles.Review_body}>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {reviews.map((_, idx) => {
          return (
            <div
              key={idx}
              onClick={()=> setCurrentSlide(idx)}
              className={currentSlide === idx ? `${styles.indicatror}`: `${styles.indicatror_inactive}`}
            ></div>
          )
        })}
      </div>
    </div>
  );
};

export default CustomSlide;
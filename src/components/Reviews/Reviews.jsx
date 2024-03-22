import React from 'react';
import css from './Reviews.module.css';
import reviews from '../../data/reviews.json';
import { ReactComponent as Location } from '../../images/icons/locationPointer.svg';

export const Reviews = () => {
  return (
    <div className="container">
      <section className={css.reviewsSection}>
        <h2 className={css.reviewTitle}>Відгуки</h2>
        <ul className={css.list}>
          {reviews.map(review => {
            return (
              <>
                <li key={review.id} className={css.reviewItem}>
                  <div className={css.avatar}></div>
                  <div className={css.infoUser}>
                    <p>{review.name}</p>
                    <div style={{ display: 'flex' }}>
                      <Location />
                      <p>{review.location}</p>
                    </div>
                  </div>
                  <p className={css.reviewText}>{review.review}</p>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

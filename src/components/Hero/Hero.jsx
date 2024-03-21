import React from 'react';
import css from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={css.heroSection}>
      <div className="container">
        <h1 className={css.heroTitle}>
          Мегаполіс -
          <span className={css.heroSpan}>
            <br />
            твій комфорт у великому місті
          </span>
        </h1>
        <button type="button" className={css.heroButton}>
          Забронювати
        </button>
      </div>
    </section>
  );
};

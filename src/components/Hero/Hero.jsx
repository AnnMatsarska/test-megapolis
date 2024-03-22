import React from 'react';
import css from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={css.heroSection}>
      <div className="container">
        <h1 className={css.heroTitle}>
          <span className={css.heroSpan}>Мегаполіс -</span>
          <br />
          твій комфорт у великому місті
        </h1>
        <button type="button" className={css.heroButton}>
          Забронювати
        </button>
      </div>
    </section>
  );
};

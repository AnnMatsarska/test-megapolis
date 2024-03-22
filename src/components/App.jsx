// import React from 'react';

import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Options } from '../components/Options/Options';
import { Description } from '../components/Description/Description';
import { Reviews } from '../components/Reviews/Reviews';
import { BookingForm } from '../components/BookingForm/BookingForm';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Options />
      <Description />
      <Reviews />
      <BookingForm />
    </>
  );
};

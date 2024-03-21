import React from 'react';
import { ReactComponent as BurgerMenu } from '../../images/icons/burgerMenu.svg';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <BurgerMenu />
    </header>
  );
};

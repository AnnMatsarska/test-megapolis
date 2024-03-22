import React, { useState } from 'react';
import { ReactComponent as BurgerMenu } from '../../images/icons/burgerMenu.svg';
import { ReactComponent as CloseBurgerMenu } from '../../images/icons/close.svg';
import { ReactComponent as DownArrow } from '../../images/icons/downArrow.svg';
import { ReactComponent as Phone } from '../../images/icons/phoneCall.svg';
import css from './Header.module.css';

import Logo from '../../images/icons/logo.svg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container">
      <header className={css.header}>
        <div className={css.box}>
          <div className={css.logo}>
            <img src={Logo} alt="/" />
          </div>

          <div
            className={menuOpen ? [css.menu, css.active].join(' ') : [css.menu]}
          >
            <img src={Logo} alt="/" className={css.isOpenLogo} />
            <ul className={css.menuList}>
              <li>
                <a href="##">Переваги</a>
              </li>
              <li>
                <a href="##">Адреси хостелів</a>
              </li>
              <li>
                <a href="##">Відгуки</a>
              </li>
              <li>
                <a href="##">UA </a> <DownArrow />
              </li>
            </ul>
            <div className={css.telWrapper}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '5px',
                }}
              >
                <Phone />
                <ul className={css.menuTelList}>
                  <li>
                    <a href="tel:+380638903030">+38 (063) 890 30 30</a>
                  </li>
                  <li>
                    <a href="tel:+380968903030">+38 (096) 890 30 30</a>
                  </li>
                </ul>
              </div>
              <ul className={css.menuTelList}>
                <li>
                  <a href="tel:+38(066)8903030">+38 (066) 890 30 30</a>
                </li>
                <li className={css.recallLink}>
                  <a href="tel:+380968903030">Передзвонити</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div onClick={() => setMenuOpen(!menuOpen)} className={css.mobile_btn}>
          {menuOpen ? <CloseBurgerMenu size={25} /> : <BurgerMenu size={25} />}
        </div>
      </header>
    </div>
  );
};

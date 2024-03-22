import React from 'react';
import css from './Footer.module.css';
import { ReactComponent as DownArrow } from '../../images/icons/whiteArrow.svg';
import { ReactComponent as Phone } from '../../images/icons/phoneCall.svg';

export const Footer = () => {
  return (
    <section className={css.footerSection}>
      <div className="container">
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
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Phone style={{ width: '35px', height: '35px' }} />
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
    </section>
  );
};

import React from 'react';
import css from './Options.module.css';
import { ReactComponent as User } from '../../images/icons/user.svg';
import { ReactComponent as TwoUsers } from '../../images/icons/twoUsers.svg';
import { ReactComponent as ThreeUsers } from '../../images/icons/threeUsers.svg';
import { ReactComponent as FourUsers } from '../../images/icons/fourUsers.svg';
import { ReactComponent as Selected } from '../../images/icons/selected.svg';
import { ReactComponent as NotSelected } from '../../images/icons/notSelected.svg';

export const Options = () => {
  return (
    <section className={css.optionsSection}>
      <h2 className={css.optionsTitle}>Варіанти розміщення</h2>
      <div className={css.typeWrapper}>
        <div className={`container ${css.box}`}>
          <p className={css.typeText}>Тип номеру</p>
          <div className={css.priceWrapper}>
            <p>Вартість за 1 місце</p>
            <ul className={css.priceList}>
              <li>Доба</li>
              <li>Тиждень</li>
              <li>4 Тижні</li>
            </ul>
          </div>
        </div>
      </div>
      <ul className={css.optionList}>
        <li className={css.otionItem}>
          <User className={css.iconUser} style={{ marginRight: '38px' }} />
          <div className={css.wrapper}>
            <button type="button" className={css.orderBtn}>
              Забронювати
            </button>
            <div className={css.orderPriceBox}>
              <p>430</p>
              <p>1500</p>
              <p>4500</p>
            </div>
          </div>
        </li>
        <li className={css.otionItem}>
          <TwoUsers
            className={css.iconTwoUsers}
            style={{ marginRight: '28.8px' }}
          />
          <div className={css.wrapper}>
            <button type="button" className={css.orderBtn}>
              Забронювати
            </button>
            <div className={css.orderPriceBox}>
              <p>390</p>
              <p>1350</p>
              <p>4000</p>
            </div>
          </div>
        </li>
        <li className={css.otionItem}>
          <ThreeUsers
            className={css.iconThreeUsers}
            style={{ marginRight: '18.9px' }}
          />
          <div className={css.wrapper}>
            <button type="button" className={css.orderBtn}>
              Забронювати
            </button>
            <div className={css.orderPriceBox}>
              <p>350</p>
              <p>1200</p>
              <p>3500</p>
            </div>
          </div>
        </li>
        <li className={css.otionItem}>
          <FourUsers
            className={css.iconFourUsers}
            style={{ marginRight: '10.7px' }}
          />
          <div className={css.wrapper}>
            <button type="button" className={css.orderBtn}>
              Забронювати
            </button>
            <div className={css.orderPriceBox}>
              <p>290</p>
              <p>1000</p>
              <p>3000</p>
            </div>
          </div>
        </li>
      </ul>
      <div className={css.moreInfoBox}>
        <h2 className={css.optionsTitle}>Варіанти розміщення</h2>
        <div className={css.typeWrapper}>
          <div className={`container ${css.box}`}>
            <p className={css.typeText}>Тип номеру</p>
            <div className={css.priceWrapper}>
              <p>Вартість за 1 місце</p>
              <ul className={css.priceList}>
                <li>Доба</li>
                <li>Тиждень</li>
                <li>4 Тижні</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={css.usersBar}>
          <div className={css.leftBar}>
            <div className={css.wrap}>
              <Selected />
              <User className={css.iconUser} />
            </div>
            <div className={css.wrap}>
              <NotSelected />
              <TwoUsers className={css.iconTwoUsers} />
            </div>
            <div className={css.wrap}>
              <NotSelected />
              <ThreeUsers className={css.iconThreeUsers} />
            </div>
            <div className={css.wrap}>
              <NotSelected />
              <FourUsers className={css.iconFourUsers} />
            </div>
          </div>
          <div className={css.rightBar}>
            <div className={css.rightbox}>
              <div className={css.orderPriceBox}>
                <p>430</p>
                <p>1500</p>
                <p>4500</p>
              </div>
              <button type="button" className={css.orderBtn}>
                Забронювати
              </button>
            </div>
            <div className={css.imgWpar}>
              <p className={css.imgText}>Зображення номеру</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

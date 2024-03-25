import React, { useState } from 'react';
import css from './Description.module.css';
import hostel from '../../images/hostel.jpg';
import { ReactComponent as Plus } from '../../images/icons/plus.svg';
import { ReactComponent as Minus } from '../../images/icons/minus.svg';

const ToggleItem = ({ isOpen, toggle, children }) => (
  <>
    {children}
    {isOpen ? (
      <Minus onClick={toggle} className={css.plusMinusIcon} />
    ) : (
      <Plus onClick={toggle} className={css.plusMinusIcon} />
    )}
  </>
);

export const ListItem = ({ spec }) => {
  const [isOpen, setIsOpen] = useState({
    address: false,
    price: false,
    description: false,
    nearby: false,
    transport: false,
  });

  const toggleOpen = key => {
    setIsOpen(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <li className={css.item}>
      <div className={css.itemWrapper}>
        <img src={hostel} alt="hostel" style={{ marginBottom: '26px' }} />
        <div style={{ display: 'flex', gap: '15px', marginBottom: '12px' }}>
          <p className={css.new}>NEW</p>
          <p className={css.sale}>Акція</p>
        </div>
        {Object.entries(isOpen).map(([key, value]) => (
          <div key={key} className={css.infoWrpper}>
            <div className={css.box}>
              <p
                className={css.itemText}
                style={{ color: value ? 'green' : 'inherit' }}
                onClick={() => toggleOpen(key)}
              >
                {key === 'address' && 'Адреса'}
                {key === 'price' && 'Ціна'}
                {key === 'description' && 'Опис'}
                {key === 'nearby' && 'Що поруч?'}
                {key === 'transport' && 'Транспорт'}
              </p>
              <ToggleItem isOpen={value} toggle={() => toggleOpen(key)}>
                {null}
              </ToggleItem>
            </div>
            {value && (
              <div className={css.descrptBox}>
                {key !== 'price' ? (
                  <p>
                    {spec[key].split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                ) : (
                  spec[key].map((pr, index) => (
                    <div key={index}>
                      <p>доба: {pr.day}грн.</p>
                      <p>
                        тиждень:{' '}
                        <span className={css.crossPrice}>{pr.week}грн</span>
                        <span className={css.greenPrice}>від 620 грн.</span>
                      </p>
                      <p>
                        4 тижня:{' '}
                        <span className={css.crossPrice}>{pr.month}грн</span>
                        <span className={css.greenPrice}>від 1900 грн.</span>
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={css.endWrapper}>
        <p className={css.mapText}>Показати на мапі</p>
        <button type="button" className={css.orderBtn}>
          Забронювати
        </button>
      </div>
    </li>
  );
};

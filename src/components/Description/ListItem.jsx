import React, { useState } from 'react';
import css from './Description.module.css';
import hostel from '../../images/hostel.jpg';
import { ReactComponent as Plus } from '../../images/icons/plus.svg';
import { ReactComponent as Minus } from '../../images/icons/minus.svg';

export const ListItem = ({ spec }) => {
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenNearby, setIsOpenNearby] = useState(false);
  const [isOpenTransport, setIsOpenTransport] = useState(false);

  const toggleAddress = () => {
    setIsOpenAddress(!isOpenAddress);
  };

  const togglePrice = () => {
    setIsOpenPrice(!isOpenPrice);
  };

  const toggleDescription = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  const toggleNearby = () => {
    setIsOpenNearby(!isOpenNearby);
  };

  const toggleTransport = () => {
    setIsOpenTransport(!isOpenTransport);
  };

  return (
    <li className={css.item}>
      <div className={css.itemWrapper}>
        <img src={hostel} alt="hostel" style={{ marginBottom: '26px' }} />
        <div style={{ display: 'flex', gap: '15px', marginBottom: '12px' }}>
          <p className={css.new}>NEW</p>
          <p className={css.sale}>Акція</p>
        </div>
        <div className={css.infoWrpper}>
          <div className={css.box}>
            <p
              className={css.itemText}
              style={{ color: isOpenAddress ? 'green' : 'inherit' }}
            >
              Адреса
            </p>
            {isOpenAddress ? (
              <Minus onClick={toggleAddress} className={css.plusMinusIcon} />
            ) : (
              <Plus onClick={toggleAddress} className={css.plusMinusIcon} />
            )}
          </div>
          {isOpenAddress && (
            <p className={css.addressBox}>
              {spec.address.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
        <div className={css.infoWrpper}>
          <div className={css.box}>
            <p
              className={css.itemText}
              style={{ color: isOpenPrice ? 'green' : 'inherit' }}
            >
              Ціна
            </p>
            {isOpenPrice ? (
              <Minus onClick={togglePrice} className={css.plusMinusIcon} />
            ) : (
              <Plus onClick={togglePrice} className={css.plusMinusIcon} />
            )}
          </div>
          {isOpenPrice && (
            <div className={css.priceList}>
              {spec.price.map(pr => {
                return (
                  <div key={spec.id}>
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
                );
              })}
            </div>
          )}
        </div>
        <div className={css.infoWrpper}>
          <div className={css.box}>
            <p
              className={css.itemText}
              style={{ color: isOpenDescription ? 'green' : 'inherit' }}
            >
              Опис
            </p>
            {isOpenDescription ? (
              <Minus
                onClick={toggleDescription}
                className={css.plusMinusIcon}
              />
            ) : (
              <Plus onClick={toggleDescription} className={css.plusMinusIcon} />
            )}
          </div>
          {isOpenDescription && (
            <p className={css.descrptBox}>{spec.description}</p>
          )}
        </div>
        <div className={css.infoWrpper}>
          <div className={css.box}>
            <p
              className={css.itemText}
              style={{ color: isOpenNearby ? 'green' : 'inherit' }}
            >
              Що поруч?
            </p>
            {isOpenNearby ? (
              <Minus onClick={toggleNearby} />
            ) : (
              <Plus onClick={toggleNearby} />
            )}
          </div>
          {isOpenNearby && (
            <p className={css.descrptBox}>
              {spec.nearby.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
        <div className={css.infoWrpper}>
          <div className={css.box}>
            <p
              className={css.itemText}
              style={{ color: isOpenTransport ? 'green' : 'inherit' }}
            >
              Транспорт
            </p>
            {isOpenTransport ? (
              <Minus onClick={toggleTransport} className={css.plusMinusIcon} />
            ) : (
              <Plus onClick={toggleTransport} className={css.plusMinusIcon} />
            )}
          </div>
          {isOpenTransport && (
            <p className={css.descrptBox}>
              {spec.transport.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
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

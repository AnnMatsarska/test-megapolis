import React, { useState } from 'react';
import css from './Description.module.css';
import specifications from '../../data/spesifications.json';
import hostel from '../../images/hostel.jpg';
import { ReactComponent as Plus } from '../../images/icons/plus.svg';
import { ReactComponent as Minus } from '../../images/icons/minus.svg';

export const Description = () => {
  const [showInfoAdress, setShowInfoAdress] = useState(false);
  const [showInfoPrice, setShowInfoPrice] = useState(false);
  const [showInfoDesc, setShowInfoDesc] = useState(false);
  const [showInfoNearby, setShowInfoNearby] = useState(false);
  const [showInfoTransport, setShowInfoTransport] = useState(false);

  return (
    <div className="container">
      <section className={css.descSection}>
        <h2 className={css.sectionTitle}>Адреси</h2>
        <ul className={css.list}>
          {specifications.map(spec => (
            <li key={spec.id} className={css.item}>
              <div className={css.itemWrapper}>
                <img
                  src={hostel}
                  alt="hostel"
                  style={{ marginBottom: '26px' }}
                />
                <div
                  style={{ display: 'flex', gap: '15px', marginBottom: '12px' }}
                >
                  <p className={css.new}>NEW</p>
                  <p className={css.sale}>Акція</p>
                </div>
                <div className={css.infoWrpper}>
                  <div className={css.box}>
                    <p
                      className={`${css.itemText} ${
                        showInfoAdress ? css.greenPrice : ''
                      }`}
                    >
                      Адреса
                    </p>
                    {showInfoAdress ? (
                      <Minus
                        className={css.plusMinusIcon}
                        onClick={() => setShowInfoAdress(false)}
                      />
                    ) : (
                      <Plus
                        className={css.plusMinusIcon}
                        onClick={() => setShowInfoAdress(true)}
                      />
                    )}
                  </div>
                  {showInfoAdress && (
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
                      className={`${css.itemText} ${
                        showInfoPrice ? css.greenPrice : ''
                      }`}
                    >
                      Ціна
                    </p>
                    {showInfoPrice ? (
                      <Minus
                        className={css.plusMinusIcon}
                        onClick={() => setShowInfoPrice(false)}
                      />
                    ) : (
                      <Plus
                        className={css.plusMinusIcon}
                        onClick={() => setShowInfoPrice(true)}
                      />
                    )}
                  </div>
                  {showInfoPrice && (
                    <div className={css.priceList}>
                      {spec.price.map(pr => {
                        return (
                          <div key={spec.id}>
                            <p>доба: {pr.day}грн.</p>
                            <p>
                              тиждень:{' '}
                              <span className={css.crossPrice}>
                                {pr.week}грн
                              </span>
                              <span className={css.greenPrice}>
                                від 620 грн.
                              </span>
                            </p>
                            <p>
                              4 тижня:{' '}
                              <span className={css.crossPrice}>
                                {pr.month}грн
                              </span>
                              <span className={css.greenPrice}>
                                від 1900 грн.
                              </span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div className={css.infoWrpper}>
                    <div className={css.box}>
                      <p
                        className={`${css.itemText} ${
                          showInfoDesc ? css.greenPrice : ''
                        }`}
                      >
                        Опис
                      </p>
                      {showInfoDesc ? (
                        <Minus
                          className={css.plusMinusIcon}
                          onClick={() => setShowInfoDesc(false)}
                        />
                      ) : (
                        <Plus
                          className={css.plusMinusIcon}
                          onClick={() => setShowInfoDesc(true)}
                        />
                      )}
                    </div>
                    {showInfoDesc && (
                      <p className={css.descrptBox}>{spec.description}</p>
                    )}
                  </div>
                  <div className={css.infoWrpper}>
                    <div className={css.box}>
                      <p
                        className={`${css.itemText} ${
                          showInfoNearby ? css.greenPrice : ''
                        }`}
                      >
                        Що поруч?
                      </p>
                      {showInfoNearby ? (
                        <Minus
                          className={css.plusMinusIcon}
                          onClick={() => setShowInfoNearby(false)}
                        />
                      ) : (
                        <Plus
                          className={css.plusMinusIcon}
                          onClick={() => setShowInfoNearby(true)}
                        />
                      )}
                    </div>
                    {showInfoNearby && (
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
                        className={`${css.itemText} ${
                          showInfoTransport ? css.greenPrice : ''
                        }`}
                      >
                        Транспорт
                      </p>
                      {showInfoTransport ? (
                        <Minus
                          className={css.plusMinusIcon}
                          onClick={() => setShowInfoTransport(false)}
                        />
                      ) : (
                        <Plus
                          className={css.plusMinusIcon}
                          onClick={() => setShowInfoTransport(true)}
                        />
                      )}
                    </div>
                    {showInfoTransport && (
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
              </div>
              <div className={css.endWrapper}>
                <p className={css.mapText}>Показати на мапі</p>
                <button type="button" className={css.orderBtn}>
                  Забронювати
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

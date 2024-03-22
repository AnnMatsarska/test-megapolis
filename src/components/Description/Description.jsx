import React from 'react';
import css from './Description.module.css';
import specifications from '../../data/spesifications.json';
import hostel from '../../images/hostel.jpg';
import { ReactComponent as Plus } from '../../images/icons/plus.svg';

export const Description = () => {
  return (
    <div className="container">
      <section className={css.descSection}>
        <h2 className={css.sectionTitle}>Адреси</h2>
        <ul>
          {specifications.map(spec => (
            <li key={spec.id}>
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
                    <p className={css.itemText}>Адреса</p>
                    <Plus />
                  </div>
                  <p className={css.addressBox}>
                    {spec.address.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <div className={css.infoWrpper}>
                  <div className={css.box}>
                    <p className={css.itemText}>Ціна</p>
                    <Plus />
                  </div>
                  <ul className={css.priceList}>
                    {spec.price.map(pr => {
                      return (
                        <>
                          <li>доба: {pr.day}грн.</li>
                          <li>
                            тиждень:{' '}
                            <span className={css.crossPrice}>{pr.week}грн</span>
                            <span className={css.greenPrice}>від 620 грн.</span>
                          </li>
                          <li>
                            4 тижня:{' '}
                            <span className={css.crossPrice}>
                              {pr.month}грн
                            </span>
                            <span className={css.greenPrice}>
                              від 1900 грн.
                            </span>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <div className={css.infoWrpper}>
                    <div className={css.box}>
                      <p className={css.itemText}>Опис</p>
                      <Plus />
                    </div>
                    <p className={css.descrptBox}>{spec.description}</p>
                  </div>
                  <div className={css.infoWrpper}>
                    <div className={css.box}>
                      <p className={css.itemText}>Що поруч?</p>
                      <Plus />
                    </div>
                    <p className={css.descrptBox}>
                      {spec.nearby.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                  <div className={css.infoWrpper}>
                    <div className={css.box}>
                      <p className={css.itemText}>Транспорт</p>
                      <Plus />
                    </div>
                    <p className={css.descrptBox}>
                      {spec.transport.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
              <p className={css.mapText}>Показати на мапі</p>
              <button type="button" className={css.orderBtn}>
                Забронювати
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

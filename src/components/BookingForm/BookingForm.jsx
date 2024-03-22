import React from 'react';
import css from './BookingForm.module.css';

export const BookingForm = () => {
  return (
    <div className="container">
      <section className={css.formSection}>
        <div className={css.leftWrapper}>
          <h2 className={css.formTitle}>Забронювати хостел</h2>
          <p className={css.formText}>
            Приїжджаєте до Києва і шукаєте де зупинитися? Сумніваєтеся бронювати
            чи готель, знімати житло? Шукаєте хороший і недорогий варіант в
            Києві? Хочете подорожувати всій родині або з друзями, але
            продовжувати відчувати себе як вдома? Хостел Мегаполіс радий вітати
            Вас!
          </p>
        </div>

        <form>
          <div className={css.inputWrapper}>
            <input
              type="text"
              name="name"
              placeholder="Ім’я"
              className={css.input}
            />
          </div>
          <div className={css.inputWrapper}>
            <input
              type="number"
              name="number"
              placeholder="+38(0__)___-__-__"
              className={css.input}
            />
          </div>
          <div className={css.inputWrapper}>
            <input
              type="text"
              name="hostel"
              placeholder="Виберіть хостел"
              className={css.input}
            />
          </div>
          <div className={css.inputTextarea}>
            <input
              type="textarea"
              name="comment"
              placeholder="Повідомлення"
              className={css.input}
            />
          </div>
          <div className={css.endWrapper}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <label htmlFor="checkinDate" className={css.label}>
                Дата заселення:
              </label>
              <div className={css.inputDataWrapper}>
                <input
                  type="text"
                  id="checkinDate"
                  name="checkinDate"
                  placeholder="день\місяць\рік"
                  className={css.inputData}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <label htmlFor="checkoutDate" className={css.label}>
                Дата виїзду:
              </label>
              <div className={css.inputDataWrapper}>
                <input
                  type="text"
                  id="checkoutDate"
                  name="checkoutDate"
                  placeholder="день\місяць\рік"
                  className={css.inputData}
                />
              </div>
            </div>
          </div>
          <button type="button" className={css.orderBtn}>
            Забронювати
          </button>
        </form>
      </section>
    </div>
  );
};

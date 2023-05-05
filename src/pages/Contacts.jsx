import React from 'react';

export const Contacts = () => {
  return (
    <div className="container">
      <div className="contacts-wrapper">
        <div>
          <h1>Контакты</h1>
          <div className="address-wrapper">
            <img src="https://decode.kz/new_decode/images/course/contact/address.svg" alt="" />
            <div>
              <span className="address">Адрес</span>
              <p className="address-info">г. Алматы, проспект Манаса 34/1, МУИТ.</p>
            </div>
          </div>
          <div className="address-wrapper">
            <img src="https://decode.kz/new_decode/images/course/contact/phone.svg" alt="" />
            <div>
              <span className="address">Телефоны</span>
              <div>+7 (747) 228 32 21</div>
              <div>+7 (775) 133 72 28</div>
            </div>
          </div>
        </div>
        <div>
          <h1>Остались вопросы?</h1>
          <p>Наши менеджера свяжутся с Вами в кратчайшее время</p>
          <input type="text" placeholder="ФИО" />
          <input type="number" placeholder="+7 ( __ ) - __ - __" />
          <button className="submit-btn">Отправить</button>
        </div>
      </div>
    </div>
  );
};

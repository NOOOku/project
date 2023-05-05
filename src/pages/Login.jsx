import React from 'react';

export const Login = () => {
  return (
    <div className="container">
      <div className="login-wrapper">
        <div>
          <h1>Войти</h1>
          <p>Мы подберём для вас подходищий курс программирования</p>
          <input className="login-input" type="text" placeholder="ФИО" />
          <input className="login-input" type="number" placeholder="+7 ( __ ) - __ - __" />
          <button className="submit-button">Отправить</button>
        </div>
      </div>
    </div>
  );
};

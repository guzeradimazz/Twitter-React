import React from "react";
import "./SignIn.css";

const ModalReg = ({ isOpenIn, setIsOpenIn }) => {

  if(!isOpenIn){
    return null
  }
  return (
    <div className={isOpenIn ? "blackBackground" : "displayNone"}>
      <div className={isOpenIn ? "modalIn" : "displayNone"}>
        <div className="closeModal" onClick={() => setIsOpenIn(false)}>
          <span></span>
          <span></span>
        </div>
        <div className="innerModal">
              <h1>Создайте учетную запись</h1>
              <form action="">
                  <input className="defaultInput" type="name" placeholder="Имя" id="name"/>
                  <input className="defaultInput" type="email" placeholder="E-mail" id="email"/>
                  <input className="defaultInput" type="password" placeholder="Пароль" id="password"/>
                  <button className="blueBtn">Зарегистрироваться</button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default ModalReg;

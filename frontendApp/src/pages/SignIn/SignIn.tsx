import React, { useState } from 'react';
import Button from '../../UI/Button';
import ModalIn from './ModalIn';
import ModalReg from './ModalReg';
import './SignIn.css';

const SignIn: React.FC = (): React.ReactElement => {
    const [isOpenIn, setIsOpenIn] = useState(false);
    const [isOpenUp, setIsOpenUp] = useState(false);

    return (
        <div className="signInPage">
            <div className="blueWall"></div>
            <ModalIn isOpenIn={isOpenIn} setIsOpenIn={setIsOpenIn} />
            <ModalReg isOpenIn={isOpenUp} setIsOpenIn={setIsOpenUp} />
            <div className="formSignIn">
                <div className="formSignIn-logo"></div>
                <p>В курсе происходящего</p>
                <p>
                    Присоединяйтесь к Твиттеру
                    <br />
                    прямо сейчас!
                </p>
                <Button
                    onClick={() => setIsOpenUp(true)}
                    classNameProp={'blueBtn'}
                    title={'Зарегистрироваться'}
                />
                <p>Уже есть аккаунт?</p>
                <Button
                    onClick={() => setIsOpenIn(true)}
                    classNameProp={'whiteBtn'}
                    title={'Войти'}
                />
            </div>
        </div>
    );
};

export default SignIn;

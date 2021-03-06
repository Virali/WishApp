import React from 'react';
import { useState } from 'react';
import { AuthFormTypes, LOGIN_TYPE } from './constants';
import { DataInputComponent } from './DataInputComponent';
import { LogFooter } from './LogFooter';
import { LogHeader } from './LogHeader';

const HEADER_TEXT = "Организовывайте свои идеи подарков и мероприятий";

const FooterInfo = () => {
  return(
    <div>
      <p>Продолжая вы принимаете условия I GIFT YOU:</p>
      <b>Условия предоставления услуг и Политика конфиденциальности.</b>
      <p>Уже есть аккаунт? <a onClick={() => 1}>Войти</a>.</p>
    </div>
  );
}

const Divider = () =>
  <div className="divider">
    <div className="line"/>
    <span className="middle-text"> Или </span>
    <div className="line"/>
  </div>

export const AuthContainer = () => {
  const [boxType, setBoxType] = useState<AuthFormTypes>(LOGIN_TYPE);
  
  return(
    <div className='auth-box'>
      <span className="cross">×</span>
      <div className='auth-container'>
        <div>
          <LogHeader header={HEADER_TEXT}/>
          <DataInputComponent type={boxType}/>
        </div>
        <Divider/>
        <LogFooter/>
      </div>
      <FooterInfo/>
    </div>
  )
}
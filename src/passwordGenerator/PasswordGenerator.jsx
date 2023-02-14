import React from 'react';
import InputGenerator from '../components/InputGenerator';
import Options from '../components/Options';
import PasswordDisplay from '../components/PassDisplay';
import './passwordGenerator.css';

function PasswordGenerator() {
  return (
    <div className='password-generator'>
        <div className="password-generator-title">
            Генератор пароля
        </div>
        <div className="password-generator-subtitle">
            Создавайте пароли быстро и просто
        </div>
        <PasswordDisplay />
        <InputGenerator />
        <Options />
    </div>
  )
}

export default PasswordGenerator
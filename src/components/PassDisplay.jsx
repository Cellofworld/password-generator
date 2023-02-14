import React from 'react';
import { useSelector } from 'react-redux';
import { warningDisplay } from '../helper/WarningDisplay';

function PasswordDisplay() {

    const password = useSelector(state => state.generatePswd.newGeneratePswd);
    const passLength = useSelector(state => state.passwordLength.value);

    
    // function warningDisplay(passLength) {

    //     let optionResult = {
    //         option: '',
    //         description: '',
    //     }

    //     if (password === '') {
    //         optionResult.option = 'perfect'
    //         optionResult.description = 'Потяните за шкалу снизу'
    //     }else if (passLength <= 10) {
    //         optionResult.option = 'bad'
    //         optionResult.description = 'Ненадежный пароль'
    //    } else if (passLength <= 19) {
    //         optionResult.option = 'med'
    //         optionResult.description = 'Средний пароль'
    //    }else if (passLength >= 20) {
    //         optionResult.option = 'perfect'
    //         optionResult.description = 'Надежный пароль'
    //    }
    //     return optionResult
    // }

  return (
    <div className={`pass-display-cont ${warningDisplay(passLength, password).option}`}>
        <div className="pass-display">{password}</div>
        <div className="pass-warning-cont">
            <div className="pass-warning-icon">!</div>
            <div className="pass-warning">{warningDisplay(passLength, password).description}</div>
        </div>
    </div>
  )
}

export default PasswordDisplay
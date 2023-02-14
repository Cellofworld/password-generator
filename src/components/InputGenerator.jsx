import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handler } from '../helper/Handler';


function InputGenerator() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.passwordLength.value)
  const options = useSelector(state => state.option)
  const passwordLength = useSelector(state => state.passwordLength.value)
  const checkedCount = Object.keys(options).filter(key => options[key]);

  return (
    <div className='generator-cont'>
      <div className="input-generator-cont">
        <input
            onChange={(el) => {handler(el, passwordLength, options, dispatch)}}
            className='input-generator'
            type='range'
            value={value}
            disabled={checkedCount.length === 0 ? true : false}
            min='6'
            max='50'
        />
        <div className='input-generator-value'>{value}</div>
      </div>
      {checkedCount.length === 0 ? <div className='not-option'>Выберите одну из опций</div> : <div></div>}
    </div>
  )
}

export default InputGenerator
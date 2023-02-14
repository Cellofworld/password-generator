import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUppercase, setLowercase, setSymbols, setNumbers} from '../store/slices/OptionSlice';

function Options() {

    const dispatch = useDispatch();
    const options = useSelector(state => state.option)

  return (
    <div className='options'>
        <label className="input-cont">
            <input
                className='option-checkbox'
                type='checkbox'
                checked={options.uppercase}
                onChange={(e) => {dispatch(setUppercase(e.target.checked))}}
                />
            <div className='input-value'>Заглавные буквы</div>
        </label>
        <label className="input-cont">
            <input
                className='option-checkbox'
                type='checkbox'
                checked={options.lowercase}
                onChange={(e) => {dispatch(setLowercase(e.target.checked))}}

                />
            <div className='input-value'>Строчные буквы</div>

        </label>

        <label className="input-cont">
            <input
                className='option-checkbox'
                type='checkbox'
                checked={options.symbols}
                onChange={(e) => {dispatch(setSymbols(e.target.checked))}}

                />
            <div className='input-value'>Цифры</div>

        </label>

        <label className="input-cont">
            <input
                className='option-checkbox'
                type='checkbox'
                checked={options.numbers}
                onChange={(e) => {dispatch(setNumbers(e.target.checked))}}

                />
            <div className='input-value'>Символы</div>

        </label>

    </div>
  )
}

export default Options
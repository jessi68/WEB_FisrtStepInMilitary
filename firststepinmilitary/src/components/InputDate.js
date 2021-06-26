import React , {useState} from 'react';
import { getYear,getMonth } from 'date-fns';
import DatePicker, { registerLocale } from "react-datepicker";  // 한국어적용
import ko from 'date-fns/locale/ko'; // 한국어적용
import styled  from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko) // 한국어적용
const _ = require('lodash');


const InputDateBlock = styled.div`
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 0;
  padding-bottom: 24px;
 

  h1 {
    font-family: "strongmil_medium";
    margin: 0;
    font-size: 40px;
    color: #343a40;
  }
  ub{
    font-family:"NanumSquareRoundB";
    font-size:17px;
}
`;


function InputDate ()  {
    const [startDate, setStartDate] = useState(new Date());
    const years = _.range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
    ];
    
    
    
    return (
        <InputDateBlock>
        <div>
            <ub>생년월일을 입력해주세요 : </ub>
        </div>
        <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale={ko}
      dateFormat="yyyy-MM-dd"
    />        
    </InputDateBlock>
        
    );
  };

  export default InputDate;
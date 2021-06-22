import React , {useState} from 'react';
import styled  from 'styled-components';

const InputNameBlock = styled.div`
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
`;

function InputName() {
    const [text, setText] = useState('');
    // 하단 input 박스에서 값 변경 시 이벤트 객체가 파라미터(e)에 담겨서 온다.
    const onChange = (e) => {
        // e.target에는 이벤트가 발생한 input DOM에 대한 정보를 가지고 있다.
        console.log(e.target);
        // 이벤트가 발생한 DOM의 값 가져오기
        console.log(e.target.value);
        setText(e.target.value);
    }
    // 초기화
    const onReset = () => {
        setText('');
    };


    return (
        <InputNameBlock>
            <div>
                <b>이름을 입력해주세요 : </b>
            </div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {text}
            </div>

        </InputNameBlock>
    )
}

export default InputName;
import React from 'react';
import {createGlobalStyle} from 'styled-components';
import MainTemplate from './components/MainTemplate';
import MainHead from './components/MainHead';
import InputName from './components/InputName';
import InputDate from './components/InputDate';
import './App.css';

const GlobalStyle=createGlobalStyle`
body{
  background:#e9ecef;

  p {
    font-family:"NanumSquareRoundL";
    font-size:11px;
    float:right;
  }
}
`;



function App(){
return (
    <>
    <GlobalStyle />
    <MainTemplate>
    <MainHead />
    <InputName />
    <InputDate />
    </MainTemplate>
    <p>Copyright (c) 2021 김창현, 이서윤</p>
    </>
  );
}
export default App;

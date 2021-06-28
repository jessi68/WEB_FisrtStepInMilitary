import React from 'react';
import {createGlobalStyle} from 'styled-components';
import { Route} from 'react-router-dom';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
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
    <div>
      <Route path="/" exact={true} component={First} />
      <Route path="/Second" component={Second} />
      <Route path="/Third" component={Third} />
    </div>
    <p>Copyright (c) 2021 김창현, 이서윤</p>
    </>
  );
}
export default App;

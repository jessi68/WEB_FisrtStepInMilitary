import React from 'react';
import {Link} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import MainTemplate from './MainTemplate';
import MainHead from './MainHead';
import InputName from './InputName';
import InputDate from './InputDate';
import '../App.css';

const GlobalStyle=createGlobalStyle`
body{
  background:#e9ecef;
}
`;

function First() {
    return(
        <>
        <GlobalStyle />
        <MainTemplate>
            <MainHead />
            <InputName />
            <InputDate />
            <Link to="/FindCertificateAndAdd">
              <button style={{marginLeft:"30px"}}>이동하기</button>
            </Link>

        </MainTemplate>
        </>
    );
}

export default First;
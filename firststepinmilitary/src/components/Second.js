import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled  from 'styled-components';
import MainTemplate from './MainTemplate';
import MainHead from './MainHead';
import LicenseList from './LicenseList';
import LicenseCreate from './LicenseCreate';
import { LicenseProvider } from './LicenseContext';
import '../App.css';

const GlobalStyle=createGlobalStyle`
body{
  background:#e9ecef;
}
`;

const SecondStyleBlock = styled.div`
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 0;
  padding-bottom: 24px;

  k {
    font-family: "NanumSquareRoundL";
    margin: 0;
    font-size: 15px;
    color: #343a40;
  }
`;

function Second() {
    return(
        <>
        <LicenseProvider>
        <GlobalStyle />
        <MainTemplate>
        <MainHead />
        <SecondStyleBlock>
            <k>본인이 보유한 자격증 혹은 면허를 추가해주세요</k>
        </SecondStyleBlock>
        
        
        <LicenseList />
        <LicenseCreate />
        </MainTemplate>
        </LicenseProvider>
        </>
    );
}

export default Second;

import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled  from 'styled-components';
import MainTemplate from './MainTemplate';
import MainHead from './MainHead';
import LicenseList from './LicenseList';
import LicenseCreate from './LicenseCreate';
import { LicenseProvider } from './LicenseContext';
import '../App.css';
import MajorCreate from './MajorCreate';

const GlobalStyle=createGlobalStyle`
body{
  background:#e9ecef;
}
`;

const SecondStyleBlock = styled.div`
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 0;
  padding-bottom: 0px;

  k {
    font-family: "NanumSquareRoundEB";
    margin: 0;
    font-size: 15px;
    color: #343a40;
    padding-bottom: 10px;

  }
`;

function Third() {
    return(
        <>
        <LicenseProvider>
        <GlobalStyle />
        <MainTemplate>
        <MainHead />
        <SecondStyleBlock>
            <k>본인의 전공을 추가해주세요<br /></k>
        </SecondStyleBlock>
        
        <LicenseList />
        <MajorCreate />
        
        </MainTemplate>
        </LicenseProvider>
        </>
        
    );
}

export default Third;

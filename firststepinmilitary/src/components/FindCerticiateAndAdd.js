import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled  from 'styled-components';
import MainTemplate from './MainTemplate';
import MainHead from './MainHead';
import LicenseList from './LicenseList';
import LicenseCreate from './LicenseCreate';
import { LicenseProvider } from './LicenseContext';
import {Link} from 'react-router-dom';
import '../App.css';

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

function FindCertificateAndAdd() {
    return(
        <>
        <LicenseProvider>
        <GlobalStyle />
        <MainTemplate>
        <MainHead />
        <SecondStyleBlock>
            <k>본인이 보유한 자격증 혹은 면허를 추가해주세요<br />
             단, 1종 보통, 1종 대형의 경우 '자동차운전면허'로 검색해주십시오. </k>
           
        </SecondStyleBlock>     
        <Link to="/RecommendPositionFromMajor">
              <button style={{marginLeft:"30px"}}>이동하기</button>
            </Link>   
        <LicenseList findDataFrom={(data) => data}/>
        <LicenseCreate />
        
        </MainTemplate>
        </LicenseProvider>
        </>
        
    );
}

export default FindCertificateAndAdd;

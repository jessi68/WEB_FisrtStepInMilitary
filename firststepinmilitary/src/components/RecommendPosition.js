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
import major_to_position from "../datasrc/major_to_position.json";

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
function findAdequatePosition(major) {
  var results = major_to_position.find(function (item) {
      return item['전공'].includes(major.slice(0, 2))
  })
  return results['보직']
}

function RecommendPositionFromMajor() {
    return(
        <>
        <LicenseProvider>
        <GlobalStyle />
        <MainTemplate>
        <MainHead />
        <SecondStyleBlock>
            <k>본인의 전공을 입력하시면 그에 맞는 보직을 추천해드립니다.<br /></k>
        </SecondStyleBlock>
        
        <LicenseList findDataFrom={findAdequatePosition}/>
        <MajorCreate />
        
        </MainTemplate>
        </LicenseProvider>
        </>
        
    );
}

export default RecommendPositionFromMajor;

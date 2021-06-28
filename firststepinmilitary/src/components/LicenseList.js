import React from 'react';
import styled from 'styled-components';
import { useLicenseState } from './LicenseContext';
import LicenseItem from './LicenseItem';
import major_to_position from "../datasrc/major_to_position.json";

const LicenseListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function findAdequatePosition(major) {
  var results = major_to_position.find(function (item) {
      return item['전공'].includes(major.slice(0, 2))
  })
  return results['보직']
}

function LicenseList() {
  const licenses = useLicenseState();
  return (
  
  <LicenseListBlock>
       {licenses.map(license => (
        <LicenseItem
          key={license.id}
          id={license.id}
          text={findAdequatePosition(license.text)}
        />
      ))}
  </LicenseListBlock>

  );
}

export default LicenseList;
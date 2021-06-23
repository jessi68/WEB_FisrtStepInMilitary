import React from 'react';
import styled from 'styled-components';
import { useLicenseState } from './LicenseContext';
import LicenseItem from './LicenseItem';

const LicenseListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function LicenseList() {
  const licenses = useLicenseState();
  return (
  
  <LicenseListBlock>
       {licenses.map(license => (
        <LicenseItem
          key={license.id}
          id={license.id}
          text={license.text}
        />
      ))}
  </LicenseListBlock>

  );
}

export default LicenseList;
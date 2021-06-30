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




function LicenseList(props) {
  const licenses = useLicenseState();
 
  return (
  
  <LicenseListBlock>
       {licenses.map(license => (
        <LicenseItem
          key={license.id}
          id={license.id}
          text={props.findDataFrom(license.text)}
        />
      ))}
  </LicenseListBlock>

  );
}

export default LicenseList;
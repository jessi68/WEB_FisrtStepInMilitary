import React from 'react';
import styled from 'styled-components';
import {MdDelete } from 'react-icons/md';
import { useLicenseDispatch} from './LicenseContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
`;

const LicenseItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid #38d9a9;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  flex: 1;
  font-size: 24px;
  color: black;
`;

function LicenseItem({ id, text }) {
    const dispatch = useLicenseDispatch();
    const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <LicenseItemBlock>
      <CheckCircle></CheckCircle>
      <Text>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </LicenseItemBlock>
  );
}

export default LicenseItem;
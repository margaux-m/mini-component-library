import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectDropdown
      value={value}
      onChange={onChange}
      style={{ 'width': 16 * displayedValue.length + 16 + 'px' }}
    >
      {children}
      <Icon id="chevron-down" />
    </SelectDropdown>
  );
};

const SelectDropdown = styled.select`
  font-size: 16px;
  padding: 12px 16px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: transparent;
  background-size: 20px;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px blue;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`

`;

export default Select;

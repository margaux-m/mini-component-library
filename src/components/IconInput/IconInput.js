import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const iconSize = size === 'small' ? 16 : 24;
  const Input = size === 'small'
    ? SmallInput
    : LargeInput;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': iconSize + 'px' }}>
        <Icon
          id={icon}
          size={iconSize}
        />
      </IconWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        style={{
          "--width": width + "px"
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  border: none;
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const SmallInput = styled(TextInput)`
  height: 24px;
  font-size: ${14 / 16}rem;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 32px;
`;

const LargeInput = styled(TextInput)`
  height: 36px;
  font-size: ${18 / 16}rem;
  border-bottom: 2px solid ${COLORS.black};
  padding-left: 32px;
`;

export default IconInput;

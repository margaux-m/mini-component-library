/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px"
  },
  medium: {
    "--height": 12 + "px"
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px"
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Bar
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      value={value}
      min={0}
      max={100}
      style={styles}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
    </Bar>
  );
};

const Bar = styled.progress`
  &[value] {
    /* Reset the default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* Custom styles */
    height: var(--height);
    width: 370px;
  }

  &[value]::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
    border-radius: 4px;
  }

  &[value]::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px 0px 0px 4px;
  }
`;

export default ProgressBar;

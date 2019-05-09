import React from 'react';
import { NumberField as NumberField95 } from 'react95';
import PropTypes from 'prop-types';

export const NumberField = (props) => <NumberField95 { ...props } />;

NumberField.propTypes = {
  value: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableKeyboardInput: PropTypes.bool,
  fullWidth: PropTypes.bool,
  shadow: PropTypes.bool,
  className: PropTypes.string,
};

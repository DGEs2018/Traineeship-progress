import React from 'react';
import { Checkbox as Checkbox95 } from 'react95';
import PropTypes from 'prop-types';

export const Checkbox = (props) => <Checkbox95 { ...props } />;

Checkbox.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  shadow: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

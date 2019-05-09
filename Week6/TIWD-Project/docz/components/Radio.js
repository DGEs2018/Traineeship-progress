import React from 'react';
import { Radio as Radio95 } from 'react95';
import PropTypes from 'prop-types';

export const Radio = (props) => <Radio95 { ...props } />;

Radio.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

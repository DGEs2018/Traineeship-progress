import React from 'react';
import { TextArea as TextArea95 } from 'react95';
import PropTypes from 'prop-types';

export const TextArea = (props) => <TextArea95 { ...props } />;

TextArea.propTypes = {
  shadow: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

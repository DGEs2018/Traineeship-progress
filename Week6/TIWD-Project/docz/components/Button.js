import React from 'react';
import { Button as Button95 } from 'react95';
import PropTypes from 'prop-types';

export const Button = (props) => <Button95 { ...props } />;

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  square: PropTypes.bool,
  active: PropTypes.bool,
  flat: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

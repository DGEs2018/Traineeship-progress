import React from 'react';
import { List as List95 } from 'react95';
import PropTypes from 'prop-types';

export const List = (props) => <List95 { ...props } />;

List.propTypes = {
  style: PropTypes.object,
  fullWidth: PropTypes.bool,
  shadow: PropTypes.bool,
  inline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  verticalAlign: PropTypes.oneOf(['top', 'bottom']),
  horizontalAlign: PropTypes.oneOf(['left', 'right']),
};

import React from 'react';
import { ListItem as ListItem95 } from 'react95';
import PropTypes from 'prop-types';

export const ListItem = (props) => <ListItem95 { ...props } />;

ListItem.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  square: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  href: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
};

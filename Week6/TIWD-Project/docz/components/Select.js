import React from 'react';
import { Select as Select95 } from 'react95';
import PropTypes from 'prop-types';

export const Select = (props) => <Select95 { ...props } />;

Select.propTypes = {
  style: PropTypes.object,
  shadow: PropTypes.bool,
  selectedIndex: PropTypes.number,
  items: PropTypes.arrayOf([PropTypes.object]),
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onChange: PropTypes.func,
};

import React from 'react';
import { Divider as Divider95 } from 'react95';
import PropTypes from 'prop-types';

export const Divider = (props) => <Divider95 { ...props } />;

Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

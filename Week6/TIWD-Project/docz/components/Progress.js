import React from 'react';
import { Progress as Progress95 } from 'react95';
import PropTypes from 'prop-types';

export const Progress = (props) => <Progress95 { ...props } />;

Progress.propTypes = {
  width: PropTypes.number,
  percent: PropTypes.number,
  shadow: PropTypes.bool,
};

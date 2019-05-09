import React from 'react';
import { WindowContent as Window95 } from 'react95';
import PropTypes from 'prop-types';

export const WindowContent = (props) => <Window95 { ...props } />;

WindowContent.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

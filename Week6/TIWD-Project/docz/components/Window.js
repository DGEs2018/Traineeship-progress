import React from 'react';
import { Window as Window95 } from 'react95';
import PropTypes from 'prop-types';

export const Window = (props) => <Window95 { ...props } />;

Window.propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

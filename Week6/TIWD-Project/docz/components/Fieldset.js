import React from 'react';
import { Fieldset as Fieldset95 } from 'react95';
import PropTypes from 'prop-types';

export const Fieldset = (props) => <Fieldset95 { ...props } />;

Fieldset.propTypes = {
  style: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

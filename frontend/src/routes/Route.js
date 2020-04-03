import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  notPrivate,
  ...rest
}) {
  const signed = true;

  if (!signed && !notPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && notPrivate) {
    return <Redirect to="/delivery" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  notPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  notPrivate: false,
};

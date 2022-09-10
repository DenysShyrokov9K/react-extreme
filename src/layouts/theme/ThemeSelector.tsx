import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const LightTheme = React.lazy(() => import('./LightTheme'));
const DarkTheme = React.lazy(() => import('./DarkTheme'));

interface stateType {
  customizer: {
    isDark: string
  }
}

const ThemeSelector = ({ children } : any) => {
  const isDarkMode = useSelector((state : stateType) => state.customizer.isDark);
  return (
    <>
      <>{isDarkMode ? <DarkTheme /> : <LightTheme />}</>
      {children}
    </>
  );
};

ThemeSelector.propTypes = {
  children: PropTypes.node,
};

export default ThemeSelector;

import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [breads, setBreads] = useState([]);
  const [customers, setCustomers] = useState([]);
  return (
    <AppContext.Provider value={{ breads, customers, setBreads, setCustomers }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

AppContextProvider.defaultProps = {
  children: undefined,
};

export default { AppContext, AppContextProvider };

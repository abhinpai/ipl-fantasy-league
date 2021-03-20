import { createContext, useContext, useReducer } from 'react';

const DataContext = createContext();

export const DataLayerContext = ({ reducer, initialState, children }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataContext.Provider>
);

const useAppData = () => useContext(DataContext);

export default useAppData;

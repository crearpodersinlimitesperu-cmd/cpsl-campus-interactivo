import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export function useUI() {
  return useContext(UIContext);
}

export function UIProvider({ children }) {
  const [isFocusMode, setIsFocusMode] = useState(false);

  const toggleFocusMode = () => {
    setIsFocusMode(prev => !prev);
  };

  const setFocusMode = (value) => {
    setIsFocusMode(value);
  }

  const value = {
    isFocusMode,
    toggleFocusMode,
    setFocusMode
  };

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
}

import { createContext, useContext, useMemo } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const value = useMemo(
    () => ({
      appName: 'MarketMind AI',
      environment: 'development',
    }),
    [],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }

  return context;
}
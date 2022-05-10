import { reducer, Actions } from "../reducer/";
import React, { createContext, ReactNode, useContext, useReducer } from "react";
export type InitialStateType = {
  provider?: any;
  web3Provider?: any;
  account?: string | null;
  chainId?: number | null;
};

const initialState: InitialStateType = {
  provider: null,
  web3Provider: null,
  account: null,
  chainId: null,
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});
type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

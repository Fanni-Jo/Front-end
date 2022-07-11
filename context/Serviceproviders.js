import { createContext, useContext, useState } from "react";

const Context = createContext();


export function ServiceProvider({ children }) {
  // const [theme, setTheme] = useState("light");
  const [serviceProviders, setServiceProviders] = useState();

  return (
    <Context.Provider value={[ serviceProviders,setServiceProviders]}>{children}</Context.Provider>
    // <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}

export function useSpContext() {
  return useContext(Context);
}
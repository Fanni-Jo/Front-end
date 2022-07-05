import { createContext, useContext, useState } from "react";

const Context = createContext();


export function StateProvider({ children }) {
  // const [theme, setTheme] = useState("light");
  const [iscategory, setCategory] = useState();

  return (
    <Context.Provider value={[ iscategory,setCategory]}>{children}</Context.Provider>
    // <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}

export function useStateContext() {
  return useContext(Context);
}
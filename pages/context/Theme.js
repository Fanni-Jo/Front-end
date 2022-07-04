import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ThemeProvider({ children }) {
  // const [theme, setTheme] = useState("light");
  const [iscategory, setCategory] = useState();
  const [islogin,setLogin] = useState(false);
  const [user, setuser] = useState(null)
  return (
    <Context.Provider value={[iscategory, setCategory,user,setuser, islogin, setLogin]}>{children}</Context.Provider>
    // <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}
//useThemeContext Hook that will allow us
// to access the theme state after we import it into the individual pages or components of our app.
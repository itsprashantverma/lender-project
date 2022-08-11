import { createContext , useState } from "react";

export const MenuContext = createContext({
  setMenu: () => null,
  menu: null,
});

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const value = { menu, setMenu };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

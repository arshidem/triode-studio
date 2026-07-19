// src/user/context/NavbarLogoContext.js
import { createContext, useContext } from "react";

export const NavbarLogoContext = createContext(null);

export const useNavbarLogo = () => useContext(NavbarLogoContext);

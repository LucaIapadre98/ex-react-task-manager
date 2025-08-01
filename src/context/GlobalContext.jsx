import { createContext } from "react";

export const GlobalContext = createContext();                                  // creazione del contesto globale
 
export const GlobalProvider = ({ children }) => {                            // setup di un contesto globale
    return (
        <GlobalContext.Provider value="">
            {children}
        </GlobalContext.Provider>
    );
};
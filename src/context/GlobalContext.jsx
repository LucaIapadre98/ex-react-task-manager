import { createContext} from "react";
import useTasks from "../hooks/useTasks";

export const GlobalContext = createContext();                                  // creazione del contesto globale
 
export const GlobalProvider = ({ children }) => {                            // setup di un contesto globale
    const tasksData = useTasks()

    return (                                                     // fornisce il contesto globale con i task e la funzione per aggiornarli
        <GlobalContext.Provider value={{ ...tasksData }}>                  
            {children}
        </GlobalContext.Provider>
    );
};
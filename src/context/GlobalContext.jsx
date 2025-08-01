import { createContext, useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env;                            // Importa la variabile d'ambiente per l'URL dell'API

export const GlobalContext = createContext();                                  // creazione del contesto globale
 
export const GlobalProvider = ({ children }) => {                            // setup di un contesto globale
    const [tasks, setTasks] = useState([]);                                  // stato per i task

    useEffect (() => {
        fetch(`${VITE_API_URL}/tasks`)                                         // recupera i task dall'API
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));
    }, []);

    return (                                                     // fornisce il contesto globale con i task e la funzione per aggiornarli
        <GlobalContext.Provider value={{ tasks, setTasks }}>                  
            {children}
        </GlobalContext.Provider>
    );
};
import {  useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env;        

export default function useTasks (){

    const [tasks, setTasks] = useState([]);                                 

    useEffect (() => {
        fetch(`${VITE_API_URL}/tasks`)                                         
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));
    }, []);

    const addTask = () => {}
    const removeTask = () => {}
    const updateTask = () => {}

    return {tasks, addTask, removeTask, updateTask};
};




// Creare un custom hook per centralizzare la gestione dei task e semplificare l'accesso ai dati.
// Creare un hook useTasks() che recupera i task iniziali con una richiesta GET a /tasks e li memorizza in uno stato locale (useState).
// Definire le funzioni addTask, removeTask, updateTask all'interno di useTasks(), lasciandole vuote per ora.
// Rendere disponibili le funzioni e la lista dei task restituendole come valore dell'hook.
// Integrare useTasks() nel GlobalContext, in modo che tutti i componenti possano accedere ai task e alle funzioni di gestione.
import { useMemo, useRef, useState } from "react";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

export default function AddTask(){

    const [ taskTitle, setTaskTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();        

    const taskError = useMemo(() =>{
        if(!taskTitle) 
            return "Il nome del task non può essere vuoto";
        if([...taskTitle].some(char => symbols.includes(char)))
            return "Il nome della task non può contenere simboli";
        return "";
        
    }, [taskTitle]);

    const handleSubmit = e => {
        e.preventDefault();
        if(taskError)
            return;

        const newTask = {
            title: taskTitle,
            description: descriptionRef,
            status: statusRef.current.value
        }
        console.log(newTask);
        
    }

    return (
        <div>
            <h1>Aggiungi task</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome task:
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                </label>
                {taskError && 
                <p style={{color: "red"}}>{taskError}</p>}
                <label>
                    Descrizione:
                    <textarea  ref={descriptionRef}
                    min = "10"
                    max = "100"/>
                </label>
                <label>
                    Stato:
                    <select ref={statusRef}
                    defaultValue={"To do"}>
                        {["To do", "Doing", "Done"].map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                </label>
                <button type="submit" disabled={taskError}>
                    Aggiungi task
                </button>
            </form>
        </div>
    )
};
 


// Creare un form per aggiungere un task, senza ancora inviare i dati all'API.
// Aggiornare la pagina AddTask.jsx per contenere un form con i seguenti campi:
// Nome del task (title) → Input controllato (useState).
// Descrizione (description) → Textarea non controllata (useRef).
// Stato (status) → Select non controllata (useRef), con opzioni "To do", "Doing", "Done", e valore predefinito "To do".
// Validare il campo Nome (title):
// Il campo non può essere vuoto.
// Non può contenere simboli speciali.
// Se il valore è errato, mostrare un messaggio di errore.
// Utilizzare una costante con i caratteri vietati:
// const symbols = "!@#$%^&*()-_=+[]{}|;:'\\",.<>?/`~";
// Gestione del Submit del Form:
// Al click del bottone "Aggiungi Task",
//  il form deve SOLO stampare in console l’oggetto task con i valori inseriti (NON deve ancora essere inviata la richiesta all’API).
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";                        // Importa il contesto globale

export default function TaskList (){

    const { tasks } = useContext(GlobalContext);                         // Usa il contesto globale per accedere ai task
    console.log("tasks:", tasks);                                             // Log dei task per debug
    
    return (
        <div>
            <h1>Lista task</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Stato</th>
                        <th>Data di creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <TaskRow key={task.id} task={task} />                          // Mappa i task in righe della tabella
                    ))}
                </tbody>
            </table>
        </div>
    )
};



// Visualizzare l'elenco dei task in una tabella e ottimizzare il rendering con React.memo().
// Recuperare la lista dei task dal GlobalContext e mostrarla nella pagina TaskList.jsx.
// Strutturare TaskList.jsx come una tabella, con le intestazioni Nome, Stato, Data di Creazione.
// Creare un componente TaskRow.jsx, che rappresenta una singola riga della tabella e mostra solo le proprietà title,
//  status e createdAt (escludendo description).
// Applicare uno stile differente alla colonna status,
//  assegnando i seguenti colori di sfondo alle celle in base al valore dello stato:
// "To do" → rosso
// "Doing" → giallo
// "Done" → verde
// Utilizzare React.memo() su TaskRow.jsx per ottimizzare le prestazioni ed evitare render inutili.
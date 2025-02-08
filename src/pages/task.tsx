import '../assets/css/task.css';
import { useState } from 'react';

export default function Task(){

    const [newTask, setNewTask] = useState <string> ("");
    const [list, setList] = useState <string[]> ([]);

    const listUl = list.map((task, key) => {
        return (
        <li key={key}>{task}</li>
        )
    })

    /** On récupérer l'évévenemtn @e pour différencier le nom du boutton cliqué
     *      -TypeScript type Event avec React.MouseEvent mais la propriété name n'éxiste pas sur ce type.
     *          On utilise l'alias pour transformer e.target en HTMLButtonElement pour un typage plus spécifique
     */

    const updateList = (e: React.MouseEvent) => {

        const target = e.target as HTMLButtonElement;
        if (target.name === "Ajouter") {
            setList([...list, newTask]);
            console.log({listUl});
        }
        else{
            setList([""]);
            console.log(listUl);
        }
    }

    return(
        <>
        <section className='taskList'>
            <h1>Liste de tâches:</h1>
            <div className='taskListDiv'>
                <div className='formList'>
                    <input type="text" name="taskTextInput" id="taskTextInput" onChange={(e) => setNewTask(e.target.value)}/>
                    <button onClick={updateList} name="Ajouter" value="Ajouter">Ajouter</button>
                    <button onClick={updateList} name="Supprimer" value="Supprimer">Supprimer</button>
                </div>
                <div>
                    <ul className='taskListUl'>
                        {listUl}
                    </ul>
                </div>
            </div>
        </section>
        </>
    );        
}







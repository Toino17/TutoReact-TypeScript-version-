import '../assets/css/task.css';

export default function Task(){
    return(
        <>
        <section className='taskList'>
            <h1>Liste de tâches:</h1>
            <div className='taskListDiv'>
                <form action="" className='formList'>
                    <input type="text" name="taskTextInput" id="taskTextInput" />
                    <button type="submit" value="Ajouter">Ajouter</button>
                    <button type="submit" value="Supprimer">Supprimer</button>
                </form>
                <div>
                    <ul>
                        {/* <li>TODO</li> */}
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}
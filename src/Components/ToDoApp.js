import { useState } from "react";
import ToDo from "./ToDo";
import './ToDoApp.css';


export default function ToDoApp() {
    const [title, setTitle] = useState('');
    const [toDos, setToDos] = useState([]);

    function handleChange(e) {
        const value = e.target.value;
        setTitle(value)
    }
    function handleSubmit(e) {
        e.preventDefault(); // Anula el comportamiento nativo del input (No intenta subir la información)

        const newToDo = {
            id: Date.now(),
            title: title,
            completed: false
        };

        const temp = [...toDos];
        temp.unshift(newToDo)

        setToDos(temp)
        setTitle('')
    }

    function handleUpDate(id, value) {
        const temp = [...toDos];
        const item = temp.find((item) => item.id === id);
        item.title = value;
        setToDos([...temp]);
    }

    function handleDelete(id) {
        const temp = toDos.filter((item) => item.id !== id);

        setToDos([...temp]);
    }

    return <div className="toDoContainer">
        <div className="toDoList">LISTADO DE TAREAS</div>
        <form className="toDoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="toDoInput" value={title} />
            <input onClick={handleSubmit} type='submit' value='Crear tarea' className="buttonCreate" />
        </form>
        <div className="toDosContainer">
            {toDos.map((item) => (
                <ToDo key={item.id} item={item} onUpDate={handleUpDate} onDelete={handleDelete} />
            ))}
        </div>
    </div>;
} 
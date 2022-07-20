import { useState } from "react"
export default function ToDo({ item, onUpDate, onDelete }) {

    const [isEdit, setIsEdit] = useState(false)

    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e) {
            e.preventDefault();
        }

        function handleChange(e) {
            const value = e.target.value
            setNewValue(value)
        }

        function handleClickUpDateToDo(e) {
            onUpDate(item.id, newValue);
            setIsEdit(false)
        }
        return <form className="toDoUpDateForm" onSubmit={handleSubmit}>
            <input type='text' className="toDoInput" onChange={handleChange} value={newValue} />
            <button className="buttonUpDate" onClick={handleClickUpDateToDo}>Actualizar</button>
        </form>
    }

    function ToDoElement() {
        return <div className="toDoInfo">
            <span className="toDoTitle">{item.title}</span>
            <button className="buttonEdit" onClick={() => setIsEdit(true)}>Editar</button>
            <button className="buttonDelete" onClick={() => onDelete(item.id)}>Borrar</button>
        </div>
    }
    return (
        <div className="toDo">
            {isEdit ? <FormEdit /> : <ToDoElement />}
        </div>
    )
}




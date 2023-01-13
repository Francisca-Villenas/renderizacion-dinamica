import { useState } from "react";
import { BaseColaboradores } from "./api/db";
import { Form } from "./components/Form.jsx";
import "./index.css";

const App = () => {

const [todos, setTodos] = useState(BaseColaboradores);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [ search, setSearch] = useState('');

const handleSubmit = e => {
  e.preventDefault()

  const newTodo = {
    id: Date.now(),
    nombre: name,
    correo: email,
  };

  setTodos([...todos, newTodo]);
  setName("");
  setEmail("");
};

const handleDelet = (id) => {
  const newArray = todos.filter((todo) => id !== todo.id)
  setTodos(newArray);
};

const searcher = (e) => {
  setSearch(e.target.value)
  console.log(e.target.value)
}

  return (
    <div className="container">

      <input value={search} onChange={searcher} type="text" placeholder="Busca un colaborador" className="form-control mb-4" />
      <Form handleSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail}></Form>
      <h2>Lista de colaboradores</h2>


      <ul className="list-group">
        {todos.filter((x) => x.nombre.toLowerCase().includes(search.toLocaleLowerCase())).map(({ id, nombre, correo }) => {
            return (
            <li 
              key={id} 
              className="list-group-item">{nombre} - {correo}
            >
            <button onClick={() => handleDelet(id)} type="submit" className="btn btn-info">Eliminar colaborador</button>
            </li>
          )})}
      </ul>

    </div>
  );
};

export default App;
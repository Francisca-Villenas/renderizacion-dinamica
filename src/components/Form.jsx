export const Form = ({ handleSubmit, name, email, setName, setEmail }) => {
 

  

    return (
        <form onSubmit={handleSubmit}> 
        <div className="mb-3">
        <label className="form-label">Nombre del colaborador</label>
        <input 
          type="text" 
          placeholder="Ingresa el nombre del colaborador" 
          className="form-control" 
          onChange={(e) => setName(e.target.value)} 
          value={name}
        />
        </div>
        <div className="mb-3">
        <label className="form-label">Correo del colaborador</label>
        <input 
          type="text" 
          placeholder="Ingresa correo del colaborador" 
          className="form-control" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        </div>
        <button type="submit" className="btn btn-primary">Agregar colaborador</button>
      </form>
    );
};




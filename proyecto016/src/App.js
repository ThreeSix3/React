import { useState } from 'react';

function App() {
  const [estudios, setEstudios] = useState('Primario')

  function cambioEstudios(e) {
    setEstudios(e.target.value)
  }

  return (
    <div>
      <p><input type="radio" value="Primario" checked={estudios === 'Primario'}
        onChange={cambioEstudios} />Primario</p>
      <p><input type="radio" value="Secundario" checked={estudios === 'Secundario'}
        onChange={cambioEstudios} />Secundario</p>
      <p><input type="radio" value="Universitario" checked={estudios === 'Universitario'}
        onChange={cambioEstudios} />Universitario</p>
      <p>Estudio seleccionado: {estudios}</p>
    </div>
  );
}

export default App;
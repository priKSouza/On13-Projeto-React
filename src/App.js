import './App.css';
import Card from './components/Card';
import './components/Titulo'
import Titulo from './components/Titulo';
import Imagem from './components/Imagem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Projeto React | Priscila Souza</p>
        <Titulo text="Não pode faltar na minha Playlist" />
        <Card/>
        <Imagem/>
      </header>
    </div>
  );
}

export default App;

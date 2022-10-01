import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Tittle from './components/Tittle/Tittle';
import Subtittle from './components/Subtitle/Subtitle';
import ItemListContainer from './components/Contador/ItemListContainer';
import Contador from './components/Contador/Contador';


function App() {
  return (
    <div>
      <Navbar/>
      <Tittle/>
      <Subtittle/>
      <ItemListContainer/>
      <Contador initial={1} stock={7}/>
    </div>

  );
}

export default App;

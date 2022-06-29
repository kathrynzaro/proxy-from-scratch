import './App.css';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';


function App() {

  return (
    <div className="App">
      <div>
        <PokemonSearch />
      </div>
      <div>
        <YelpSearch/>
        
      </div>
    </div>
  );
}

export default App;

import './App.css';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';


function App() {

  return (
    <div className="App">
      <div>
        <PokemonSearch />
      </div>
      <div>
        <YelpSearch/>
      </div>
      <div>
        get the weather, in kelvin!
        <WeatherSearch/>
      </div>
    </div>
  );
}

export default App;

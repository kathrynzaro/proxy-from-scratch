import './App.css';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';


function App() {

  return (
    <div className="App">
      <div>
        search pokes!
        <PokemonSearch />
      </div>
      <div>
        search restaurants by city!
        <YelpSearch />
      </div>
      <div>
        search weather by city!
        <WeatherSearch />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>ARON</h2>
        <h>Huvid</h>
        <ul>
          <li>Koodimine</li>
          <li>Jalutamine</li>
          <li>Rattasõit</li>
          <li>Reisimine</li>
          <li>Drooniga lendamine</li>
          <li>Pildistamine</li>
          <li>Autoga sõitmine</li>
          <li>Lugemine</li>
          <li>Meemid</li>
          <li>Raha</li>
          <li>Lennundus</li>
          <li>Tennis</li>
        </ul>

        <h2>Vorm</h2>
        <form>
          <label for="name">Nimi: </label>
          <input id="name"></input><br></br>
          <label for="email" type="email">Email: </label>
          <input id="email"></input><br></br>
          <label for="age">Vanus: </label>
          <input id="age"></input><br></br>
          <input type="submit" value="Saada"></input>
        </form>

        <a href="mailto: xd@tlu.ee">Saada päring juba täna!</a><br></br>
      </header>
    </div>
  );
}

export default App;

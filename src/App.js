import Nav from './Components/Nav';
import RulesPage from './Components/RulesPage';
import Rules from './Components/Rules';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='main-app-1'>
        <Rules/>
      <RulesPage/>
      </div>
    </div>
  );
}

export default App;

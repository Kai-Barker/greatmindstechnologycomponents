import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import InteractiveForm from './components/InteractiveForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accordion />
        <p style={{padding: 50}}></p>
        <InteractiveForm />
      </header>
    </div>
  );
}

export default App;

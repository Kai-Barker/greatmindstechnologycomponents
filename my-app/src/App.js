import logo from './logo.svg';
import './App.css';
// -------------------------------------------------------------------kai imports
import Accordion from './components/Accordion';


import 'bootstrap/dist/css/bootstrap.min.css';
import InteractiveForm from './components/InteractiveForm';

//--------------------------------------------------------------------------- danae imports
import Nav from './components/nav';
import Carousel from './components/carousel';


function App() {
  return (
    <div className="App">

    <div>
      <Nav />
    
    </div>
    
    <div>
      <Carousel />
    </div>


      <header className="App-header">
        <Accordion />
        <p style={{padding: 50}}></p>
        <InteractiveForm />
      </header>

    </div>

  
  );
}

export default App;

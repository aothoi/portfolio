import './App.css';
import { About } from './about/About';
import { Navbar } from './navbar/Navbar';
import { Work } from './work/Work';
import { Home } from './home/Home';
import { Skill } from './skill/Skill';
import { Contact } from './contact/Contact';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Work/>
    <Skill/>
    <Contact/>
    </div>
  );
}

export default App;

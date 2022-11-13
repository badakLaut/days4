import './App.css';
import ComponentSatu from "./components/componentSatu";
import ComponentDua from "./components/componentDua";
import ComponentTiga from "./components/componentTiga"
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentEmpat from './components/componentEmpat';
import ComponentLima from './components/componentLima';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ComponentSatu/>
      <ComponentDua/>
      <ComponentTiga/>
      <ComponentEmpat/>
      <ComponentLima/>
    </div>
  );
}

export default App;

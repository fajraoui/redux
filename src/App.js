

import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Filter from './components/Filter';
import './App.css';


function App() {
  return (
    <div className="App">
     <AddTask/>
     <ListTask/>
     <Filter/>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Notes from './pages/notes';

function App() {
  return (
    <div>
        
    <Notes />
    </div>
     
  );
}

export default App;

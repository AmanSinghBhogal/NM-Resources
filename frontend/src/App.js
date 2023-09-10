import './App.css';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>

          {/* Login Page Rendering */}
          <Route exact path = "/" element={<Login/>} />

          {/* Home Page */}
          <Route exact path="/home" element = { <Home/> } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

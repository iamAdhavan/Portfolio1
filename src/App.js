import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main'

function App() {
  return (
    
    <Router>
    {/* <div> */}
    <Routes>
    <Route path='/' element={<Main />}></Route>
    </Routes>
    {/* </div> */}
    </Router>
  );
}

export default App;

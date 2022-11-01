
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main'
// , Routes, Route
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Main/>}/>
          </Routes> 
        <Main/>
      </div>
    </BrowserRouter>  
  );
}

export default App;


import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main'
import Category from './components/Category';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/category/:category_name' element={<Category/>}/>
          </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;



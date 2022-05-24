import {useState, useEffect} from 'react'
import { Login } from './Login'
import { Search } from './search/Search'
import { Results } from './Results'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const code = new URLSearchParams(window.location.search).get('code'); 

const App = () => {

  const [composers, setComposers] = useState([]);

  useEffect(() => {
    const fetchComposers = async () => {
      const response = await fetch('composers.json');
      const data = await response.json();
      const listofComposers = data.composers.map((composer) => composer)
      setComposers(listofComposers);
    }
    fetchComposers();
  }, []);

  return (

      <Router>
        <Routes>
          <Route path='/' element={<Login code={code} />} />
          <Route path='/search' element={<Search composerData={composers} />} />
          <Route path='/results' element={<Results code={code}  />} />
        </Routes>
      </Router>
  
  );
}

export default App;
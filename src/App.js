import {useState, useEffect} from 'react';
import { Login } from './Login';
import { Timeline } from './Timeline';
import { Results } from './Results';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import './App.css';

const code = new URLSearchParams(window.location.search).get('code');

const App = () => {

  const [name, setName] = useState('');
  const [composers, setComposers] = useState([]);

  useEffect(() => {
    const fetchComposers = async () => {
      const response = await fetch('composers.json');
      const data = await response.json();
      
     const listofComposers = data.composers.map((composer) => {
        return (
          <div key={composer.id}>
              <h3 onClick={() => setName(composer.name)}><Link to='/results'>{composer.name}</Link></h3>
              <img className='composerImg' src={composer.img}/>
          </div>
        )
     })
     setComposers(listofComposers);
    }
    fetchComposers();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login code={code} />} />
          <Route path='/timeline' element={<Timeline composers={composers}  />} />
          <Route path='/results' element={<Results name={name} code={code}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

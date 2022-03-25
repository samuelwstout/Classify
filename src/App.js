import {useState, useEffect} from 'react';
import { Login } from './Login';
import { Timeline } from './Timeline';
import { Results } from './Results';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";


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
            <ul>
              <button onClick={() => setName(composer.name)}><Link to='/results'>{composer.name}</Link></button>
            </ul>
          </div>
        )
     })
     setComposers(listofComposers);
    }
    fetchComposers();
  }, []);

//use name for the value in Spotify API fetch

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/timeline' element={<Timeline composers={composers}  />} />
          <Route path='/results' element={<Results name={name} />} />
        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
// {code ? <Timeline handleClick={clicked} name={name} code={code} /> : <Login />}
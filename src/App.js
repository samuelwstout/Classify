import { Login } from './Login';
import { Timeline } from './Timeline';
import { Results } from './Results';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
 
  const [name, setName] = useState('');


  const clicked = () => {
    setName('Sam')
  }



  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/timeline' element={<Timeline handleClick={clicked} />} />
          <Route path='/results' element={<Results name={name} />} />
        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
// {code ? <Timeline handleClick={clicked} name={name} code={code} /> : <Login />}
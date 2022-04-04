import {useState, useEffect} from 'react'
import { Login } from './Login'
import { Timeline } from './Timeline'
import { Results } from './Results'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import './App.css'
import { styled } from '@mui/material/styles'

const code = new URLSearchParams(window.location.search).get('code');

const ComposerDiv = styled('div')({
  width: '14rem',
  height: 'min-content'
})
const ComposerName = styled(Link)({
   position: 'relative',
   left: '30px',
   textDecoration: 'none',
   color: '#000',
   ':hover': {
     textDecoration: 'underline'
   }
})
const ComposerImg = styled('img')({
  width: '10rem',
  position: 'relative',
  left: '30px',
  top: '15px'
})

const App = () => {

  const [name, setName] = useState('');
  const [composers, setComposers] = useState([]);

  useEffect(() => {
    const fetchComposers = async () => {
      const response = await fetch('composers.json');
      const data = await response.json();
      
     const listofComposers = data.composers.map((composer) => {
  
        return (
          <ComposerDiv  key={composer.id}>
              <div onClick={() => setName(composer.name)}><ComposerName to='/results'>{composer.name}</ComposerName></div>
              <ComposerImg src={composer.img}/>
          </ComposerDiv>
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

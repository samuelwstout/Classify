import {useState, useEffect} from 'react'
import { Login } from './Login'
import { Timeline } from './Timeline'
import { Results } from './Results'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import './App.css'
import { styled } from '@mui/material/styles'

const code = new URLSearchParams(window.location.search).get('code');

const ComposerButton = styled('button')({
  width: '12rem',
  height: '5rem',
  position: 'relative',
  right: '1rem',
  border: 'none',
  borderRadius: '25px'
})
const ComposerName = styled('h3')({
   textAlign: 'center',
   position: 'relative',
   textDecoration: 'none',
   color: '#fff',
   letterSpacing: '1px'
})

const App = () => {

  const [name, setName] = useState('');
  const [composers, setComposers] = useState([]);

  // Please try this and share feedback: const customColor = Object.fromEntries(data.composer.map((composer) => ([composer.era, getCustomColorFor(composer.era)]))); where function getCustomColorFor(era) { switch (era) { case "Renaissance": return 'red'; case "Baroque": return 'blue'; case "SomeOtherEra": return 'someOtherColor"; default: return 'black';}};
  
  useEffect(() => {
    const fetchComposers = async () => {
      const response = await fetch('composers.json');
      const data = await response.json();
      
      const listofComposers = data.composers.map((composer) => {
      const customColor = {'Renaissance': '#27856a', 'Baroque': '#1e3264', 'Classical': '#8d67ab', 'Romantic': '#1072ec', 'Modernist': '#a56752', 'Avant-garde': '#509bf5', 'Minimalist': '#e13400'}
        return (
          <Link to='/results'>
          <ComposerButton style={{backgroundColor: customColor[composer.era]}} onClick={() => setName(composer.name)} key={composer.id}>
              <ComposerName>{composer.name}</ComposerName>
          </ComposerButton>
          </Link>
        )
     })
     setComposers(listofComposers);
    }

    fetchComposers();
  }, []);

  return (

      <Router>
        <Routes>
          <Route path='/' element={<Login code={code} />} />
          <Route path='/timeline' element={<Timeline composers={composers} />} />
          <Route path='/results' element={<Results name={name} code={code}  />} />
        </Routes>
      </Router>
  
  );
}

export default App;
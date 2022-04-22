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
  height: '12rem',
  position: 'relative',
  right: '1rem',
  border: 'none',
  borderRadius: '25px'
})
const RenaissanceButtons = styled('button')({
  width: '12rem',
  height: '12rem',
  position: 'relative',
  right: '1rem',
  border: 'none',
  backgroundColor: '#27856a',
  borderRadius: '25px'
})
const BaroqueButtons = styled('button')({
  width: '12rem',
  height: '12rem',
  position: 'relative',
  right: '1rem',
  top: '38rem',
  border: 'none',
  backgroundColor: '#1e3264',
  borderRadius: '25px'
})
const ClassicalButtons = styled('button')({
  width: '12rem',
  height: '12rem',
  position: 'relative',
  right: '1rem',
  top: '78rem',
  border: 'none',
  backgroundColor: '#8d67ab',
  borderRadius: '25px'
})
const RomanticButtons = styled('button')({
  width: '12rem',
  height: '12rem',
  position: 'relative',
  right: '1rem',
  top: '165rem',
  border: 'none',
  backgroundColor: '#1072ec',
  borderRadius: '25px'
})
const ModernistButtons = styled('button')({
  width: '12rem',
  height: '12rem',
  position: 'relative',
  right: '1rem',
  top: '320rem',
  border: 'none',
  backgroundColor: '#a56752',
  borderRadius: '25px'
})
const AvantButtons = styled('button')({
  width: '12rem',
  height: '12rem',
  position: 'relative',
  right: '1rem',
  top: '140rem',
  border: 'none',
  backgroundColor: '#509bf5',
  borderRadius: '25px'
})
const ComposerName = styled('h3')({
   position: 'relative',
   left: '2px',
   bottom: '5px',
   textDecoration: 'none',
   color: '#fff'
  //  visibility: 'hidden'
})
const ComposerImg = styled('img')({
  width: '10rem',
  position: 'relative',
  left: '2px',
  bottom: '10px'
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
      const customColor = {'Renaissance': '#27856a', 'Baroque': '#1e3264', 'Classical': '#8d67ab', 'Romantic': '#1072ec', 'Modernist': '#a56752', 'Avant-garde': '#509bf5', 'Minimalist': '#a56752'}
        return (
          <Link to='/results'>
          <ComposerButton style={{backgroundColor: customColor[composer.era]}} onClick={() => setName(composer.name)} key={composer.id}>
              <ComposerName>{composer.name}</ComposerName>
              {/* <ComposerImg src={composer.img}/> */}
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
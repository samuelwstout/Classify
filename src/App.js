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
  width: '15rem',
  height: '17rem',
  position: 'relative',
  right: '1rem',
  border: 'none',
  backgroundColor: '#1e3264',
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


  useEffect(() => {
    const fetchComposers = async () => {
      const response = await fetch('composers.json');
      const data = await response.json();
      
     const listofComposers = data.composers.map((composer) => {
  
        return (

          <Link to='/results'>
          <ComposerButton 
          className='composerbtn'
          onClick={() => {
            setName(composer.name) 
            }} 
            key={composer.id}>
              <ComposerName className='composerName'>{composer.name}</ComposerName>
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
          <Route path='/timeline' element={<Timeline composers={composers}  />} />
          <Route path='/results' element={<Results name={name} code={code}  />} />
        </Routes>
      </Router>
  
  );
}

export default App;

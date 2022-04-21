import {useState, useEffect} from 'react'
import { Login } from './Login'
import { Timeline } from './Timeline'
import { Results } from './Results'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import './App.css'
import { styled } from '@mui/material/styles'

const code = new URLSearchParams(window.location.search).get('code');

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
  const [rComposer, setRComposer] = useState([]);
  const [bComposer, setBComposer] = useState([]);
  const [cComposer, setCComposer] = useState([]);
  const [roComposer, setRoComposer] = useState([]);
  const [mComposer, setMComposer] = useState([]);
  const [aComposer, setAComposer] = useState([]);
  const [miComposer, setMiComposer] = useState([]);
  
  useEffect(() => {
    const fetchComposers = async () => {
      const response = await fetch('composers.json');
      const data = await response.json();
      const renaissance = data.composers.filter(r => r.era === 'Renaissance')
      const baroque = data.composers.filter(r => r.era === 'Baroque')
      const classical = data.composers.filter(r => r.era === 'Classical')
      const romantic = data.composers.filter(r => r.era === 'Romantic')
      const modernist = data.composers.filter(r => r.era === 'Modernist')
      const avantGarde = data.composers.filter(r => r.era === 'Avant-garde')
      const minimalist = data.composers.filter(r => r.era === 'Minimalist')

      const renaissanceList = renaissance.map(r => {
        return (
          <Link to='/results'>
          <RenaissanceButtons onClick={() => setName(r.name)} key={r.id}>
          <ComposerName>{r.name}</ComposerName>
          </RenaissanceButtons>
          </Link>
        )
        })
        setRComposer(renaissanceList)

      const baroqueList = baroque.map(r => {
        return (
          <Link to='/results'>
          <BaroqueButtons onClick={() => setName(r.name)} key={r.id}>
          <ComposerName>{r.name}</ComposerName>
          </BaroqueButtons>
          </Link>
        )
      })
      setBComposer(baroqueList)

      const classicalList = classical.map(r => {
        return (
          <Link to='/results'>
          <ClassicalButtons onClick={() => setName(r.name)} key={r.id}>
          <ComposerName>{r.name}</ComposerName>
          </ClassicalButtons>
          </Link>
        )
      })
      setCComposer(classicalList)

      const romanticList = romantic.map(r => {
        return (
          <Link to='/results'>
          <RomanticButtons onClick={() => setName(r.name)} key={r.id}>
          <ComposerName>{r.name}</ComposerName>
          </RomanticButtons>
          </Link>
        )
      })
      setRoComposer(romanticList)

      const modernistList = modernist.map(r => {
        return (
          <Link to='/results'>
          <ModernistButtons onClick={() => setName(r.name)} key={r.id}>
          <ComposerName>{r.name}</ComposerName>
          </ModernistButtons>
          </Link>
        )
      })
      setMComposer(modernistList)

      const avantGardeList = avantGarde.map(r => {
        return (
          <Link to='/results'>
          <AvantButtons onClick={() => setName(r.name)} key={r.id}>
          <ComposerName>{r.name}</ComposerName>
          </AvantButtons>
          </Link>
        )
      })
      setAComposer(avantGardeList)

      const minimalistList = minimalist.map(r => r)
    
    }
    fetchComposers();
  }, []);

  return (

      <Router>
        <Routes>
          <Route path='/' element={<Login code={code} />} />
          <Route path='/timeline' element={<Timeline rComposer={rComposer} bComposer={bComposer} cComposer={cComposer} roComposer={roComposer} mComposer={mComposer} aComposer={aComposer} />} />
          <Route path='/results' element={<Results name={name} code={code}  />} />
        </Routes>
      </Router>
  
  );
}

export default App;

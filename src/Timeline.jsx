import {useState} from 'react'
import { styled } from '@mui/material/styles'

const Composer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'center',
    position: 'absolute',
    left: '20rem',
    top: '8rem',
})
const Header = styled('div')({
    height: '6rem',
    width: '100vw',
    backgroundColor: '#070707',
    color: 'white'
})
const ComposerDiv = styled('div')({
    width: '100vw',
    height: '684rem',
    backgroundColor: '#121212'
})
const TimelineDiv = styled('div')({
    height: '684rem',
    width: '17.4rem',
    backgroundColor: '#000',
    position: 'absolute'
})

export const Timeline = ({composers}) => {

    const [color, setColor] = useState('white')

    const handleInput = (e) => {
        if (e) {
           setColor('transparent')
        }
        if (e.target.value === '') {
            setColor('white')
        }
    }
    const handleClick = (e) => {
        if (e) {
            setColor('white')
        }
    }
    return (
    <div>
    <Header>
        <form className="search-bar">
                <input onInput={handleInput} id="textsearch" type='text' title="Search"></input>
                <img className="search-icon" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-search-logistic-delivery-kiranshastry-lineal-kiranshastry.png"></img>
                <svg id="close-icon" role="button" height="24" width="24" viewBox="0 0 24 24"><path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path></svg>
                <input onClick={handleClick} style={{backgroundColor: color}} id="resetbutton" type="reset" value=""></input>
                <input className="searchbutton" type="submit" value="Search"></input>
        </form>
    </Header>
    <TimelineDiv></TimelineDiv>
    <ComposerDiv>
    <Composer>{composers}</Composer>
    </ComposerDiv>
    </div>
    )    
    }

export default Timeline;

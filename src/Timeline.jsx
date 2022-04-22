import {useState} from 'react'
import { styled } from '@mui/material/styles'

const Composer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'center',
    position: 'absolute',
    left: '12rem',
    top: '7rem',
})
const Header = styled('div')({
    height: '6rem',
    width: '100vw',
    backgroundColor: '#070707',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    gap: '2.7rem',
    position: 'fixed',
    zIndex: '1'
})
const ComposerDiv = styled('div')({
    width: '100vw',
    height: '218rem',
    backgroundColor: '#121212'
})
const TimelineDiv = styled('div')({
    height: '218rem',
    width: '8rem',
    backgroundColor: '#000',
    position: 'absolute'
})
const Renaissance = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '3rem',
    backgroundColor: '#27856a'
})
const Baroque = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '1rem',
    backgroundColor: '#1e3264'
})
const Classical = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '-1rem',
    backgroundColor: '#8d67ab'
})
const Romantic = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '-3rem',
    backgroundColor: '#1072ec'
})
const Modernist = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '-5rem',
    backgroundColor: '#a56752'
})
const AvantGarde = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '-7rem',
    backgroundColor: '#509bf5'
})
const Minimalist = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '-9rem',
    backgroundColor: '#e13400'
})
const EraText = styled('h3')({
    textAlign: 'center',
    position: 'relative',
    top: '7px'
})
const Eras = styled('div')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    gap: '3rem',
    left: '-1rem'
})

export const Timeline = ({composers}) => {
   
    // const [color, setColor] = useState('white')

    // const handleInput = (e) => {
    //     if (e) {
    //        setColor('transparent')
    //     }
    //     if (e.target.value === '') {
    //         setColor('white')
    //     }  
    // }
    // const handleClick = (e) => {
    //     if (e) {
    //         setColor('white')
    //     }
    // }
    return (
    <div>
    <Header>
        {/* <form className="search-bar">
                <input onInput={handleInput} id="textsearch" type='text' title="Search"></input>
                <img className="search-icon" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-search-logistic-delivery-kiranshastry-lineal-kiranshastry.png"></img>
                <svg id="close-icon" role="button" height="24" width="24" viewBox="0 0 24 24"><path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path></svg>
                <input onClick={handleClick} style={{backgroundColor: color}} id="resetbutton" type="reset" value=""></input>
                <input className="searchbutton" type="submit" value="Search"></input>
        </form> */}
    <Eras>
        <Renaissance>
            <EraText>Renaissance</EraText>
        </Renaissance>
        <Baroque>
            <EraText>Baroque</EraText>
        </Baroque>
        <Classical>
            <EraText>Classical</EraText>
        </Classical>
        <Romantic>
            <EraText>Romantic</EraText>
        </Romantic>
        <Modernist>
            <EraText>Modernist</EraText>
        </Modernist>
        <AvantGarde>
            <EraText>Avant-garde</EraText>
        </AvantGarde>
        <Minimalist>
            <EraText>Minimalist</EraText>
        </Minimalist>
    </Eras>
     </Header>
    <TimelineDiv>
        <div className='timeline'>
            <h3 className='date1400'>1400</h3>
            <h3 className='date1500'>1500</h3>
            <h3 className='date1600'>1600</h3>
            <h3 className='date1700'>1700</h3>
            <h3 className='date1800'>1800</h3>
            <h3 className='date1900'>1900</h3>
            <h3 className='date2000'>2000</h3>
        </div>
    </TimelineDiv>
    <ComposerDiv>
        <Composer>{composers}</Composer>
    </ComposerDiv>
    </div>
    )    
    }

export default Timeline;
 
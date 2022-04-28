import { styled } from '@mui/material/styles'
import useState from 'react';

const Composer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '60px',
    alignItems: 'center',
    position: 'absolute',
    left: '11rem',
    top: '7rem',
    '@media (max-width: 1024px)': {
        gap: '20px',
    }
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
    height: '250rem',
    backgroundColor: '#121212',
    '@media (max-width: 1024px)': {
        height: '227rem'
    }
})
const TimelineDiv = styled('div')({
    height: '250rem', 
    width: '8rem',
    backgroundColor: '#000',
    position: 'absolute',
    '@media (max-width: 1024px)': {
        height: '227rem'
    }
})
const Renaissance = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '3rem',
    backgroundColor: '#27856a',
    '@media (max-width: 1024px)': {
        left: '1rem'
    }
})
const Baroque = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '1rem',
    backgroundColor: '#1e3264',
    '@media (max-width: 1024px)': {
        left: '-4.5rem'
    }
})
const Classical = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '-1rem',
    backgroundColor: '#8d67ab',
    '@media (max-width: 1024px)': {
        left: '-10rem'
    }
})
const Romantic = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '-3rem',
    backgroundColor: '#1072ec',
    '@media (max-width: 1024px)': {
        left: '-15.5rem'
    }
})
const Modernist = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '-5rem',
    backgroundColor: '#a56752',
    '@media (max-width: 1024px)': {
        left: '-21rem'
    }
})
const AvantGarde = styled('div')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    top: '7px',
    left: '-7rem',
    backgroundColor: '#509bf5',
    '@media (max-width: 1024px)': {
        left: '-26.5rem'
    },
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
    gap: '6.4rem',
})
const Era2000 = styled('h3')({
    color: '#fff',
    fontSize: '23px',
    position: 'absolute',
    top: '245rem',
    left: '1.6rem',
    '@media (max-width: 1024px)': {
        top: '222rem'
    }
})
const Era1400 = styled('h3')({
    color: '#fff',
    position: 'absolute',
    top: '6rem',
    left: '1.6rem',
    fontSize: '23px',
})
const Era1500 = styled('h3')({
    color: '#fff',
    fontSize: '23px',
    position: 'absolute',
    top: '29.5rem',
    left: '1.6rem',
})
const Era1600 = styled('h3')({
    color: '#fff',
    fontSize: '23px',
    position: 'absolute',
    top: '53rem',
    left: '1.6rem',
})
const Era1700 = styled('h3')({
    color: '#fff',
    fontSize: '23px',
    position: 'absolute',
    top: '87rem',
    left: '1.6rem',
})
const Era1800 = styled('h3')({
    color: '#fff',
    fontSize: '23px',
    position: 'absolute',
    top: '121rem',
    left: '1.6rem',
})
const Era1900 = styled('h3')({
    color: '#fff',
    fontSize: '23px',
    position: 'absolute',
    top: '200rem',
    left: '1.6rem',
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
            <Era1400 className='date1400'>1400</Era1400>
            <Era1500 className='date1500'>1500</Era1500>
            <Era1600 className='date1600'>1600</Era1600>
            <Era1700 className='date1700'>1700</Era1700>
            <Era1800 className='date1800'>1800</Era1800>
            <Era1900 className='date1900'>1900</Era1900>
            <Era2000 className='date2000'>2000</Era2000>
        </div>
    </TimelineDiv>
    <ComposerDiv>
        <Composer>{composers}</Composer>
    </ComposerDiv>
    </div>
    )    
    }

export default Timeline;
 
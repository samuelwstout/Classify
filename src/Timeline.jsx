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
    top: '1rem',
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
    width: '8rem',
    backgroundColor: '#000',
    position: 'absolute'
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
    //     const composerName = composers.map(composer => composer.props.children.props.children.props.children)
    //     const value = e.target.value
        
    // }
    // const handleClick = (e) => {
    //     if (e) {
    //         setColor('white')
    //     }
    // }
    return (
    <div>
    {/* <Header> */}
        {/* <form className="search-bar">
                <input onInput={handleInput} id="textsearch" type='text' title="Search"></input>
                <img className="search-icon" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-search-logistic-delivery-kiranshastry-lineal-kiranshastry.png"></img>
                <svg id="close-icon" role="button" height="24" width="24" viewBox="0 0 24 24"><path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path></svg>
                <input onClick={handleClick} style={{backgroundColor: color}} id="resetbutton" type="reset" value=""></input>
                <input className="searchbutton" type="submit" value="Search"></input>
        </form> */}
    {/* </Header> */}
    <TimelineDiv>
        <div className='timeline'>
            <h3 className='date1400'>1400</h3>
            <h3 className='date1450'>1450</h3>
            <h3 className='date1500'>1500</h3>
            <h3 className='date1550'>1550</h3>
            <h3 className='date1600'>1600</h3>
            <h3 className='date1650'>1650</h3>
            <h3 className='date1700'>1700</h3>
            <h3 className='date1750'>1750</h3>
            <h3 className='date1800'>1800</h3>
            <h3 className='date1850'>1850</h3>
            <h3 className='date1900'>1900</h3>
            <h3 className='date1950'>1950</h3>
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
 
import { styled } from '@mui/material/styles';
import {useState} from 'react';
import { Link } from "react-router-dom";

const EverythingDiv = styled('div')({
    '@media (min-width: 1200px)': {
        position: 'relative',
        right: '3rem',
    }
})
const SearchDiv = styled('div')({
    display: 'block',
    position: 'relative',
    top: '2rem',
    '@media (min-width: 320px)': {
        left: '1.5rem'
    },
    '@media (min-width: 329px)': {
        left: '3.8rem',
        top: '1rem'
    },
    '@media (min-width: 345px)': {
        left: '4.2rem'
    },
})
const SearchForm = styled('form')({
    display: 'inline-block',
})
const TextInput = styled('input')({
    boxSizing: 'border-box',
    fontSize: '1rem',
    borderRadius: '5rem',
    height: '2.5rem',
    width: '15rem',
    padding: '.5rem 3.25rem',
    border: 'none',
})
const SearchIcon = styled('img')({
    position: 'relative',
    top: '.6rem',
    right: '14.5rem',
})
const CloseIcon = styled('svg')({
    position: 'relative',
    right: '4.2rem',
    top: '.4rem',
})
const ResetButton = styled('input')({
    backgroundColor: '#fff',
    border: 'none',
    width: '2.1875rem',
    height: '2.25rem',
    borderRadius: '.625rem',
    position: 'relative',
    right: '-4.7rem',
    top: '-2.4rem',
    // border: '1px solid blue',
    '@media (min-width: 329px)': {
        right: '6rem',
        top: '.8rem'
    }
})
const SearchButton = styled('input')({
    position: 'relative',
    top: '-999px',
    left: '-999px',
    width: '0px',
    height: '0px',
})
const ErasContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '.5rem',
    position: 'relative',
    top: '1.4rem',
    '@media (min-width: 329px)': {
        left: '1rem'
    },
    '@media (min-width: 345px)': {
        top: '3rem'
    },
})
const EraContainer1 = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
})
const EraContainer2 = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
})
const All = styled('div')({
    width: '9rem',
    height: '5rem',
    backgroundColor: '#690202',
    borderRadius: '1rem',
})
const Renaissance = styled('div')({
    width: '9rem',
    height: '5rem',
    backgroundColor: '#27856a',
    borderRadius: '1rem',
})
const Baroque = styled('div')({
    width: '9rem',
    height: '5rem',
    backgroundColor: '#1e3264',
    borderRadius: '1rem',
})
const Classical = styled('div')({
    width: '9rem',
    height: '5rem',
    backgroundColor: '#8d67ab',
    borderRadius: '1rem',
})
const Romantic = styled('div')({
    width: '9rem',
    height: '5rem',
    backgroundColor: '#1072ec',
    borderRadius: '1rem',
})
const Modernist = styled('div')({
    width: '9rem',
    height: '5rem',
    backgroundColor: '#a56752',
    borderRadius: '1rem',
})
const AvantGarde = styled('div')({
    width: '9rem',
    height: '5rem',
    backgroundColor: '#509bf5',
    borderRadius: '1rem',
})
const Minimalist = styled('div')({
    width: '9rem',
    height: '5rem',
    backgroundColor: '#e13400',
    borderRadius: '1rem',
})
const Space = styled('div')({
    width: '100vw',
    height: '5rem',
})
const ComposerDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: '5rem',
    gap: '.5rem',
})
export const Timeline = ({composerData}) => {

    const [color, setColor] = useState('white');
    const [userInput, setUserInput] = useState('');

    const handleInput = (e) => {
     
        const input = e.target.value.toLowerCase();
        setUserInput(input)
        if (e) {
           setColor('transparent')
        }
        if (e.target.value === '') {
            setColor('white')
        }  
    }
    
    const filteredData = composerData.filter((item) => {
        if (userInput === '') {
            return null;
        }
        else {
            return item.toLowerCase().includes(userInput)
        }
    })

    const handleClick = (e) => {
        if (e) {
            setColor('white')
        }
    }

    const customColor = {'Renaissance': '#27856a', 'Baroque': '#1e3264', 'Classical': '#8d67ab', 'Romantic': '#1072ec', 'Modernist': '#a56752', 'Avant-garde': '#509bf5', 'Minimalist': '#e13400'}
    return (

    <EverythingDiv>
        <SearchDiv align="center">
            <SearchForm>
                    <TextInput onChange={handleInput} id="textsearch" type='text' title="Search"></TextInput>
                    <SearchIcon src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-search-logistic-delivery-kiranshastry-lineal-kiranshastry.png"></SearchIcon>
                    <CloseIcon role="button" height="24" width="24" viewBox="0 0 24 24"><path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path></CloseIcon>
                    <ResetButton onClick={handleClick} style={{backgroundColor: color}} type="reset" value=""></ResetButton>
                    <SearchButton type="submit" value="Search"></SearchButton>
            </SearchForm>
        </SearchDiv>

    
        <ComposerDiv>
            <p>{filteredData}</p>
        </ComposerDiv>
    


        <ErasContainer>
            <EraContainer1>
                <All className='all'>
                    <h2 className='eraText'>Browse All</h2>
                </All>
                <Renaissance className='renaissance'>
                    <h2 className='eraText'>Renaissance</h2>
                </Renaissance>
                <Baroque className='baroque'>
                   <h2 className='eraText'>Baroque</h2>
                </Baroque>
                <Classical className='classical'>
                    <h2 className='eraText'>Classical</h2>
                </Classical>
            </EraContainer1>

            <EraContainer2>
                <Romantic className='romantic'>
                    <h2 className='eraText'>Romantic</h2>
                </Romantic>
                <Modernist className='modernist'>
                    <h2 className='eraText'>Modernist</h2>
                </Modernist>
                <AvantGarde className='avantGarde'>
                    <h2 className='eraText'>Avant-garde</h2>
                </AvantGarde>
                <Minimalist className='minimalist'>
                    <h2 className='eraText'>Minimalist</h2>
                </Minimalist>
            </EraContainer2>
        </ErasContainer>
        <Space></Space>
    </EverythingDiv>

    )    
    }

export default Timeline;
 
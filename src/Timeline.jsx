import { styled } from '@mui/material/styles'
import {useState} from 'react';

const SearchDiv = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '5rem',
    right: '15.5rem',
    '@media (max-width: 819px)': {
        top: '5.3rem',
        right: '12.1rem',
    },
    '@media (max-width: 460px)': {
        right: '8.8rem'
    }
})
const SearchForm = styled('form')({
    position: 'absolute',
    display: 'inline-block',
})
const TextInput = styled('input')({
    boxSizing: 'border-box',
    fontSize: '1rem',
    borderRadius: '5rem',
    height: '2.5rem',
    width: '23.75rem',
    padding: '.5rem 3.25rem',
    border: 'none',
    '@media (max-width: 460px)': {
        width: '17rem'
    }
})
const SearchIcon = styled('img')({
    position: 'relative',
    top: '.6875rem',
    right: '23.125rem',
    '@media (max-width: 819px)': {
        top: '-2.1rem',
        right: '10.4rem'
    },
    '@media (max-width: 460px)': {
        right: '7rem'
    }
})
const CloseIcon = styled('svg')({
    position: 'absolute',
    right: '3rem',
    top: '.8125rem',
    '@media (max-width: 819px)': {
        right: '1.8rem',
        top: '.6rem'
    },
    '@media (max-width: 787px)': {
        right: '1.35rem'
    },
    '@media (max-width: 750px)': {
        right: '1.1rem'
    }
    
})
const ResetButton = styled('input')({
    backgroundColor: '#fff',
    border: 'none',
    width: '2.1875rem',
    height: '2.25rem',
    position: 'absolute',
    right: '2.7rem',
    top: '.4375rem',
    borderRadius: '.625rem',
    '@media (max-width: 819px)': {
        right: '1.4rem',
        top: '.15rem',
    },
    '@media (max-width: 787px)': {
        right: '1rem'
    },
    '@media (max-width: 750px)': {
        right: '.8rem'
    },
})
const SearchButton = styled('input')({
    position: 'absolute',
    top: '-999px',
    left: '-999px',
    width: '0px',
    height: '0px',
})
const EraContainer1 = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: '31.2rem',
    top: '6rem',
    gap: '1rem',
})
const All = styled('div')({
    width: '25rem',
    height: '10rem',
    border: '1px solid white',
})
const Renaissance = styled('div')({
    width: '25rem',
    height: '10rem',
    border: '1px solid white',
})
const Baroque = styled('div')({
    width: '25rem',
    height: '10rem',
    border: '1px solid white',
})
const Classical = styled('div')({
    width: '25rem',
    height: '10rem',
    border: '1px solid white',
})
const EraContainer2 = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: '57.5rem',
    bottom: '37.5rem',
    gap: '1rem',
})
const Romantic = styled('div')({
    width: '25rem',
    height: '10rem',
    border: '1px solid white',
})
const Modernist = styled('div')({
    width: '25rem',
    height: '10rem',
    border: '1px solid white',
})
const AvantGarde = styled('div')({
    width: '25rem',
    height: '10rem',
    border: '1px solid white',
})
const Minimalist = styled('div')({
    width: '25rem',
    height: '10rem',
    border: '1px solid white',
})

export const Timeline = () => {
   
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
        <SearchDiv>
            <SearchForm>
                    <TextInput onInput={handleInput} id="textsearch" type='text' title="Search"></TextInput>
                    <SearchIcon src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-search-logistic-delivery-kiranshastry-lineal-kiranshastry.png"></SearchIcon>
                    <CloseIcon role="button" height="24" width="24" viewBox="0 0 24 24"><path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path></CloseIcon>
                    <ResetButton onClick={handleClick} style={{backgroundColor: color}} type="reset" value=""></ResetButton>
                    <SearchButton type="submit" value="Search"></SearchButton>
            </SearchForm>
            <EraContainer1>
                <All>Browse All</All>
                <Renaissance>Renaissance</Renaissance>
                <Baroque>Baroque</Baroque>
                <Classical>Classical</Classical>
            </EraContainer1>

            <EraContainer2>
                <Romantic>Romantic</Romantic>
                <Modernist>Modernist</Modernist>
                <AvantGarde>Avant-garde</AvantGarde>
                <Minimalist>Minimalist</Minimalist>
            </EraContainer2>
        </SearchDiv>
    </div>

    )    
    }

export default Timeline;
 
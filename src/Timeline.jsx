import { styled } from '@mui/material/styles'
import {useState} from 'react';

const SearchDiv = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '5rem',
    right: '12rem'
})
const SearchForm = styled('form')({
    position: 'absolute',
    display: 'inline-block'
})
const TextInput = styled('input')({
    boxSizing: 'border-box',
    fontSize: '1rem',
    borderRadius: '5rem',
    height: '2.5rem',
    width: '23.75rem',
    padding: '.5rem 3.25rem',
    border: 'none',
})
const SearchIcon = styled('img')({
    position: 'relative',
    top: '.6875rem',
    right: '23.125rem',
})
const CloseIcon = styled('svg')({
    position: 'absolute',
    right: '3rem',
    top: '.8125rem',
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
})
const SearchButton = styled('input')({
    position: 'absolute',
    top: '-999px',
    left: '-999px',
    width: '0px',
    height: '0px',
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
        </SearchDiv>
    </div>

    )    
    }

export default Timeline;
 
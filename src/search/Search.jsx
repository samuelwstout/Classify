import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setComposerName, selectName } from '../features/composerName/composerNameSlice';
import './search.scss'

const EverythingDiv = styled('div')({
 
})
const SearchDiv = styled('div')({
    display: 'block',
    position: 'relative',
    top: '2rem',
})
const SearchForm = styled('form')({
    display: 'inline-block',
})
const TextInput = styled('input')({
    boxSizing: 'border-box',
    fontSize: '1rem',
    borderRadius: '5rem',
    height: '2.5rem',
    width: '20rem',
    padding: '.5rem 3.25rem',
    border: 'none',
})
const SearchIcon = styled('img')({
    position: 'relative',
    top: '.6rem',
    right: '19.3rem',
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
    right: '6rem',
    top: '0.8rem',
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
    top: '5rem',
    left: '-3rem',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    left: '-2rem',
    top: '3.5rem',
    gap: '.5rem',
    justifyContent: 'center',
})
const ComposerButton = styled('button')({
    width: '8rem',
    height: '5rem',
    position: 'relative',
    right: '1rem',
    border: 'none',
    borderRadius: '25px',
  })
  const ComposerName = styled('h3')({
     position: 'relative',
     textDecoration: 'none',
     color: '#fff',
     letterSpacing: '1px',
  })
  

export const Search = ({composerData}) => {
    
    let navigate = useNavigate();
    useSelector(selectName);
    const dispatch = useDispatch();
  
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
        const names = item.name
        if (userInput === '') {
            return null;
        }
        else {
            return names.toLowerCase().includes(userInput)
        }
    })
    const mappedData = filteredData.map((item) => {
        const customColor = {'Renaissance': '#27856a', 'Baroque': '#1e3264', 'Classical': '#8d67ab', 'Romantic': '#1072ec', 'Modernist': '#a56752', 'Avant-garde': '#509bf5', 'Minimalist': '#e13400'}
        return (
           <div onClick={() => navigate('../results')} key={item.id}>
            <ComposerButton style={{backgroundColor: customColor[item.era]}} onClick={() => dispatch(setComposerName(item.name))}>
                <ComposerName>{item.name}</ComposerName>
            </ComposerButton>
            </div>
        )
    })


    const handleClick = (e) => {
        if (e) {
            setColor('white')
        }
    }
   
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

        <ComposerDiv>{mappedData}</ComposerDiv>

        <dl>
            <dd className="percentage percentage-11"></dd>
            <dd className="percentage percentage-49"></dd>
            <dd className="percentage percentage-16"></dd>
            <dd className="percentage percentage-5"></dd>
            <dd className="percentage percentage-2"></dd>
            <dd className="percentage percentage-2"></dd>
        <div className="dates">
            <span className="text">1400</span>
            <span className="text">1450</span>
            <span className="text">1500</span>
            <span className="text">1550</span>
            <span className="text">1600</span>
            <span className="text">1650</span>
            <span className="text">1700</span>
            <span className="text">1750</span>
            <span className="text">1800</span>
            <span className="text">1850</span>
            <span className="text">1900</span>
            <span className="text">1950</span>
            <span className="text">2000</span>
        </div>
        </dl>
    
        <Space></Space>
    </EverythingDiv>

    )    
    }

export default Search;
 
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
    left: '2.5rem'
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
            <dd className="percentage dufay"></dd>
            <dd className="percentage binchois"></dd>
            <dd className="percentage ockeghem"></dd>
            <dd className="percentage busnois"></dd>
            <dd className="percentage tinctoris"></dd>
            <dd className="percentage agricola"></dd>
            <dd className="percentage prez"></dd>
            <dd className="percentage isaac"></dd>
            <dd className="percentage rue"></dd>
            <dd className="percentage obrecht"></dd>
            <dd className="percentage janequin"></dd>
            <dd className="percentage taverner"></dd>
            <dd className="percentage willaert"></dd>
            <dd className="percentage gombert"></dd>
            <dd className="percentage morales"></dd>
            <dd className="percentage milan"></dd>
            <dd className="percentage tallis"></dd>
            <dd className="percentage arcadelt"></dd>
            <dd className="percentage palestrina"></dd>
            <dd className="percentage lassus"></dd>
            <dd className="percentage byrd"></dd>
            <dd className="percentage victoria"></dd>
            <dd className="percentage caccini"></dd>
            <dd className="percentage gabrieli"></dd>
            <dd className="percentage sweelinck"></dd>
            <dd className="percentage dowland"></dd>
            <dd className="percentage gesualdo"></dd>
            <dd className="percentage monteverdi"></dd>
            <dd className="percentage praetorius"></dd>
            <dd className="percentage schutz"></dd>
            <dd className="percentage cavalli"></dd>
            <dd className="percentage froberger"></dd>
            <dd className="percentage lully"></dd>
            <dd className="percentage buxtehude"></dd>
            <dd className="percentage charpentier"></dd>
            <dd className="percentage corelli"></dd>
            <dd className="percentage pachelbel"></dd>
            <dd className="percentage purcell"></dd>
            <dd className="percentage scarlatti"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>
            <dd className="percentage"></dd>

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
        <p className="dufayP">Dufay</p>
        <p className="binchoisP">Binchois</p>
        <p className="ockeghemP">Ockeghem</p>
        <p className="busnoisP">Busnois</p>
        <p className="tinctorisP">Tinctoris</p>
        <p className="agricolaP">Agricola</p>
        <p className="prezP">Josquin des Prez</p>
        <p className="isaacP">Isaac</p>
        <p className="rueP">de la Rue</p>
        <p className="obrechtP">Obrecht</p>
        <p className="janequinP">Janequin</p>
        <p className="tavernerP">Taverner</p>
        <p className="willaertP">Willaert</p>
        <p className="gombertP">Gombert</p>
        <p className="moralesP">Morales</p>
        <p className="milanP">de Milan</p>
        <p className="tallisP">Tallis</p>
        <p className="arcadeltP">Acradelt</p>
        <p className="palestrinaP">Palestrina</p>
        <p className="lassusP">Lassus</p>
        <p className="byrdP">Byrd</p>
        <p className="victoriaP">Victoria</p>
        <p className="cacciniP">Caccini</p>
        <p className="gabrieliP">Gabrieli</p>
        <p className="sweelinckP">Sweelinck</p>
        <p className="dowlandP">Dowland</p>
        <p className="gesualdoP">Gesualdo</p> 
        <p className="monteverdiP">Monteverdi</p> 
        <p className="praetoriusP">Praetorius</p> 
        <p className="schutzP">Schütz</p> 
        <p className="cavalliP">Cavalli</p>
        <p className="frobergerP">Froberger</p>
        <p className="lullyP">Lully</p>
        <p className="buxtehudeP">Buxtehude</p>
        <p className="charpentierP">Charpentier</p>
        <p className="corelliP">Corelli</p>
        <p className="pachelbelP">Pachelbel</p>
        <p className="purcellP">Purcell</p>
        <p className="scarlattiP">Scarlatti</p>



        <Space></Space>
    </EverythingDiv>

    )    
    }

export default Search;
 
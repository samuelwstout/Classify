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
        const customColor = {'Renaissance': '#27856a', 'Baroque': '#1e3264', 'Classical': '#8d67ab', 'Romantic': '#1072ec', 'Modernist': '#a56752', 'Avant-garde': '#e86718', 'Minimalist': '#e13400'}
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
            <dd className="percentage couperin"></dd>
            <dd className="percentage albinoni"></dd>
            <dd className="percentage vivaldi"></dd>
            <dd className="percentage telemann"></dd>
            <dd className="percentage rameau"></dd>
            <dd className="percentage jsbach"></dd>
            <dd className="percentage dscarlatti"></dd>
            <dd className="percentage handel"></dd>
            <dd className="percentage hasse"></dd>
            <dd className="percentage pergolesi"></dd>
            <dd className="percentage gluck"></dd>
            <dd className="percentage cpebach"></dd>
            <dd className="percentage stamitz"></dd>
            <dd className="percentage soler"></dd>
            <dd className="percentage haydn"></dd>
            <dd className="percentage jcbach"></dd>
            <dd className="percentage salieri"></dd>
            <dd className="percentage bortniansky"></dd>
            <dd className="percentage clementi"></dd>
            <dd className="percentage mozart"></dd>
            <dd className="percentage cherubini"></dd>
            <dd className="percentage beethoven"></dd>
            <dd className="percentage field"></dd>
            <dd className="percentage paganini"></dd>
            <dd className="percentage weber"></dd>
            <dd className="percentage czemy"></dd>
            <dd className="percentage rossini"></dd>
            <dd className="percentage schubert"></dd>
            <dd className="percentage donizetti"></dd>
            <dd className="percentage berlioz"></dd>
            <dd className="percentage mendelssohn"></dd>
            <dd className="percentage chopin"></dd>
            <dd className="percentage schumann"></dd>
            <dd className="percentage liszt"></dd>
            <dd className="percentage wagner"></dd>
            <dd className="percentage verdi"></dd>
            <dd className="percentage offenbach"></dd>
            <dd className="percentage franck"></dd>
            <dd className="percentage smetana"></dd>
            <dd className="percentage bruckner"></dd>
            <dd className="percentage strauss2"></dd>
            <dd className="percentage brahms"></dd>
            <dd className="percentage borodin"></dd>
            <dd className="percentage saintsaens"></dd>
            <dd className="percentage bizet"></dd>
            <dd className="percentage mussorgsky"></dd>
            <dd className="percentage tchaikovsky"></dd>
            <dd className="percentage dvorak"></dd>
            <dd className="percentage grieg"></dd>
            <dd className="percentage rimsky"></dd>
            <dd className="percentage faure"></dd>
            <dd className="percentage elgar"></dd>
            <dd className="percentage ysaye"></dd>
            <dd className="percentage puccini"></dd>
            <dd className="percentage mahler"></dd>
            <dd className="percentage delius"></dd>
            <dd className="percentage debussy"></dd>
            <dd className="percentage strauss"></dd>
            <dd className="percentage sibelius"></dd>
            <dd className="percentage granados"></dd>
            <dd className="percentage vwilliams"></dd>
            <dd className="percentage rachmaninoff"></dd>
            <dd className="percentage schoenberg"></dd>
            <dd className="percentage holst"></dd>
            <dd className="percentage ives"></dd>
            <dd className="percentage ravel"></dd>
            <dd className="percentage falla"></dd>
            <dd className="percentage bartok"></dd>
            <dd className="percentage stravinsky"></dd>
            <dd className="percentage varese"></dd>
            <dd className="percentage prokofiev"></dd>
            <dd className="percentage hindemith"></dd>
            <dd className="percentage poulenc"></dd>
            <dd className="percentage copland"></dd>
            <dd className="percentage partch"></dd>
            <dd className="percentage shostakovich"></dd>
            <dd className="percentage messiaen"></dd>
            <dd className="percentage barber"></dd>
            <dd className="percentage cage"></dd>
            <dd className="percentage lutoslawski"></dd>
            <dd className="percentage britten"></dd>
            <dd className="percentage moondog"></dd>
            <dd className="percentage xenakis"></dd>
            <dd className="percentage ligeti"></dd>
            <dd className="percentage boulez"></dd>
            <dd className="percentage stockhausen"></dd>
            <dd className="percentage rautavaara"></dd>
            <dd className="percentage crumb"></dd>
            <dd className="percentage gubaidulina"></dd>
            <dd className="percentage shchedrin"></dd>
            <dd className="percentage schnittke"></dd>
            <dd className="percentage birtwistle"></dd>
            <dd className="percentage riley"></dd>
            <dd className="percentage young"></dd>
            <dd className="percentage part"></dd>
            <dd className="percentage reich"></dd>
            <dd className="percentage glass"></dd>
            <dd className="percentage adams"></dd>

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
        <div onClick={() => navigate('../results')}>
        <p className="dufayP" onClick={() => dispatch(setComposerName('Guillaume Dufay'))}>Dufay</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="binchoisP" onClick={() => dispatch(setComposerName('Gilles Binchois'))}>Binchois</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="ockeghemP" onClick={() => dispatch(setComposerName('Johannes Ockeghem'))}>Ockeghem</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="busnoisP" onClick={() => dispatch(setComposerName('Antoine Busnois'))}>Busnois</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="tinctorisP" onClick={() => dispatch(setComposerName('Johannes Tinctoris'))}>Tinctoris</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="agricolaP" onClick={() => dispatch(setComposerName('Alexander Agricola'))}>Agricola</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="prezP" onClick={() => dispatch(setComposerName('Josquin des Prez'))}>Josquin des Prez</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="isaacP" onClick={() => dispatch(setComposerName('Heinrich Isaac'))}>Isaac</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="rueP" onClick={() => dispatch(setComposerName('Pierre de la Rue'))}>de la Rue</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="obrechtP" onClick={() => dispatch(setComposerName('Jacob Obrecht'))}>Obrecht</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="janequinP" onClick={() => dispatch(setComposerName('Clément Janequin'))}>Janequin</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="tavernerP" onClick={() => dispatch(setComposerName('John Taverner'))}>Taverner</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="willaertP" onClick={() => dispatch(setComposerName('Adrian Willaert'))}>Willaert</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="gombertP" onClick={() => dispatch(setComposerName('Nicolas Gombert'))}>Gombert</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="moralesP" onClick={() => dispatch(setComposerName('Cristóbal de Morales'))}>Morales</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="milanP" onClick={() => dispatch(setComposerName('Luis de Milán'))}>de Milan</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="tallisP" onClick={() => dispatch(setComposerName('Thomas Tallis'))}>Tallis</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="arcadeltP" onClick={() => dispatch(setComposerName('Jacques Arcadelt'))}>Acradelt</p>
        </div>
        <div onClick={() => navigate('../results')}> 
        <p className="palestrinaP" onClick={() => dispatch(setComposerName('Giovanni Pierluigi da Palestrina'))}>Palestrina</p>
        </div>
        <div onClick={() => navigate('../results')}> 
        <p className="lassusP" onClick={() => dispatch(setComposerName('Orlande de Lassus'))}>Lassus</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="byrdP" onClick={() => dispatch(setComposerName('William Byrd'))}>Byrd</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="victoriaP" onClick={() => dispatch(setComposerName('Tomás Luis de Victoria'))}>Victoria</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="cacciniP" onClick={() => dispatch(setComposerName('Giulio Caccini'))}>Caccini</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="gabrieliP" onClick={() => dispatch(setComposerName('Giovanni Gabrieli'))}>Gabrieli</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="sweelinckP" onClick={() => dispatch(setComposerName('Jan Pieterszoon Sweelinck'))}>Sweelinck</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="dowlandP" onClick={() => dispatch(setComposerName('John Dowland'))}>Dowland</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="gesualdoP" onClick={() => dispatch(setComposerName('Carlo Gesualdo'))}>Gesualdo</p> 
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="monteverdiP" onClick={() => dispatch(setComposerName('Claudio Monteverdi'))}>Monteverdi</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p className="praetoriusP" onClick={() => dispatch(setComposerName('Claudio Monteverdi'))}>Praetorius</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Heinrich Schütz'))} className="schutzP">Schütz</p> 
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Francesco Cavalli'))} className="cavalliP">Cavalli</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Johann Jakob Froberger'))} className="frobergerP">Froberger</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Jean-Baptiste Lully"'))} className="lullyP">Lully</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Dieterich Buxtehude'))} className="buxtehudeP">Buxtehude</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Marc-Antoine Charpentier'))} className="charpentierP">Charpentier</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Arcangelo Corelli'))} className="corelliP">Corelli</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Johann Pachelbel'))} className="pachelbelP">Pachelbel</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Henry Purcell'))} className="purcellP">Purcell</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Alessandro Scarlatti'))} className="scarlattiP">Scarlatti</p> 
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('François Couperin'))} className="couperinP">Couperin</p> 
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Tomaso Albinoni'))} className="albinoniP">Albinoni</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Antonio Vivaldi'))} className="vivaldiP">Vivaldi</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Georg Philipp Telemann'))} className="telemannP">Telemann</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Jean-Philippe Rameau'))} className="rameauP">Rameau</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Johann Sebastian Bach'))} className="jsbachP">JS Bach</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Domenico Scarlatti'))} className="dscarlattiP">D Scarlatti</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('George Frideric Handel'))} className="handelP">Handel</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Johann Adolf Hasse'))} className="hasseP">Hasse</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Giovanni Battista Pergolesi'))} className="pergolesiP">Pergolesi</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Christoph Willibald Gluck'))} className="gluckP">Gluck</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Carl Philipp Emanuel Bach'))} className="cpebachP">CPE Bach</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Johann Stamitz'))} className="stamitzP">Stamitz</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Antonio Soler'))} className="solerP">Soler</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Joseph Haydn'))} className="haydnP">Haydn</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Johann Christian Bach'))} className="jcbachP">JC Bach</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Antonio Salieri'))} className="salieriP">Salieri</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Dmitry Bortniansky'))} className="bortnianskyP">Bortniansky</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Muzio Clementi'))} className="clementiP">Clementi</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Wolfgang Amadeus Mozart'))} className="mozartP">Mozart</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Luigi Cherubini'))} className="cherubiniP">Cherubini</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Ludwig van Beethoven'))} className="beethovenP">Beethoven</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('John Field'))} className="fieldP">Field</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Niccolò Paganini'))} className="paganiniP">Paganini</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Carl Maria von Weber'))} className="weberP">Weber</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Carl Czerny'))} className="czemyP">Czemy</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Gioachino Rossini'))} className="rossiniP">Rossini</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Franz Schubert'))} className="schubertP">Schubert</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Gaetano Donizetti'))} className="donizettiP">Donizetti</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Hector Berlioz'))} className="berliozP">Berlioz</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Felix Mendelssohn'))} className="mendelssohnP">Mendelssohn</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Frédéric Chopin'))} className="chopinP">Chopin</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Robert Schumann'))} className="schumannP">Schumann</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Franz Liszt'))} className="lisztP">Liszt</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Richard Wagner'))} className="wagnerP">Wagner</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Giuseppe Verdi'))} className="verdiP">Verdi</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Jacques Offenbach'))} className="offenbachP">Offenbach</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('César Franck'))} className="franckP">Franck</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Bedřich Smetana'))} className="smetanaP">Smetana</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Anton Bruckner'))} className="brucknerP">Bruckner</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Johann Strauss II'))} className="strauss2P">Johann Strauss II</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Johannes Brahms'))} className="brahmsP">Brahms</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Alexander Borodin'))} className="borodinP">Borodin</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Camille Saint-Saëns'))} className="saintsaensP">Saint-Saëns</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Georges Bizet'))} className="bizetP">Bizet</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Modest Mussorgsky'))} className="mussorgskyP">Mussorgsky</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Pyotr Ilyich Tchaikovsky'))} className="tchaikovskyP">Tchaikovsky</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Antonín Dvořák'))} className="dvorakP">Dvořák</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Edvard Grieg'))} className="griegP">Grieg</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Nikolai Rimsky-Korsakov'))} className="rimskyP">Rimsky-Korsakov</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Gabriel Fauré'))} className="faureP">Fauré</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Edward Elgar'))} className="elgarP">Elgar</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Eugène Ysaÿe'))} className="ysayeP">Ysaÿe</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Giacomo Puccini'))} className="pucciniP">Puccini</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Gustav Mahler'))} className="mahlerP">Mahler</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Frederick Delius'))} className="deliusP">Delius</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Claude Debussy'))} className="debussyP">Debussy</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Richard Strauss'))} className="straussP">Richard Strauss</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Jean Sibelius'))} className="sibeliusP">Sibelius</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Enrique Granados'))} className="granadosP">Granados</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Ralph Vaughan Williams'))} className="vwilliamsP">Vaughan Williams</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Sergei Rachmaninoff'))} className="rachmaninoffP">Rachmaninoff</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Arnold Schoenberg'))} className="schoenbergP">Schoenberg</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Gustav Holst'))} className="holstP">Holst</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Charles Ives'))} className="ivesP">Ives</p>
        </div>        
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Maurice Ravel'))} className="ravelP">Ravel</p>
        </div>        
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Manuel de Falla'))} className="fallaP">de Falla</p>
        </div>        
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Béla Bartók'))} className="bartokP">Bartók</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Igor Stravinsky'))} className="stravinskyP">Stravinsky</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Edgard Varèse'))} className="vareseP">Varèse</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Sergei Prokofiev'))} className="prokofievP">Prokofiev</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Paul Hindemith'))} className="hindemithP">Hindemith</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Francis Poulenc'))} className="poulencP">Poulenc</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Aaron Copland'))} className="coplandP">Copland</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Harry Partch'))} className="partchP">Partch</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Dmitri Shostakovich'))} className="shostakovichP">Shostakovich</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Olivier Messiaen'))} className="messiaenP">Messiaen</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Samuel Barber'))} className="barberP">Barber</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('John Cage'))} className="cageP">Cage</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Witold Lutosławski'))} className="lutoslawskiP">Lutoslawski</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Benjamin Britten'))} className="brittenP">Britten</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Moondog'))} className="moondogP">Moondog</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Iannis Xenakis'))} className="xenakisP">Xenakis</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('György Ligeti'))} className="ligetiP">Ligeti</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Pierre Boulez'))} className="boulezP">Boulez</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Karlheinz Stockhausen'))} className="stockhausenP">Stockhausen</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Einojuhani Rautavaara'))} className="rautavaaraP">Rautavaara</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('George Crumb'))} className="crumbP">Crumb</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Sofia Gubaidulina'))} className="gubaidulinaP">Gubaidulina</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Rodion Shchedrin'))} className="shchedrinP">Shchedrin</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Alfred Schnittke'))} className="schnittkeP">Schnittke</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Harrison Birtwistle'))} className="birtwistleP">Birtwistle</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Terry Riley'))} className="rileyP">Riley</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('La Monte Young'))} className="youngP">Young</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Arvo Pärt'))} className="partP">Pärt</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Steve Reich'))} className="reichP">Reich</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('Philip Glass'))} className="glassP">Glass</p>
        </div>
        <div onClick={() => navigate('../results')}>
        <p onClick={() => dispatch(setComposerName('John Adams'))} className="adamsP">Adams</p>
        </div>



        <Space></Space>
    </EverythingDiv>
 
    )    
    }

export default Search;
 
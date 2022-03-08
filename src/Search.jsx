import {useState, useEffect} from 'react'
import useAuth from './useAuth'
import './App.css';
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    clientId: 'a45eb12484d24c4199050bdefee6d24b',
})

export const Search = () => {

    const accessToken = useAuth(code)

    const [color, setColor] = useState('white')
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        spotifyApi.searchTracks(search).then(res => {
            console.log(res)
        })
    }, [search, accessToken])


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
         <form className="search-bar">
             <input onChange={e => setSearch(e.target.value)} onInput={handleInput} id="textsearch" type='text' title="Search"></input>
             <img className="search-icon" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-search-logistic-delivery-kiranshastry-lineal-kiranshastry.png"></img>
             <svg id="close-icon" role="button" height="24" width="24" viewBox="0 0 24 24"><path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path></svg>
             <input onClick={handleClick} style={{backgroundColor: color}} id="resetbutton" type="reset" value=""></input>
             <input className="searchbutton" type="submit" value="Search"></input>
         </form>
    </div>
  )
}

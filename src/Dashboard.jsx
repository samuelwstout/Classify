import {useState, useEffect} from 'react'
import useAuth from './useAuth'
import './App.css'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TrackSearchResult'
import TrackArtistResult from './TrackArtistResult'
import TrackAlbumResult from './TrackAlbumResult'
import Player from './Player'

const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})

export const Dashboard = ({code}) => {
    const accessToken = useAuth(code)

    const [color, setColor] = useState('white')
    const [search, setSearch] = useState('')
    const [trackResults, setTrackResults] = useState([])
    const [artistResults, setArtistResults] = useState([])
    // const [popular, setPopular] = useState([])
    const [playingTrack, setPlayingTrack] = useState()

    const chooseTrack = (track) => {
      setPlayingTrack(track)
      setSearch('')
    }

    useEffect(() => {
      if (!accessToken) return
      spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

    useEffect(() => {
    if (!search) return setTrackResults([])
    if (!accessToken) return
    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setTrackResults(res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
          (smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
          }, track.album.images[0])
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
            duration: track.duration_ms/60000
          }
        }))
    })
    return () => cancel = true
  }, [search, accessToken])

  const fourTrackResults = trackResults.slice(0, trackResults.length - 16)

  useEffect(() => {
    if (!search) return setArtistResults([])
    if (!accessToken) return
    let cancel = false

    spotifyApi.searchArtists(search).then(res => {
      if (cancel) return
      setArtistResults(res.body.artists.items.map(artist => {
        const smallestArtistImage = artist.images.reduce(
          (smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
          }, artist.images[0])
        
          return {
          artistImg: smallestArtistImage.url,
          artistName: artist.name,
          artistId: artist.uri.replace('spotify:artist:', ''),
          }
      })
    )})
    return () => cancel = true
  }, [search, accessToken])

  useEffect(() => {
    if (!search) return 
    if (!accessToken) return
    let cancel = false

   spotifyApi.searchArtists(search).then(res => {
     if (cancel) return
    const artistObj = res.body.artists.items
    artistObj.reduce((initial, item) => {
      if (item.popularity > initial) {
        Math.max(item.popularity)
        let mostPopular = item
        console.log(mostPopular)
      }
    }, 0)
   })
  },[search, accessToken])

//For 3/12, be able to display values from mostPopular

  const fiveArtistResults = artistResults.slice(0, artistResults.length - 15)
 

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
           <svg id="close-icon" role="button" height="24" width="24" viewBox="0 0 24 24"><path className='x' d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path></svg>
           <input onClick={handleClick} style={{backgroundColor: color}} id="resetbutton" type="reset" value=""></input>
           <input className="searchbutton" type="submit" value="Search"></input>
       </form>
    <div className="flex-wrapper">
      <h3 className='songs'>Songs</h3>
      <h3 className='topResult'>Top Result</h3>
      <h3 className='featuring'>Featuring artistName</h3>
      <h3 className='artists'>Artists</h3>
      <h3 className='albums'>Albums</h3>
      <h3 className='playlists'>Playlists</h3>
       <div className="trackResults">
        {fourTrackResults.map(track => (
          <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
        ))}
       </div>
       <div className='artistResults'>
         {fiveArtistResults.map(artist => (
           <TrackArtistResult artist={artist} key={artist.uri} chooseTrack={chooseTrack} />
         ))}
       </div>
       <div className='albumResults'>
         <TrackAlbumResult />
       </div>
       <div className="player">
       <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
       </div>
    </div>
  </div>
)
}

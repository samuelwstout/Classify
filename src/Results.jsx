import {useState, useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Player from './Player'
import useAuth from './useAuth'

const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export const Results = ({ name, code}) => {
  const accessToken = useAuth(code)

  const [artistId, setArtistId] = useState([])
  const [tracks, setTracks] = useState([])
  const [albums, setAlbums] = useState([])
  const [albumId, setAlbumId] = useState([])
  const [albumTracks, setAlbumTracks] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [albumImg, setAlbumImg] = useState()

  //set access token
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  //to get artist id
  useEffect(() => {
    if (!name) return setArtistId([])
    if (!accessToken) return 
    let cancel = false
    spotifyApi.searchArtists(name).then(res => {
      if (cancel) return
      setArtistId(res.body.artists.items[0].id)
    })
  }, [name, accessToken])

  //to get top tracks from artist id
  useEffect(() => {
    if (!artistId) return setTracks([])
    if (!accessToken) return
    let cancel = false
    spotifyApi.getArtistTopTracks(artistId, 'US').then(res => {
      if (cancel) return
      setTracks(res.body.tracks.map((track) => {
        const smallestImg = track.album.images.reduce(
          (smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
          }, track.album.images[0])
        return (
          <button onClick={() => setPlayingTrack(track)} key={track.id}>
            <img src={smallestImg.url}  />
            <p>{track.name}</p>
          </button>
        )
      }))
    })
  }, [artistId, accessToken])

//if user clicks on album, get album id
useEffect(() => {
  if (!artistId) return setAlbums([])
  if (!accessToken) return
  let cancel = false
  spotifyApi.getArtistAlbums(artistId).then(res => {
    if (cancel) return
    setAlbums(res.body.items.map((item) => {
      const smallestImg = item.images.reduce(
        (smallest, image) => {
          if (image.height < smallest.height) return image
          return smallest
        }, item.images[0])
      return (
        <div onClick={() => setAlbumImg(smallestImg.url)}>
         <button onClick={() => setAlbumId(item.id)} key={item.id}>
          <img src={smallestImg.url} />
          <p>{item.name}</p>
        </button>
        </div>
        )
      }))
    })
  }, [artistId, accessToken])
  

useEffect(() => {
  if (!albumId) return setAlbumTracks([])
  if (!accessToken) return
  let cancel = false
  spotifyApi.getAlbumTracks(albumId).then(res => {  
    if (cancel) return
    setAlbumTracks(res.body.items.map((track) => {
      return (
        <div onClick={() => setPlayingTrack(track)}>
          <img src={albumImg} />
          <p>{track.name}</p>
        </div>
      )
    }))
  })
}, [albumId, accessToken])



  return (
  <div>
    <a className='timelineBtn' href={AUTH_URL}>Timeline</a>
    <div>
      <h3>Tracks</h3>
      {tracks}
    </div>
    <div>
      <h3>Albums</h3>
      {albums}
    </div>
    <div>
      <h3>Album tracks</h3>
      {albumTracks}
    </div>
    <div>
      <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
    </div>
  </div>
  )
}

export default Results;



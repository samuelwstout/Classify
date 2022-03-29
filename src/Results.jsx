import {useState, useEffect} from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export const Results = ({ name, code}) => {
  const accessToken = useAuth(code)

  const [artistId, setArtistId] = useState([])
  const [tracks, setTracks] = useState([])
  const [albums, setAlbums] = useState([])
  // const [related, setRelated] = useState([])
  const [albumId, setAlbumId] = useState([])
  const [albumTracks, setAlbumTracks] = useState([])

  //Set access token
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
      setTracks(res.body.tracks.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
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
        const handleClick = () => {
          setAlbumId(item.id)
        }
        return (
          <div onClick={handleClick} key={item.id}>
            <p>{item.name}</p>
          </div>
        )
      }))
    })
  }, [artistId, accessToken])


// useEffect(() => {
//   if (!artistId) return setRelated([])
//   if (!accessToken) return
//   let cancel = false
//   spotifyApi.getArtistRelatedArtists(artistId).then(res => {
//     if (cancel) return
//     setRelated(res.body.artists.map((item) => {
//       return (
//         <div key={item.id}>
//           <p>{item.name}</p>
//         </div>
//       )
//     }))
//   })
// }, [artistId, accessToken])

useEffect(() => {
  if (!albumId) return setAlbumTracks([])
  if (!accessToken) return
  let cancel = false
  spotifyApi.getAlbumTracks(albumId).then(res => {
    if (cancel) return
    setAlbumTracks(res.body.items.map((item => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      )
    })))
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
      {/* <div>
        <h3>Related Artists</h3>
        {related}
      </div> */}
    </div>
  )
}

export default Results;


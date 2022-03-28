import {useState, useEffect} from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'


const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export const Results = ({ name, code}) => {
  const accessToken = useAuth(code)
  const [tracks, setTracks] = useState([])
  
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
}, [accessToken])

  useEffect(() => {
    if (!name) return setTracks([])
    if (!accessToken) return
    let cancel = false
    spotifyApi.searchTracks(name).then(res => {
      if (cancel) return
      setTracks(res.body.tracks.items.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        )
      }))
    })
  }, [name, accessToken])

  return (
    <div className='timelineBtn'>
      <a href={AUTH_URL}>Timeline</a> 
      <div >
        {tracks}
      </div>
    </div>
  )
}

export default Results;


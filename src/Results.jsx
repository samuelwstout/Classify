import {useState, useEffect} from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})

export const Results = ({ name, code }) => {
  const accessToken = useAuth(code)

  const [results, setResults] = useState([])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
}, [accessToken])

  useEffect(() => {
    if (!name) return setResults([])
    if (!accessToken) return 
    let cancel = false
    spotifyApi.searchTracks(name).then(res => {
      if (cancel) return
      setResults(res.body.tracks.items.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        )
      }))
    })
  }, [name, accessToken])

  return (
    <div>
      {results}
    </div>
  )
}

export default Results;


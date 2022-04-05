import {useState, useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Player from './Player'
import useAuth from './useAuth'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const TimelineButton = styled(Button)({
  border: '1px solid black'
})
const TimelineLink = styled('a')({
  textDecoration: 'none'
})
const TracksHeading = styled('h3')({
  position: 'relative',
  left: '2rem',
})
const TrackDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '1rem 7rem',
  position: 'relative',
  left: '4rem',
  border: 'none',
})
const Track = styled('button')({
  whiteSpace: 'hidden',
  height: '9rem',
  width: '35rem',
  overflow: 'hidden',
  textOverflow: 'clip',
  border: 'none',
  ':hover': {
    backgroundColor: '#e0e0e0'
  }
})
const TrackImg = styled('img')({
  width: '7rem',
  height: '7rem',
  position: 'relative',
  right: '13rem',
  top: '1.1rem'
})
const TrackName = styled('h3')({
  position: 'relative',
  left: '10rem',
  bottom: '6rem',
  textAlign: 'left',
  textSize: '14px',
})
const AlbumsHeading = styled('h3')({
  position: 'absolute',
  top: '60rem',
  left: '2rem',
})
const AlbumDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '4rem 6rem',
  position: 'absolute',
  left: '4rem',
  top: '65rem',
  border: 'none'
})
const AlbumItem = styled('button')({
  whiteSpace: 'hidden',
  width: 'min-content',
  height: 'min-content',
  border: 'none',
  ':hover': {
         backgroundColor: '#e0e0e0'
      }
})
const AlbumTrackDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '1rem 7rem',
  position: 'relative',
  top: '210rem',
  left: '4rem'
})
const PlayerDiv = styled('div')({
  position: 'fixed',
  bottom: 0,
  width: '100%'
})
const Space = styled('div')({
  border: 'none',
  width: '100%',
  height: '220rem'
})
const AlbumTracksHeading = styled('h3')({
  position: 'relative',
  top: '210rem'
})
const AlbumTrackItem = styled('button')({
  whiteSpace: 'hidden',
  height: '9rem',
  width: '35rem',
  overflow: 'hidden',
  textOverflow: 'clip',
  border: 'none',
  ':hover': {
    backgroundColor: '#e0e0e0'
  }
})
const AlbumTrackImg = styled('img')({
  width: '7rem',
  height: '7rem',
  position: 'relative',
  right: '13rem',
  top: '1.1rem'
})
const AlbumTrackName = styled('h3')({
  position: 'relative',
  left: '10rem',
  bottom: '6rem',
  textAlign: 'left',
  textSize: '14px',
})
const AlbumImg = styled('img')({
  width: '20rem',
  height: '20rem',
})
const AlbumName = styled('h3')({

})


const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})
const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'



export const Results = ({ name, code }) => {
  const accessToken = useAuth(code)

  const [artistId, setArtistId] = useState([])
  const [tracks, setTracks] = useState([])
  const [albums, setAlbums] = useState([])
  const [albumId, setAlbumId] = useState([])
  const [albumTracks, setAlbumTracks] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [albumImg, setAlbumImg] = useState()
  const [open, setOpen] = useState(false)

  const handleAlbumClick = () => {
    setOpen(!open)
  }
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
        return (
          <Track onClick={() => setPlayingTrack(track)} key={track.id}>
            <TrackImg src={track.album.images[0].url} />
            <TrackName>{track.name}</TrackName>
          </Track>
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
      return (
      <div onClick={handleAlbumClick}>
        <div onClick={() => setAlbumImg(item.images[2].url)}>
        <AlbumItem onClick={() => setAlbumId(item.id)} key={item.id}>
          <AlbumName>{item.name}</AlbumName>
          <AlbumImg src={item.images[1].url} />
        </AlbumItem>
        </div>
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
        <AlbumTrackItem onClick={() => setPlayingTrack(track)}>
          <AlbumTrackImg src={albumImg} />
          <AlbumTrackName>{track.name}</AlbumTrackName>
        </AlbumTrackItem>
      )
    }))
  })
}, [albumId, accessToken])


  return (
  <div>
    <TimelineButton><TimelineLink className='timelineBtn' href={AUTH_URL}>Timeline</TimelineLink></TimelineButton>
    <TracksHeading>Top 10 Tracks</TracksHeading>
    <TrackDiv>
      {tracks}
    </TrackDiv>
    <AlbumsHeading>Albums</AlbumsHeading>
    <AlbumDiv>
      {albums}
    </AlbumDiv>
    {open && (
      <AlbumTracksHeading>Album tracks</AlbumTracksHeading>
    )}
    <AlbumTrackDiv>
      {albumTracks}
    </AlbumTrackDiv>
    <Space />
    <PlayerDiv>
      <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
    </PlayerDiv>
  </div>
  )
}

export default Results;
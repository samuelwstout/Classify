import {useState, useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Player from './Player'
import useAuth from './useAuth'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import useToggle from './useToggle'

const ResultsHeader = styled('div')({
  height: '14rem',
  backgroundColor: '#000'
})
const TracksSection = styled('div')({
  backgroundColor: '#121212',
  marginTop: '-1.2rem',
})
const AlbumSection = styled('div')({
  height: '80rem',
  backgroundColor: '#121212',
  marginTop: '-1.2rem',
})
const AlbumTrackSection = styled('div')({
  height: 'fit-content',
  backgroundColor: '#121212',
  marginTop: '-1.2rem',
})
const ComposerTitle = styled('h1')({
  position: 'absolute',
  top: '3rem',
  color: '#fff',
  letterSpacing: '2px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '50px'
})
const ComposerImg = styled('img')({
    width: '10rem',
    height: '10rem',
    position: 'absolute',
    top: '4rem',
    left: '27.5rem',
    borderRadius: '25px'
})
const TopHeader = styled('div')({
  height: '1rem',
  marginBottom: '-1.5rem',
  backgroundColor: '#000'
})
const TimelineButton = styled(Button)({
  border: '1px solid white',
})
const TimelineLink = styled('a')({
  textDecoration: 'none',
  color: '#fff'
})
const TracksHeading = styled('h3')({
  position: 'relative',
  left: '1rem',
  top: '1rem',
  color: '#fff',
})
const TrackDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '1rem 6rem',
  position: 'relative',
  left: '1rem',
  top: '1.3rem',
  border: 'none',
})
// const Track = styled('button')({
//   whiteSpace: 'hidden',
//   height: '9rem',
//   width: '35rem', 
//   overflow: 'hidden',
//   textOverflow: 'clip',
//   border: 'none',
//   ':hover': {
//     backgroundColor: '#e0e0e0'
//   }
// }) IN APP.CSS
// const Play = styled('img')({
//   position: 'relative',
//   visibility: 'hidden',
//   left: '17.8rem',
//   top: '.5rem'
// }) IN APP.CSS
const TrackImg = styled('img')({
  width: '3rem',
  height: '3rem',
  position: 'relative',
  right: '17.5rem', 
  top: '.5rem'
})
const TrackName = styled('h3')({
  position: 'relative',
  left: '5rem',
  bottom: '2.9rem',
  textAlign: 'left',
  textSize: '14px',
  color: '#fff'
})
const AlbumsHeading = styled('h3')({
  position: 'relative',
  left: '1rem',
  top: '2rem',
  color: '#fff'
})
const AlbumDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '4rem',
  position: 'relative',
  left: '1rem',
  top: '3rem',
  border: 'none'
})
const AlbumItem = styled('button')({
  whiteSpace: 'hidden',
  width: '14rem',
  height: 'min-content',
  border: 'none',
  backgroundColor: '#121212',
  ':hover': {
         backgroundColor: '#1f1f1f'
      }
})
const AlbumTrackItem = styled('button')({
  backgroundColor: '#121212',
  ':hover': {
         backgroundColor: '#1f1f1f'
      }
})
const PlayerDiv = styled('div')({
  position: 'fixed',
  bottom: 0,
  width: '100%'
})
const Space = styled('div')({
  border: 'none',
  width: '100%',
  height: '7rem',
  backgroundColor: '#121212'
})
const AlbumTracksHeading = styled('h3')({
  position: 'relative',
  left: '1rem',
  top: '2.5rem',
  color: '#fff'
})
const AlbumImg = styled('img')({
  width: '11rem',
  height: '11rem',
  position: 'relative',
})
const AlbumName = styled('h3')({
  position: 'relative',
  color: '#fff'
})
const AlbumTrackDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '1rem 6rem',
  position: 'relative',
  left: '1rem',
  top: '3rem'
})
// const AlbumTrackItem = styled('button')({
//   whiteSpace: 'hidden',
//   height: '9rem',
//   width: '35rem',
//   overflow: 'hidden',
//   textOverflow: 'clip',
//   border: 'none',
//   ':hover': {
//     backgroundColor: '#e0e0e0'
//   }
// })
const AlbumTrackImg = styled('img')({
  width: '3rem',
  height: '3rem',
  position: 'relative',
  right: '17.5rem', 
  top: '.5rem'
})
// const AlbumTrackIcon = styled('img')({
//   position: 'relative',
//   left: '18.5rem',
//   top: '1rem'
// })
const AlbumTrackName = styled('h3')({
  position: 'relative',
  left: '5rem',
  bottom: '2.9rem',
  textAlign: 'left',
  textSize: '14px',
  color: '#fff'
})
const TrackSpace = styled('div')({
  height: '1rem'
})
const AlbumTrackSpace = styled('div')({
  height: '1rem'
})

const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})
const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=https://classify-57a6e.web.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export const Results = ({ name, code }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const accessToken = useAuth(code)

  const [artistId, setArtistId] = useState([])
  const [tracks, setTracks] = useState([])
  const [albums, setAlbums] = useState([])
  const [albumId, setAlbumId] = useState([])
  const [playingTrack, setPlayingTrack] = useState([])
  const [albumImg, setAlbumImg] = useState()
  const [open, setOpen] = useState(false)
  const [albumTracks, setAlbumTracks] = useState([])
  const [value, toggleValue] = useToggle(false)
  const [img, setImg] = useState('')
  const [albumName, setAlbumName] = useState('')

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
      setImg(res.body.artists.items[0].images[0].url)
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
          <div onClick={() => setPlayingTrack(track)}>
          <button className='track' onClick={toggleValue} key={track.id}>
            <TrackImg src={track.album.images[0].url} />
            <TrackName>{track.name}</TrackName>
          </button>
          </div>
        )
      }))
    })
  }, [artistId, accessToken, value, playingTrack])


const handleAlbumClick = () => {
    setOpen(!open)
    window.scrollTo(0, 2000)
  }

//if user clicks on album, get album id
useEffect(() => {
  if (!artistId) return setAlbums([])
  if (!accessToken) return
  let cancel = false
  spotifyApi.getArtistAlbums(artistId).then(res => {
    if (cancel) return
    setAlbums(res.body.items.map((item) => {
      return (
        <div onClick={() => setAlbumName(item.name)}>
          <div onClick={handleAlbumClick}>
            <div onClick={() => setAlbumImg(item.images[2].url)}>
            <AlbumItem onClick={() => setAlbumId(item.id)} key={item.id}>
              <AlbumImg src={item.images[1].url} />
              <AlbumName>{item.name}</AlbumName>
            </AlbumItem>
            </div>
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
          <div onClick={() => setPlayingTrack(track)}>
          <AlbumTrackItem className='albumTrack' onClick={toggleValue} key={track.id}>
            <AlbumTrackImg src={albumImg} />
            <AlbumTrackName>{track.name}</AlbumTrackName>
          </AlbumTrackItem>
          </div>
        )
      }))
    }) 
  }, [albumId, accessToken, value])

  return (
  <div>
    <TopHeader>
    <TimelineButton><TimelineLink className='timelineBtn' href={AUTH_URL}>Timeline</TimelineLink></TimelineButton>
    </TopHeader>

    <ResultsHeader>
      <ComposerTitle>{name}</ComposerTitle>
    </ResultsHeader>

    <TracksSection>
      <TracksHeading>Popular</TracksHeading>
      <TrackDiv>
        {tracks}
      </TrackDiv>
      <TrackSpace />
    </TracksSection>

    <AlbumSection>
      <AlbumsHeading>Albums</AlbumsHeading>
      <AlbumDiv>
        {albums}
      </AlbumDiv>
    </AlbumSection>

    <AlbumTrackSection>
      {open && (
        <AlbumTracksHeading>{albumName}</AlbumTracksHeading>
      )}
      <AlbumTrackDiv>
        {albumTracks}
      </AlbumTrackDiv>
      <AlbumTrackSpace />
    </AlbumTrackSection>

    <Space />

    <PlayerDiv>
      <Player accessToken={accessToken} trackUri={value ? playingTrack.uri : null} />
    </PlayerDiv>
  </div>
  )
}

export default Results;

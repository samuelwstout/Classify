import {useState, useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Player from './Player'
import useAuth from './useAuth'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import useToggle from './useToggle'

const ResultsHeader = styled('div')({
  border: '1px solid black',
  height: 'max-height',
})
const TracksSection = styled('div')({
  border: '1px solid red'
})
const AlbumSection = styled('div')({
  border: '1px solid blue',
  height: '166rem',
})
const AlbumTrackSection = styled('div')({
  border: '1px solid green',
  height: 'fit-content'
})
const ComposerTitle = styled('h1')({
  position: 'relative',
  left: '44rem',
  bottom: '10rem'
})
const ComposerImg = styled('img')({
    width: '12rem',
    position: 'relative',
    left: '28rem',
    top: '2rem'
})
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
  position: 'relative',
  left: '2rem',
})
const AlbumDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '1rem 10rem',
  position: 'relative',
  left: '6rem',
  border: 'none'
})
const AlbumItem = styled('button')({
  whiteSpace: 'hidden',
  width: '18rem',
  height: '22rem',
  border: 'none',
  ':hover': {
         backgroundColor: '#e0e0e0'
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
  height: '5rem' 
})
const AlbumTracksHeading = styled('h3')({
  position: 'relative',
  left: '2rem'
})
const AlbumImg = styled('img')({
  width: '16rem',
  height: '16rem',
  position: 'relative',
  bottom: '8px'
})
const AlbumName = styled('h3')({
  position: 'relative',
  bottom: '15px'
})
const AlbumTrackDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '1rem 10rem',
  position: 'relative',
  left: '4rem'
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
  width: '7rem',
  height: '7rem',
  position: 'relative',
  right: '13rem',
  top: '1.1rem'
})
// const AlbumTrackIcon = styled('img')({
//   position: 'relative',
//   left: '18.5rem',
//   top: '1rem'
// })
const AlbumTrackName = styled('h3')({
  position: 'relative',
  left: '10rem',
  bottom: '6rem',
  textAlign: 'left',
  textSize: '14px',
})

const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})
const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

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
  // const [icon, setIcon] = useState('/icons8-play-30.png')
  const [img, setImg] = useState('')

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
      // setIcon(value ? '/icons8-play-30.png' : '/icons8-pause-30.png')
      if (cancel) return
      setTracks(res.body.tracks.map((track) => {
        return (
          <div onClick={() => setPlayingTrack(track)}>
          <button className='track' onClick={toggleValue} key={track.id}>
            {/* <img className='icon' src={icon} /> */}
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
    window.scrollTo(0, 3500)
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
      // let icon = value ? '/icons8-pause-30.png' : '/icons8-play-30.png'
      if (cancel) return
      setAlbumTracks(res.body.items.map((track) => {
        return (
          <div onClick={() => setPlayingTrack(track)}>
          <button className='albumTrack' onClick={toggleValue} key={track.id}>
            {/* <img className='icon2' src={icon} /> */}
            <AlbumTrackImg src={albumImg} />
            <AlbumTrackName>{track.name}</AlbumTrackName>
          </button>
          </div>
        )
      }))
    }) 
  }, [albumId, accessToken, value])

  return (
  <div>
    <TimelineButton><TimelineLink className='timelineBtn' href={AUTH_URL}>Timeline</TimelineLink></TimelineButton>

    <ResultsHeader>
      <ComposerImg src={img} />
      <ComposerTitle>{name}</ComposerTitle>
    </ResultsHeader>

    <TracksSection>
      <TracksHeading>Top 10 Tracks</TracksHeading>
      <TrackDiv>
        {tracks}
      </TrackDiv>
    </TracksSection>

    <AlbumSection>
      <AlbumsHeading>Albums</AlbumsHeading>
      <AlbumDiv>
        {albums}
      </AlbumDiv>
    </AlbumSection>

    <AlbumTrackSection>
      {open && (
        <AlbumTracksHeading>Album tracks</AlbumTracksHeading>
      )}
      <AlbumTrackDiv>
        {albumTracks}
      </AlbumTrackDiv>
    </AlbumTrackSection>

    <Space />

    <PlayerDiv>
      <Player accessToken={accessToken} trackUri={value ? playingTrack.uri : null} />
    </PlayerDiv>
  </div>
  )
}

export default Results;

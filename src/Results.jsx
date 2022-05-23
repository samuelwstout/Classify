import {useState, useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Player from './Player'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import useToggle from './useToggle'
import { selectName } from './features/composerName/composerNameSlice'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setAlbum, selectAlbum } from './features/album/albumSlice'

const ResultsHeader = styled('div')({
  height: '1rem',
  backgroundColor: '#1a1a1a',
})
const TracksSection = styled('div')({
  backgroundColor: '#1a1a1a',
  marginTop: '-1.2rem',
})
const AlbumSection = styled('div')({
  height: '80rem',
  backgroundColor: '#1a1a1a',
  marginTop: '-1.2rem',
})
const ComposerTitle = styled('h1')({
  textAlign: 'center',
  position: 'relative',
  top: '.61rem',
  color: '#fff',
  letterSpacing: '2px',
  fontWeight: 400,
  fontSize: '2rem'
})
const TopHeader = styled('div')({
  height: '1rem',
  marginBottom: '-1.5rem',
  backgroundColor: '#1a1a1a',
})
const TimelineButton = styled(Button)({
  border: 'none',
  position: 'relative',
  right: '.9rem'
})
const TimelineLink = styled('a')({
  textDecoration: 'none',
  color: '#fff'
})
const TracksHeading = styled('h3')({
  position: 'relative',
  top: '3rem',
  left: '.5rem',
  textAlign: 'left',
  color: '#fff',
  fontWeight: '200',
  fontSize: '1rem'
})
const TrackDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '1rem 1rem',
  justifyContent: 'center',
  border: 'none',
  position: 'relative',
  top: '4rem',
})
const Track = styled('button')({
  whiteSpace: 'nowrap',
  height: '5rem',
  width: '40rem', 
  overflow: 'hidden',
  textOverflow: 'clip',
  border: 'none',
  backgroundColor: '#1a1a1a',
  ':hover': {
    backgroundColor: '#1f1f1f'
  }
})
const TrackImg = styled('img')({
  width: '4rem',
  height: '4rem',
  position: 'relative',
  right: '17.3rem',
  top: '.3rem',
})
const TrackName = styled('h3')({
  position: 'relative',
  left: '5rem',
  bottom: '3.1rem',
  textAlign: 'left',
  fontSize: '.8rem',
  fontWeight: '400',
  color: '#eaeaea',
})
const AlbumsHeading = styled('h3')({
  position: 'relative',
  left: '.5rem',
  top: '9rem',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: '200',
})
const AlbumDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'left',
  gap: '2rem',
  position: 'relative',
  left: '2rem',
  top: '10rem',
  border: 'none'
})
const AlbumItem = styled('button')({
  whiteSpace: 'hidden',
  width: '13rem',
  height: '14rem',
  textOverflow: 'clip',
  border: 'none',
  backgroundColor: '#1a1a1a',
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
  height: '22rem',
  backgroundColor: '#1a1a1a',
})
const AlbumImg = styled('img')({
  width: '10rem',
  height: '10rem',
  position: 'relative',
})
const AlbumName = styled('h3')({
  position: 'relative',
  color: '#fff',
  fontSize: '.8rem',
  fontWeight: '400',
})
const AlbumTrackItem = styled('button')({
  backgroundColor: '#121212',
  ':hover': {
         backgroundColor: '#1f1f1f'
      }
})
const AlbumTrackImg = styled('img')({
  width: '3rem',
  height: '3rem',
  position: 'relative',
  right: '17.5rem', 
  top: '.5rem'
})
const AlbumTrackName = styled('h3')({
  position: 'relative',
  left: '5rem',
  bottom: '2.9rem',
  textAlign: 'left',
  textSize: '14px',
  color: '#fff'
})

const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})
const AUTH_URL_LOCAL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export const Results = ({ code }) => {
  const dispatch = useDispatch()

  let navigate = useNavigate();

  const accessToken = useAuth(code)

  const composerName = useSelector(selectName)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [artistId, setArtistId] = useState([])
  const [tracks, setTracks] = useState([])
  const [albums, setAlbums] = useState([])
  const [albumId, setAlbumId] = useState([])
  const [playingTrack, setPlayingTrack] = useState([])
  const [albumImg, setAlbumImg] = useState()
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
    if (!composerName) return setArtistId([])
    if (!accessToken) return
    let cancel = false
    spotifyApi.searchArtists(composerName).then(res => {
      if (cancel) return
      setArtistId(res.body.artists.items[0].id)
      setImg(res.body.artists.items[0].images[0].url)
    })
  }, [composerName, accessToken])

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
          <Track className='track' onClick={toggleValue} key={track.id}>
            <TrackImg src={track.album.images[0].url} />
            <TrackName>{track.name}</TrackName>
          </Track>
          </div>
        )
      }))
    })
  }, [artistId, accessToken, value, playingTrack])



//Albums
useEffect(() => {
  if (!artistId) return setAlbums([])
  if (!accessToken) return
  let cancel = false
  spotifyApi.getArtistAlbums(artistId).then(res => {
    if (cancel) return
    setAlbums(res.body.items.map((item) => {
      let albumName = item.name
      let length = 70
      let trimmedString = albumName.substring(0, length)
      return (
      <div onClick={() => console.log(albumTracks)}>
         <div onClick={() => console.log('hi')}>
          <div onClick={() => setAlbumName(item.name)}>
            <div onClick={() => setAlbumImg(item.images[2].url)}>
            <AlbumItem onClick={() => setAlbumId(item.id)} key={item.id}>
              <AlbumImg src={item.images[1].url} />
              <AlbumName>{trimmedString}</AlbumName>
            </AlbumItem>
            </div>
          </div>
        </div>
      </div>
        )
      }))
    })
  }, [artistId, accessToken, albumTracks])

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

  dispatch(setAlbum(albumTracks))
  useSelector(selectAlbum)

  return (
  <div>
    <TopHeader>
    <TimelineButton><TimelineLink className='timelineBtn' href={AUTH_URL_LOCAL}><img src='/icons8-back-arrow-30.png'/></TimelineLink></TimelineButton>
    </TopHeader>

    <ResultsHeader>
      <ComposerTitle>{composerName}</ComposerTitle>
    </ResultsHeader>

    <TracksSection>
      <TracksHeading>Top Tracks</TracksHeading>
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

    <Space />


    <PlayerDiv>
      <Player accessToken={accessToken} trackUri={value ? playingTrack.uri : null} />
    </PlayerDiv>
  </div>
  )
}

export default Results;

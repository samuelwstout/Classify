import {useEffect} from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'

const AUTH_URL_LOCAL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const AUTH_URL_DEPLOY = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=https://classify-57a6e.web.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const EverythingDiv = styled('div')({
  '@media (min-width: 1200px)': {
    position: 'relative',
    right: '2rem',
}
})
const Heading = styled('p')({
  color: '#fff',
  fontSize: '4rem',
  textAlign: 'center',
  letterSpacing: '.05rem',
  width: '100%',
  color: '#eaeaea',
})
const SubHeading = styled('p')({
  color: '#fff',
  fontSize: '.85rem',
  width: '100%',
  textAlign: 'center',
  color: '#eaeaea',
  position: 'relative',
  bottom: '2rem',
})
const ButtonContainer = styled('div')({
  textAlign: 'center',
  position: 'relative',
  bottom: '.5rem',
})
const LoginButton = styled(Button)({
  backgroundColor: '#000',
  ':hover': {
    backgroundColor: '#000'
  },
  width: '13rem',
  height: '5rem',
})
const LoginButtonText = styled('a')({
  color: '#eaeaea',
  fontSize: '.7rem',
  textDecoration: 'none',
  position: 'relative',
  bottom: '.4rem',
  right: '.4rem',
})
const SpotifyLogo = styled('img')({
  width: '5.5rem',
  position: 'relative',
  top: '.6rem',
  left: '.7rem',
})

export const Login = ({ code }) => {
  let navigate = useNavigate()

  useEffect(() => {
  if (code) {
    navigate('../timeline')
  }
  }, [])

  return (
    <EverythingDiv>
      <Heading>Classify</Heading>
      <SubHeading>a guide to find and listen to classical music.</SubHeading>
      <ButtonContainer>
        <LoginButton variant='contained'>
            <LoginButtonText href={AUTH_URL_LOCAL}>Login with<SpotifyLogo src='/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Green.png'/></LoginButtonText>
        </LoginButton>
      </ButtonContainer>
    </EverythingDiv>
  )
}
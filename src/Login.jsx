import {useEffect} from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const MainDiv = styled('div')({
  position: 'relative',
  width: '100vw',
  height: '100vh',
})
const Heading = styled('p')({
  fontFamily: 'Baskerville, sans serif',
  color: '#fff',
  fontSize: '13rem',
  position: 'absolute',
  top: '-10rem',
  textAlign: 'center',
  width: '100%',
})
const SubHeading = styled('p')({
  fontFamily: 'Baskerville, sans serif',
  color: '#fff',
  fontSize: '3rem',
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  top: '18rem',
})
const ButtonContainer = styled('div')({
  textAlign: 'center',
  position: 'relative',
  top: '30rem'
})
const LoginButton = styled(Button)({
  backgroundColor: '#000',
  ':hover': {
    backgroundColor: '#000'
  },
  width: '21rem',
  height: '7rem',
})
const LoginButtonText = styled('a')({
  color: '#fff',
  textDecoration: 'none',
  position: 'relative',
  bottom: '1rem',
  right: '.4rem',
})

const SpotifyLogo = styled('img')({
  width: '12rem',
  position: 'relative',
  top: '1.35rem',
  left: '.8rem',
})

export const Login = ({ code }) => {
  let navigate = useNavigate()

  useEffect(() => {
  if (code) {
    navigate('../timeline')
  }
  }, [])

  return (
    <div>
    <MainDiv>
      <Heading>Classify</Heading>
      <SubHeading>a guide to find and listen to classical music.</SubHeading>
      <ButtonContainer>
        <LoginButton variant='contained'>
            <LoginButtonText href={AUTH_URL}>LOGIN WITH<SpotifyLogo src='/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Green.png'/></LoginButtonText>
        </LoginButton>
      </ButtonContainer>
    </MainDiv>
    </div>
  )
}
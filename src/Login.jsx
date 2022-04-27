import {useEffect} from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const Heading = styled('p')({
  fontFamily: 'Baskerville, sans serif',
  fontSize: '160px',
  letterSpacing: '5px',
  position: 'absolute',
  top: '-3rem',
  left: '28.5rem',
  '@media (max-width: 1042px)': {
    left: '15rem',
  },
  '@media (max-width: 768px)': {
    left: '9.5rem',
    top: '-3rem',
    fontSize: '140px'
  },
  '@media (max-width: 425px)': {
    top: '5rem'
  },
  '@media (max-width: 375px)': {
    left: '9rem'
  },
  '@media (max-width: 375px)': {
    left: '8rem'
  },
  '@media (max-width: 320px)': {
    left: '5.5rem',
    top: '1rem'
  }
})
const SubHeading = styled('p')({
  fontFamily: 'Baskerville, sans serif',
  fontSize: '40px',
  color: '#000',
  position: 'absolute',
  top: '18rem',
  right: '23rem',
  '@media (max-width: 1042px)': {
    right: '11rem',
  },
  '@media (max-width: 768px)': {
    right: '0rem',
    top: '16rem',
    width: '40rem',
    fontSize: '30px'
  },
  '@media (max-width: 425px)': {
    top: '24rem',
    right: '-21rem'
  },
  '@media (max-width: 375px)': {
    right: '-23rem'
  },
  '@media (max-width: 320px)': {
    top: '20rem',
    right: '-23.5rem'
  } 
})
const MainDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  height: '100vh'
})
const LoginButton = styled(Button)({
  backgroundColor: '#000',
  ':hover': {
    backgroundColor: '#000'
  },
  '@media (max-width: 1024px)': {
    left: '21rem'
  },
  '@media (max-width: 768px)': {
    left: '14rem',
    top: '24rem'
  },
  '@media (max-width: 425px)': {
    top: '32rem'
  },
  '@media (max-width: 375px)': {
    left: '12rem'
  },
  '@media (max-width: 320px)': {
    left: '9.5rem',
    top: '28rem'
  },
  width: '21rem',
  height: '7rem',
  position: 'absolute',
  top: '27rem',
  left: '34.6rem'
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
        <LoginButton variant='contained'>
            <LoginButtonText href={AUTH_URL}>LOGIN WITH<SpotifyLogo src='/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Green.png'/></LoginButtonText>
        </LoginButton>
    </MainDiv>
    </div>
  )
}
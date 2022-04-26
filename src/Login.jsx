import {useEffect} from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=https://classify-57a6e.web.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const Heading = styled('p')({
  fontFamily: 'Baskerville, sans serif',
  fontSize: '160px',
  letterSpacing: '5px',
  position: 'absolute',
  top: '-4rem',
  left: '28.4rem',
  color: '#000'
})
// const Dot1 = styled('span')({
// height: '25px',
// width: '25px',
// backgroundColor: '#bbb',
// borderRadius: '50%',
// display: 'inline-block',
// position: 'absolute',
// top: '10rem',
// left: '36rem',
// '@keyframes': {
//   '0%': {
//     opacity: 0
//   },
//   '50%': {
//     opacity: 1
//   },
//   '100%': {
//     opacity: 0
//   }
// }
// })
// const Dot2 = styled('span')({
//   height: '25px',
//   width: '25px',
//   backgroundColor: '#bbb',
//   borderRadius: '50%',
//   display: 'inline-block',
//   position: 'absolute',
//   top: '10rem',
//   left: '38rem'
// })
// const Dot3 = styled('span')({
//   height: '25px',
//   width: '25px',
//   backgroundColor: '#bbb',
//   borderRadius: '50%',
//   display: 'inline-block',
//   position: 'absolute',
//   top: '10rem',
//   left: '40rem'
// })
// const SubHeading = styled('p')({
//   fontFamily: 'Baskerville, sans serif',
//   fontSize: '40px',
//   position: 'absolute',
//   top: '17rem',
//   right: '24rem',
//   animation: 'fadein 2s',
//   webkitAnimation: 'fadein 2s',
// })
const MainDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
})
const LoginButton = styled(Button)({
  backgroundColor: '#000',
  ':hover': {
    backgroundColor: '#000'
  },
  '@media (max-width: 400px)': {
    width: '18rem',
    height: '6rem'
  },
  '@media (max-width: 315px)': {
    width: '15rem',
    height: '5rem'
  },
  width: '21rem',
  height: '7rem',
  position: 'absolute',
  top: '29rem'
})
const LoginButtonText = styled('a')({
  color: '#fff',
  textDecoration: 'none',
  position: 'relative',
  bottom: '1rem',
  right: '.4rem',
  '@media (max-width: 400px)': {
    bottom: '.5rem',
  },
  '@media (max-width: 315px)': {
    bottom: '.4rem'
  }
})

const SpotifyLogo = styled('img')({
  width: '12rem',
  position: 'relative',
  top: '1.35rem',
  left: '.8rem',
  '@media (max-width: 400px)': {
    width: '9rem',
    top: '.9rem'
  },
  '@media (max-width: 315px)': {
    width: '7rem',
    top: '.7rem'
  }
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
      <span className="dot1"></span>
      <span className="dot2"></span>
      <span className="dot3"></span>
      <p className="subheading">a guide to find and listen to classical music.</p>
        <LoginButton variant='contained'>
            <LoginButtonText href={AUTH_URL}>LOGIN WITH<SpotifyLogo src='/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Green.png'/></LoginButtonText>
        </LoginButton>
    </MainDiv>
    </div>
  )
}
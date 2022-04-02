import {useEffect} from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const MainDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
})

const LoginButton = styled(Button)({
  backgroundColor: '#f2f2f2',
  ':hover': {
    backgroundColor: 'green'
  }
})

const LoginButtonText = styled('a')({
  color: '#000',
  textDecoration: 'none',
})

export const Login = ({ code }) => {
  let navigate = useNavigate()

  useEffect(() => {
  if (code) {
    navigate('../timeline')
  }
  }, [])

  return (
    <MainDiv>
        <LoginButton variant='contained'>
            <LoginButtonText href={AUTH_URL}>Login to Spotify</LoginButtonText>
        </LoginButton>
    </MainDiv>
  )
}

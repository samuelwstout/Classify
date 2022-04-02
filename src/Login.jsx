import {useEffect} from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'



const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const LoginButton = styled(Button)({
  backgroundColor: 'green',
})
const LoginButtonText = styled('a')({
  color: 'white',
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
        <LoginButton variant='contained'>
            <LoginButtonText href={AUTH_URL}>Login to Spotify</LoginButtonText>
        </LoginButton>
    </div>
  )
}

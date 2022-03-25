import {useEffect} from 'react'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import './App.css';

const code = new URLSearchParams(window.location.search).get('code');
const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a45eb12484d24c4199050bdefee6d24b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export const Login = ({}) => {
  let navigate = useNavigate()
  useEffect(() => {
  if (code) {
    navigate('../timeline')
  }
  }, [])

  return (
    <div>
        <Button className="loginBtn" variant='contained'>
            <a  className='loginbtntext' href={AUTH_URL}>Login to Spotify</a> 
        </Button>
    </div>
  )
}

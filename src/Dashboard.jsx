import {useEffect} from 'react'
import useAuth from './useAuth'
import './App.css'
import SpotifyWebApi from 'spotify-web-api-node'


const spotifyApi = new SpotifyWebApi({
  clientId: 'a45eb12484d24c4199050bdefee6d24b',
})

export const Dashboard = ({code}) => {
  const accessToken = useAuth(code)
  useEffect(() => {
      if (!accessToken) return
      spotifyApi.setAccessToken(accessToken)
  }, [accessToken])


return (
  <div className='timeline'>
      <div className='vl'></div>
      <h3 className='date1400'>1400</h3>
      <div className='hl1'></div>
      <h3 className='date1500'>1500</h3>
      <div className='hl2'></div>
      <h3 className='date1600'>1600</h3>
      <div className='hl3'></div>
      <h3 className='date1700'>1700</h3>
      <div className='hl4'></div>
      <h3 className='date1800'>1800</h3>
      <div className='hl5'></div>
      <h3 className='date1900'>1900</h3>
      <div className='hl6'></div>
      <h3 className='date2000'>2000</h3>
      <div className='hl7'></div>
  </div>
)
}

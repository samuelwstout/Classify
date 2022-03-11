import React from 'react'
import './App.css'

const TrackArtistResult = ({ artist }) => {

   return (
    <div>
        <div
      className='artist'
      style={{cursor: 'pointer'}}
      >
        <img className='artistImg' src={artist.artistImg} style={{height: '160px', width: '160px'}} />
        <div className='artistText'>{artist.artistName}</div>
      </div>
    </div>
   )
}
export default TrackArtistResult
import React from 'react'
import './App.css'

const TrackSearchResult = ({ track, chooseTrack }) => {
const handlePlay = () => {
    chooseTrack(track)
}
  return (
    <div 
    className="track" 
    style={{cursor: 'pointer'}}
    onClick={handlePlay}
    >
        <img className='trackImg' src={track.albumUrl} style={{height: '64px', width: '64px'}} />
        <div className='trackText'>
            <div>{track.title}</div>
            <div>{track.artist}</div>
        </div> 
    </div>
  )
}

export default TrackSearchResult

import Player from './Player'

export const Timeline = ({composers}) => {



    return (
        <div>
            <ul>
                <li>{composers}</li>
            </ul>
            <div>
                <Player  />
            </div>
        </div>
    )
    }

export default Timeline;

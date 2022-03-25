import {useNavigate} from 'react-router-dom';

export const Timeline = ({handleClick}) => {
    let navigate = useNavigate()

const toResults = () => {
    navigate('../results')
}

    return (
        <div>
       <div onClick={toResults}><button onClick={handleClick}>Click</button></div>
        
        </div>
    )
    }

export default Timeline;
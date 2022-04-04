import { styled } from '@mui/material/styles'

const Composer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '40px'
})

export const Timeline = ({composers}) => {

    return <Composer>{composers}</Composer>
            
    }

export default Timeline;

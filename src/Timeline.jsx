import { styled } from '@mui/material/styles'

const Composer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'center',
    position: 'absolute',
    left: '20rem',
    top: '9rem',
})
const Header = styled('div')({
    border: '1px solid black',
    height: '6rem',
    width: '100vw',
    backgroundColor: '#000',
    color: 'white'
})
const ComposerDiv = styled('div')({
    width: '100vw',
    height: '690rem',
    backgroundColor: '#121212'
})
const TimelineDiv = styled('div')({
    border: '1px solid red',
    height: '50rem',
    width: '17.4rem',
    backgroundColor: '#121212',
    position: 'absolute'
})

export const Timeline = ({composers}) => {
    return (
    <div>
    <Header>hey</Header>
    <TimelineDiv></TimelineDiv>
    <ComposerDiv>
    <Composer>{composers}</Composer>
    </ComposerDiv>
    </div>
    )    
    }

export default Timeline;

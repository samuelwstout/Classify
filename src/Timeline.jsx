import { styled } from '@mui/material/styles'

const Composer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'center',
    position: 'absolute',
    left: '50px',
    top: '14rem',
})
const Header = styled('div')({
    border: '1px solid black',
    height: '12rem',
    width: '100vw',
    backgroundColor: '#000',
    color: 'white'
})
const ComposerDiv = styled('div')({
    width: '100vw',
    height: '590rem',
    backgroundColor: '#121212'
})

export const Timeline = ({composers}) => {
    return (
    <div>
    <Header>hey</Header>
    <ComposerDiv>
    <Composer>{composers}</Composer>
    </ComposerDiv>
    </div>
    )    
    }

export default Timeline;

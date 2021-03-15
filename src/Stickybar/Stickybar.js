import styled from 'styled-components'
import Items from './Items/Items'


const Stickybar = () => {
    return (
        <StyledStickybar>
            <Items />
        </StyledStickybar>
    )
}

const StyledStickybar = styled.div `
    height: 100%;
    width: 60px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #0c162d;
    color: white;
    overflow-x: hidden;
`

export default Stickybar
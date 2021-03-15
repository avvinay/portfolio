import styled from 'styled-components'
import { IoMenuOutline, IoLogoGithub, IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoPerson } from 'react-icons/io5'

const Items = () => {

    

    return (
        <StyledItems>
            <p>AVV</p>
            <IoMenuOutline className='icon' />
            <IoLogoGithub className='icon' />
            <IoLogoInstagram className='icon' />
            <IoLogoFacebook className='icon' />
            <IoLogoLinkedin className='icon' />
            <IoPerson className='icon' />
        </StyledItems>
    )

}


const StyledItems = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: inherit;
    p {
        padding: 10px;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 2px;
    }
    .icon {
        padding: 15px;
        font-size: 25px;
        cursor: pointer;
    }
`

export default Items
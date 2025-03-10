import React from 'react'
import {
    FaInstagram,
    FaYoutube,
  } from 'react-icons/fa';
  import {
    SocialIcons,
    SocialIconLink,
    SocialIconLink2
  } from '../Footer/Footer.elements';
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, VideoWrapper, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'

 const InfoSection2 = ({ 
    
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            {/* <Link to='/sign-up'>
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>
                            </Link> */}
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start} as="a" href="https://www.youtube.com/@yijunenglishsongs" target="_blank" rel="noopener noreferrer">
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection2;
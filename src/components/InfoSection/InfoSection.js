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

 const InfoSection = ({ 
    
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
                <SocialIcons>
                <SocialIconLink2 
                            href="https://www.instagram.com/YOUR_INSTAGRAM" 
                            target="_blank" 
                            aria-label="Instagram"
                        >
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#833AB4" />
                                        <stop offset="50%" stopColor="#E1306C" />
                                        <stop offset="100%" stopColor="#FD1D1D" />
                                    </linearGradient>
                                </defs>
                                <rect width="24" height="24" rx="5" fill="url(#grad1)" />
                                <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2"/>
                                <circle cx="18" cy="6" r="1.5" fill="white"/>
                            </svg>
                        </SocialIconLink2>
                        <SocialIconLink href='https://www.youtube.com/@yijunenglishsongs?fbclid=PAZXh0bgNhZW0CMTEAAaZK-Q0F25PeS3XPJCRhoohBuZGEMWGFbqFcfA83_M4sQMyJySmMeIpCBNY_aem_SNnbdTydZS2Gthy2RuhEyw' target='_blank' aria-label='YouTube' >
                        <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
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

export default InfoSection;
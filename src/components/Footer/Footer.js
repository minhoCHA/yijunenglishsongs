import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIconLink2
} from './Footer.elements';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      {/* <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submit Video</FooterLink>
            <FooterLink to='/'>Ambassadors</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer> */}
      <SocialMedia>
        <SocialMediaWrap>
          {/* <SocialLogo to='/'>
            <SocialIcon />
            이준이와 영어노래 Yijun English Songs YES
          </SocialLogo> */}
          <WebsiteRights>YES © {date.getFullYear()} </WebsiteRights>
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
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
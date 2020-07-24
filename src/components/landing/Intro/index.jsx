import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import photoProfile from 'assets/photos/photo-profile.jpeg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hello, I'm Ocan!</h1>
          <h4>A Ravenclaw that using code as spell. “Wit beyond measure is man's greatest treasure”.</h4>
          <h4>I love to coding, philosophizing, and playing guitar & mobile game.</h4>
          <Button as={AnchorLink} theme={theme} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={photoProfile} alt="test" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};

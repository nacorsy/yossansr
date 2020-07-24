import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    padding: 0;
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;

    text-align: center;

    margin-bottom: 1rem;
    margin-top: 3rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme === 'light' ? '#52525E' : '#FCFCFC')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 24pt;
    font-weight: normal;
    font-family: 'Quattrocento Sans', Helvetica, sans-serif;
    color: ${({ theme }) => (theme === 'light' ? '#52525E' : 'rgba(252,252,252,0.8)')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
  }

  img {
    margin-left: 30%;
    width: 60%;
    border-radius: 100%;
    @media (max-width: 960px) {
      margin: 0;
    }
  }
`;

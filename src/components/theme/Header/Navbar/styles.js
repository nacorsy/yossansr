import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Typography = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  font-family: 'Work Sans', Helvetica, sans-serif;
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === 'light' ? '#152547' : '#FCBF1E')};

  @media (max-width: 1081px) {
    /* color: #152547; */
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
`;

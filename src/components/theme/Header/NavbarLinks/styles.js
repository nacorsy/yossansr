import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #152547;

    text-decoration: none;
    font-weight: bolder;
    font-family: 'Quattrocento Sans', Helvetica, sans-serif;
  }

  @media (max-width: 960px) {
    a {
      color: ${({ theme }) => (theme === 'light' ? '#FCFCFC' : '#152547')};
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

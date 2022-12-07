import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  margin: 0 auto;
  max-width: 70rem;

  padding: 2.5rem;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);

      padding: 0 0;
    }
  `}
`

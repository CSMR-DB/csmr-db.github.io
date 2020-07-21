import styled, { StyledComponent } from 'styled-components'
import { theme } from '../../../data/theme'

export const Card: StyledComponent<'article', any, {}, never> = styled.article`
  position: relative;
  height: 100%;
  border-radius: 0.25rem;
  display: grid;
  grid-template-areas: 'header' 'body' 'footer';
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  background: white;
  box-shadow: 0 0.075rem 0.075rem rgba(0, 0, 0, 0.1),
    0 0.125rem 0.125rem rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  & header img {
    transition: all 0.2s ease-in-out !important;
  }

  @media ${theme.breakpoints.min.desktop} {
    &:hover {
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25),
        0 0.25rem 0.25rem rgba(0, 0, 0, 0.2);

      & header img {
        transform: scale(1.1);
      }
    }
  }

  & h1 {
    font-size: 1.1em;
    margin: 0;
  }

  & h2 {
    font-size: 1em;
    font-style: italic;
    margin: 0;
    color: #aaa;
    margin-bottom: 1rem;
  }

  & p {
    text-align: justify;

    @media ${theme.breakpoints.max.smartphone} {
      text-align: left;
    }
  }
`

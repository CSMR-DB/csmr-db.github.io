import styled, { StyledComponent } from 'styled-components'
import { BackgroundColorProperty, MaxHeightProperty } from 'csstype'
import { theme } from '../data/theme'

export const Card: StyledComponent<'article', any, {}, never> = styled.article`
  position: relative;
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
      transform: translateY(-4px);

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
    margin: 0;
    text-align: justify;
  }
`

export const CardHeader: StyledComponent<
  'header',
  any,
  {},
  never
> = styled.header`
  grid-area: 'header';
`

interface ICardHeaderFeaturedImageProps {
  maxHeight?: MaxHeightProperty<1>
}

export const CardHeaderFeaturedImage: StyledComponent<
  'div',
  any,
  ICardHeaderFeaturedImageProps,
  never
> = styled.div`
  max-height: ${({
    maxHeight,
  }: ICardHeaderFeaturedImageProps): MaxHeightProperty<1> =>
    maxHeight || '18rem'};
  min-height: ${({
    maxHeight,
  }: ICardHeaderFeaturedImageProps): MaxHeightProperty<1> =>
    maxHeight || '18rem'};
  overflow: hidden;

  & > * {
    max-height: ${({
      maxHeight,
    }: ICardHeaderFeaturedImageProps): MaxHeightProperty<1> =>
      maxHeight || '18rem'};
    min-height: ${({
      maxHeight,
    }: ICardHeaderFeaturedImageProps): MaxHeightProperty<1> =>
      maxHeight || '18rem'};
  }
`

export const CardHeaderText: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  padding: 2em 2em 0 2em;

  & > h6 {
    margin-bottom: 0;
  }
`

interface ICardHeaderIconWrapperProps {
  backgroundColor: BackgroundColorProperty
}

export const CardHeaderIconWrapper: StyledComponent<
  'div',
  any,
  ICardHeaderIconWrapperProps,
  never
> = styled.div`
  border-radius: 999px;
  overflow: hidden;
  width: 4em;
  background: ${(props: ICardHeaderIconWrapperProps): BackgroundColorProperty =>
    props.backgroundColor || '#DDD'};
  padding: 0.5em;
`

export const CardBody: StyledComponent<'main', any, {}, never> = styled.main`
  position: relative;
  padding: 2em;
  grid-area: 'body';
`

export const CardFooter: StyledComponent<
  'footer',
  any,
  {},
  never
> = styled.footer`
  background: #eee;
  padding: 2em;
  border-top: 1px solid #ddd;
  grid-area: 'footer';
`

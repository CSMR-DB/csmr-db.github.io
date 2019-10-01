import styled, { StyledComponent } from 'styled-components'
// tslint:disable-next-line: no-implicit-dependencies
import { BackgroundColorProperty } from 'csstype'

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

  &:hover {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25),
      0 0.25rem 0.25rem rgba(0, 0, 0, 0.2);
    transform: translateY(-0.25rem);
  }

  & h1 {
    font-size: 1.5em;
    margin: 0;
  }

  & h2 {
    font-size: 1.1em;
    font-style: italic;
    margin: 0;
    color: #aaa;
    margin-bottom: 1rem;
  }

  & p {
    margin: 0;
    text-align: justify;
  }

  & header {
    margin-bottom: 2em;
  }
`

export const CardHeader: StyledComponent<
  'header',
  any,
  {},
  never
> = styled.header`
  margin-bottom: 2em;
  max-height: 18rem;
  overflow: hidden;
  grid-area: 'header';
`

export const CardHeaderText: StyledComponent<
  'div',
  any,
  {},
  never
> = styled.div`
  padding-left: 2em;
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
  max-width: 4em;
  width: 100%;
  max-height: 4em;
  height: 100%;
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
  border-top: 1px solid grey;
  grid-area: 'footer';

  & span {
    padding: 0 0.25em;
  }
`

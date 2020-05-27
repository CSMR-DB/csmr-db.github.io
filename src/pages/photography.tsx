import React from 'react'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Grid } from '../components/Grid'
import { DynamicImage } from '../components/DynamicImage'
import { CenteredBlock } from '../components/CenteredBlock'

const SecondPage: () => JSX.Element = (): JSX.Element => (
  <Layout>
    <SEO title="Photography" />
    <CenteredBlock>
      <article>
        <h1>Photography</h1>
        <p>
          Something I also enjoy doing, but don't do that often.
        </p>
      </article>
    </CenteredBlock>
    <Grid columns={'repeat(auto-fill, minmax(32rem,1fr))'}>
      <DynamicImage path="photography/" />
    </Grid>
  </Layout>
)

// tslint:disable-next-line: no-default-export
export default SecondPage

import React from 'react'
import {
  AnyExoticRefComponent,
  AnyExoticRefTargets,
} from '../../types/react.types'

const RandomSampleSVG: AnyExoticRefComponent<any> = React.forwardRef(
  (_props: any, ref: AnyExoticRefTargets): JSX.Element => (
    <svg ref={ref} viewBox={'0 0 16px 16px'}>
      <g>
        <circle x={8} y={8} r={16} />
      </g>
    </svg>
  )
)

type MockSVGsObject = {
  RandomSampleSVG: AnyExoticRefComponent<any>
}

export function mockSVGs(): MockSVGsObject {
  return {
    RandomSampleSVG,
  }
}

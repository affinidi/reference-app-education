import { SVGAttributes } from 'react'

export default (props: SVGAttributes<SVGElement>) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clip-path='url(#2o3rqlgtpa)'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.666 25.926h26.667v-3.21H2.666v3.21zm0-8.025h26.667v-3.21H2.666v3.21zm0-11.234v3.21h26.667v-3.21H2.666z'
        fill='#fff'
      />
    </g>
    <defs>
      <clipPath id='2o3rqlgtpa'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
)

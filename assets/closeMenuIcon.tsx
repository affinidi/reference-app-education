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
    <g clip-path='url(#gf29r7rfka)'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M30 4.82 27.18 2 16 13.18 4.82 2 2 4.82 13.18 16 2 27.18 4.82 30 16 18.82 27.18 30 30 27.18 18.82 16 30 4.82z'
        fill='#fff'
      />
    </g>
    <defs>
      <clipPath id='gf29r7rfka'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
)

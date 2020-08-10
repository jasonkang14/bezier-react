import React from 'react'

function SvgApple(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.552 5.81c2.81 0 3.917 2 3.917 2s-2.163 1.105-2.163 3.789c0 2.843 2.377 3.936 2.665 4.058l.029.012s-1.883 5.302-4.427 5.302c-1.17 0-2.078-.788-3.31-.788-1.253 0-2.5.817-3.31.817-2.322 0-5.257-5.03-5.257-9.071 0-3.977 2.484-6.063 4.814-6.063 1.515 0 2.69.873 3.478.873.676 0 1.93-.93 3.564-.93zm.28-4.81s.272 1.628-1.033 3.197c-1.394 1.675-2.979 1.4-2.979 1.4s-.297-1.317.872-2.857c1.223-1.611 2.89-1.73 3.115-1.739z"
      />
    </svg>
  )
}

export default SvgApple
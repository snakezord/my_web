import {Global} from '@emotion/react'

const Fonts = () => (
	<Global
		styles={`
      @font-face {
				font-family: 'Roboto';
				src: '../assets/Roboto/Roboto-Regular.ttf';
				font-weight: normal;
				font-style: normal;
			}
      `}
	/>
)

export default Fonts;

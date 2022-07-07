// 1. Import the extendTheme function
import {extendTheme, keyframes, ThemeConfig} from '@chakra-ui/react'

const dark = {
	brand: {
		100: '#022C43',
		200: '#053F5E',
		300: '#115173',
		400: '#FFD700',
		500: '#F9248FB3',
	},
};

const light = {
	brand: {
		100: '#F0ECE2',
		200: '#DFD3C3',
		300: '#C7B198',
		400: '#596E79',
		500: '#F9248FB3',
	},
};

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
}

const glow = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
`


const glowAnimation = {
	glow: {
		'font-size': '80px',
		'color': '#fff',
		'text-align': 'center',
		'-webkit-animation': 'glow 1s ease-in-out infinite alternate',
		'-moz-animation': 'glow 1s ease-in-out infinite alternate',
		'animation': 'glow 1s ease-in-out infinite alternate'
	}
}

const theme = extendTheme({
	config,
	colors: {
		light,
		dark
	},
});

export default theme;
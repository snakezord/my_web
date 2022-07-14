import {extendTheme, ThemeConfig} from '@chakra-ui/react'

const dark = {
	brand: {
		100: '#022C43',
		200: '#053F5E',
		300: '#115173',
		400: '#FFD700',
	},
};

const light = {
	brand: {
		100: '#F0ECE2',
		200: '#DFD3C3',
		300: '#C7B198',
		400: '#022C43',
	},
};

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
}

const theme = extendTheme({
	fonts: {
		heading: `'Roboto', sans-serif`,
		body: `'Roboto', sans-serif`,
	},
	config,
	colors: {
		light,
		dark,
		primary: '#F9248FB3',
		secondary: '#FFD700',
	},
});

export default theme;
import {extendTheme, ThemeConfig} from '@chakra-ui/react'

const dark = {
	brand: {
		100: '#022C43',
		200: '#053F5E40',
		300: '#FFD700',
	},
};

const light = {
	brand: {
		100: '#F0ECE2',
		200: '#DFD3C340',
		300: '#022C43',
	},
};

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
}

const theme = extendTheme({
	fonts: {
		heading: `'Roboto', sans-serif`,
		body: `'Roboto', sans-serif`,
	},
	config,
	fontSizes: {
		'xx-small': ".6rem",
		'x-small': ".7rem",
		sm: ".8rem",
		md: "1rem",
		lg: "1.1rem",
		'x-large': "1.2rem",
	},
  colors: {
		light,
		dark,
		primary: '#F9248FB3',
		secondary: '#FFD700',
	},
});

export default theme;
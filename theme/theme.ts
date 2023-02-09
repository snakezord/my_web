import {extendTheme, ThemeConfig} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const dark = {
	brand: {
		100: '#022C43',
		200: '#053F5E40',
		300: '#EDE8E4',
		400: '#053F5E99',
	},
};

const light = {
	brand: {
		100: '#EDE8E4',
		200: '#DFD3C340',
    300: '#022C43',
		400: '#DFD3C399',
	},
};

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
}

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      html: {
        overflowY: 'scroll',
      },
      body: {
        color: mode('gray.900', 'gray.200')(props),
      }
    }),
  },
	fonts: {
		heading: `'Roboto', sans-serif`,
		body: `'Roboto', sans-serif`,
	},
	config,
	fontSizes: {
		'xx-small': ".8rem",
		'x-small': ".9rem",
		sm: "1rem",
		md: "1.2rem",
		lg: "1.3rem",
		'x-large': "1.4rem",
	},
  colors: {
		light,
    dark,
    hover: {
      dark: '#354259',
      light: '#EEE3CB'
    },
		primary: '#F9248F99',
		secondary: '#FFD700',
	},
});

export default theme;
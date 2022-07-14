import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../theme/theme';
import Layout from "../components/layout/layout";
import '../theme/global.css';
import Fonts from "../components/fonts";

function MyApp({Component, pageProps}: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;

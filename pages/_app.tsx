import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../theme/theme';
import Layout from "../components/layout/layout";
import '../theme/global.css';
import Fonts from "../components/fonts";
import GoogleAnalytics from "../lib/googleAnalytics";

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<GoogleAnalytics/>
			<Fonts/>
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	);
}

export default MyApp;

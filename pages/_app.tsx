import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../theme/theme';
import Layout from "../components/layout/layout";
import '../theme/global.css';
import Fonts from "../components/fonts";
import GoogleAnalytics from "../lib/googleAnalytics";
import { Analytics } from '@vercel/analytics/react';

function MyApp({Component, pageProps}: AppProps) {
	return (
    <>
			<Fonts/>
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
      </ChakraProvider>
      
      <Analytics />
			<GoogleAnalytics/>
		</>
	);
}

export default MyApp;

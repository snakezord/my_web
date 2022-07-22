import Script from "next/script";

const GoogleAnalytics = () => {
	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy={'lazyOnload'}
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy={'lazyOnload'} id={'google_analytics'}>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'); 
				`}
			</Script>
		</>
	)
}

export default GoogleAnalytics;
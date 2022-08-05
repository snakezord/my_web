import Head from "next/head";
import {FC} from "react";

const Seo: FC<{
	metaTitle: string,
	metaDescription: string,
	shareImage?: string,
	article?: boolean,
}> = (
	{
		metaTitle,
		metaDescription,
		shareImage = "https://www.romanz.online/me_square.jpeg",
		article
	}
) => {
	const fullSeo = {
		metaTitle,
		metaDescription,
		shareImage,
		article,
	};

	return (
		<Head>
			{fullSeo.metaTitle && (
				<>
					<title>{fullSeo.metaTitle}</title>
					<meta property="og:title" content={fullSeo.metaTitle}/>
					<meta name="twitter:title" content={fullSeo.metaTitle}/>
				</>
			)}
			{fullSeo.metaDescription && (
				<>
					<meta name="description" content={fullSeo.metaDescription}/>
					<meta property="og:description" content={fullSeo.metaDescription}/>
					<meta name="twitter:description" content={fullSeo.metaDescription}/>
				</>
			)}
			{fullSeo.shareImage && (
				<>
					<meta property="og:image" content={fullSeo.shareImage}/>
					<meta name="twitter:image" content={fullSeo.shareImage}/>
					<meta name="image" content={fullSeo.shareImage}/>
				</>
			)}
			{fullSeo.article && <meta property="og:type" content="article"/>}
			<meta name="twitter:card" content="summary_large_image"/>
		</Head>
	);
};

export default Seo;


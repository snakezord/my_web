import {GridItem, VStack, Text, Box, Stack, useMediaQuery, HStack} from "@chakra-ui/react";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import {server} from "../../config";
import {ChakraImage} from "../../components/me";
import ContentLayout from "../../components/layout/contentLayout";
import Animate from "../../components/animate";
import {FC} from "react";
import Moment from "react-moment";
import NextLink from "next/link";
import Seo from "../../components/seo";

const PostPreview: FC<{ article: any, readingStat: any }> = ({article, readingStat}) => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<Stack direction={['column-reverse', 'row']} align={'stretch'} justifyContent={'space-between'}>
			<VStack px={2} align={'flex-start'} justifyContent={'center'} w={isLargerThan600 ? '70%' : '100%'}>
				<NextLink href={`/posts/${article.attributes.slug}`} passHref>
					<Text _hover={{cursor: 'pointer'}} fontSize={'md'} fontWeight={'bold'}>{article.attributes.title}</Text>
				</NextLink>
				<NextLink href={`/posts/${article.attributes.slug}`} passHref>
					<Text _hover={{cursor: 'pointer'}} noOfLines={4}>{article.attributes.description}</Text>
				</NextLink>
				<HStack spacing={3} align={'center'} fontSize={'x-small'} color={'GrayText'}>
					<Text>
						<Moment format="MMM D, Y">{article.attributes.createdAt}</Moment>
					</Text>
					<Text>
						{readingStat.text}
					</Text>
					<Text casing={'capitalize'}>
						{article.attributes.category.data.attributes.name}
					</Text>
				</HStack>
			</VStack>
			<Box w={isLargerThan600 ? '30%' : '100%'} h={'100%'}>
				<NextLink href={`/posts/${article.attributes.slug}`} passHref>
					<Box borderRadius={'10px'}>
						<ChakraImage
							src={`${server}${article.attributes.image.data.attributes.url}`}
							alt={article.attributes.image.data.attributes.alternativeText}
							width={'300px'}
							height={'200px'}
							borderRadius={'10px'}
							_hover={{cursor: 'pointer'}}
						/>
					</Box>
				</NextLink>
			</Box>
		</Stack>
	)
}

const Posts = (props: any) => {
	return (
		<>
			<Seo
				metaTitle={"Roman Zhydyk's personal blog"}
				metaDescription={"From time to time Roman likes to write about interesting stuff. " +
					"It can be anything from tech to crypto, from economics to politics, from workouts to diets & self-improvement."}
			/>
			<ContentLayout title={'Latest Posts'}>
				{props.articles.data.length === 0 ? <Text>No posts yet...</Text>
					: props.articles.data.map((article: any, i: number) => (
						<Animate key={i} delay={i * 0.1}>
							<GridItem
								p={2}
								css={{backdropFilter: 'blur(3px)'}}
								borderRadius={'10px'}
							>
								<PostPreview article={article} readingStat={props.stats[i]}/>
							</GridItem>
						</Animate>
					))}
			</ContentLayout>
		</>
	)
}

export async function getStaticProps() {
	const readingTime = require('reading-time');
	const client = new ApolloClient({
		uri: `${server}/graphql`,
		cache: new InMemoryCache()
	})

	const {data} = await client.query({
		query: gql`
			query {
				articles {
					data {
						id
						attributes{
							title
							description
							content
							slug
							category{
                data{
                  attributes{
                    name
                  }
                }
              }
							image{
								data{
									id
									attributes{
										url
										alternativeText
									}
								}
							}
							createdAt
						}
					}
				}
			}
		`
	});

	const stats = data.articles.data.map((article: any) => readingTime(article.attributes.content))

	return {props: {articles: data.articles, stats}, revalidate: 2}
}

export default Posts;
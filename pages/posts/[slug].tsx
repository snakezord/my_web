import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { getImageUrl, server } from "../../config";
import { AspectRatio, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { ChakraImage } from "../../components/me";
import Moment from "react-moment";
import Seo from "../../components/seo";
import Link from "next/link";

const Post = (props: any) => {
  return (
    <>
      <Seo
        metaTitle={props.article.attributes.title}
        metaDescription={props.article.attributes.description}
        shareImage={getImageUrl(props.article.attributes.image.data.attributes.url)}
        article
      />
      <VStack align={'stretch'} spacing={3}>
        <VStack align={'flex-start'} pb={5}>
          <Text color={'GrayText'} casing={'capitalize'}>
            {props.article.attributes.category.data.attributes.name}
          </Text>
          <HStack>
            <Text fontSize={'xx-small'} fontWeight={'light'}>
              <Moment format="MMM D, Y">{props.article.attributes.createdAt}</Moment>
            </Text>
            <Text fontSize={'xx-small'} fontWeight={'light'}>
              {props.readingTime.text}
            </Text>
          </HStack>
          <Heading>{props.article.attributes.title}</Heading>
          <Text color={'GrayText'}>{props.article.attributes.description}</Text>
        </VStack>
        <ChakraImage
          src={getImageUrl(props.article.attributes.image.data.attributes.url)}
          alt={props.article.attributes.image.data.attributes.alternativeText}
          width={props.article.attributes.image.data.attributes.width}
          height={props.article.attributes.image.data.attributes.height}
        />
        <Box as={'article'}>
          <ReactMarkdown
            components={ChakraUIRenderer(
              {
                iframe: (props) => {
                  return <AspectRatio ratio={16 / 9} my={5}>
                    <iframe {...props} />
                  </AspectRatio>;
                },
                a: (props) => <a {...props} contentEditable="false" target={'_blank'} rel="noreferrer" style={{ background: '#FFD700', color: 'black' }} />
              })}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {props.article.attributes.content}
          </ReactMarkdown>
        </Box>
      </VStack>
    </>
  );
};

export async function getStaticProps(path: any) {
  const readingTime = require('reading-time');
  const client = new ApolloClient({
    uri: `${server}/graphql`,
    cache: new InMemoryCache()
  });
  const { data } = await client.query({
    query: gql`
			query {
				articles(filters:{slug: {eq: "${path.params.slug}"}}) {
					data {
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
									attributes{
										alternativeText
										width
										height
										url
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
  const stats = readingTime(data.articles.data[0].attributes.content);
  return { props: { article: data.articles.data[0], readingTime: stats }, revalidate: 1 };
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: `${server}/graphql`,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
			query {
				articles {
					data {
						id
						attributes{
							slug
						}
					}
				}
			}
		`
  });
  return {
    paths: data.articles.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug,
      }
    })),
    fallback: false
  };
}

export default Post;
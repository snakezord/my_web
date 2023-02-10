import { Fragment } from "react";
import { Flex, Text } from "@chakra-ui/react";
//
import {Title} from "./title";
import CallToActionButton from "./callToActionButton";
import { CustomLink } from "./customLink";

const Whoami = () => {
	return (
		<Flex direction={'column'} alignItems={'center'} gap={3} >
			<Flex direction={'column'} gap={2} alignSelf={'flex-start'}>
        <Title title={'Work'} />
        <Text fontSize={'sm'}>
          I am a seasoned <b>software engineer</b> with a passion for innovation and entrepreneurship.<br/>
          My technical expertise mainly spans<ListOfTechnologies />. <br/>
          I excel at communicating complex ideas and working with cross-functional teams.<br />
          I bring a unique perspective to any project, driven by my deep understanding of the startup ecosystem. 
          I am eager to get my skills and passion to a new venture and contribute to its success.
          My
          <CustomLink href={'https://romanzhydyk.s3.eu-west-2.amazonaws.com/Roman_Zhydyk_-_Software_Engineer.pdf'} target={'_blank'} rel="noreferrer" >
            resume
          </CustomLink>
            and
          <CustomLink href={'/works'} target={'_blank'} rel="noreferrer" >
            portfolio
          </CustomLink>
          showcases my achievements, and I am confident I can bring value to you. 
          Let&apos;s discuss your project and explore how I can help bring your vision to life!
        </Text>
			</Flex>
			<CallToActionButton text={'Latest work'} href="/works"/>
		</Flex>
	)
}

type Tech = {
  title: string;
  link: string;
}

const TECH: Tech[] = [
  {
    title: 'NextJS / React ',
    link: 'https://nextjs.org/'
  },
  {
    title: 'NodeJS',
    link: 'https://nodejs.org/en/about/'
  },
  {
    title: 'GCP',
    link: 'https://cloud.google.com/'
  },
  {
    title: 'AWS',
    link: 'https://aws.amazon.com/'
  },
]

const ListOfTechnologies = () => {
  return (
    <Text as='span'>
      {
        TECH.map((t, i) => (
          <Fragment key={i}>
            <CustomLink href={t.link} target={'_blank'} rel="noreferrer">{t.title}</CustomLink>
            {i !== TECH.length - 1 && <Text as='span' ml={-1}>,</Text>}
            {i === TECH.length - 2 && <Text as='span'> and</Text>}
          </Fragment>
        ))
      }
    </Text>
  )
}
export default Whoami;

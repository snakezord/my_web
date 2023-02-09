import {Flex, Text, useMediaQuery} from "@chakra-ui/react";
import {Title} from "./title";
import ReactCountryFlag from "react-country-flag"
import CallToActionButton from "./callToActionButton";

const Whoami = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<Flex direction={'column'} alignItems={'center'} gap={3} >
			<Flex direction={'column'} gap={2} alignSelf={'flex-start'}>
        <Title title={'Work'} />
        <Text fontSize={'sm'}>
          Greetings, I am Roman Zhydyk, a seasoned software engineer with an entrepreneurial mindset, exceptional communication skills, and a passion for innovation. <br />
          My extensive experience in the industry, combined with my track record as an experienced investor with significant wins and losses, sets me apart in my field.<br />
          I am fearless in taking substantial risks and have a proven track record of coming out on top. <br />
          I have a passion for software development, honed over several years of delivering innovative solutions to startups, and a deep understanding of Agile methodologies and the unique challenges that startups face in the fast-paced and constantly evolving startup ecosystem. <br />
          My technical skillset is broad, with proficiency in a wide range of technologies, including [list technologies you have experience with]. <br />
          In addition to my technical skills, I am an excellent communicator, able to articulate complex ideas and solutions clearly and concisely. <br />
          I have a knack for collaborating with cross-functional teams and stakeholders, ensuring everyone is on the same page, and working towards a common goal. <br />
          This, combined with my entrepreneurial mindset and passion for following entrepreneurs and staying up-to-date with the latest developments in the startup world, allows me to bring a unique perspective to any project I work on. <br />
          I am now on the lookout for like-minded individuals to make an impact in the industry. <br />
          I am eager to bring my skills and expertise to a new venture and contribute to its success. <br />
          My portfolio [link to your portfolio] showcases my past achievements, and I am confident that I can also bring value to you. <br />
          I would be honored to discuss your project & ideas and explore how I can help bring your vision to life. <br />
        </Text>
			</Flex>
			<CallToActionButton text={'Latest work'} href="/works"/>
		</Flex>
	)
}
export default Whoami;

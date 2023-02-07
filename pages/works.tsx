import {
  Box,
  GridItem,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  Text,
  useColorMode,
  useMediaQuery,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Animate from "../components/animate";
import { FC } from "react";
import Slider from "../components/slider";
import { SocialLink } from "../components/social";
import { GoPrimitiveDot } from "react-icons/go";
import ContentLayout from "../components/layout/contentLayout";
import Seo from "../components/seo";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { server } from "../config";

const Description: FC<{ description: string; }> = ({ description }) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  return (
    <VStack align={"flex-start"} borderRadius={"5px"} p={2}>
      <Text fontWeight={"bold"} fontSize={isLargerThan600 ? "md" : "sm"}>
        Description
      </Text>
      <Text fontSize={isLargerThan600 ? "sm" : "x-small"}>{description}</Text>
    </VStack>
  );
};

const Achievements: FC<{ achievements: string[]; }> = ({ achievements }) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  return (
    <VStack align={"flex-start"} borderRadius={"5px"} p={2}>
      <Text fontWeight={"bold"} fontSize={isLargerThan600 ? "md" : "sm"}>
        Achievements
      </Text>
      <List fontSize={isLargerThan600 ? "sm" : "x-small"}>
        {achievements.map((achievement, i) => (
          <ListItem key={i}>
            <ListIcon as={GoPrimitiveDot} borderRadius={"100%"} />
            {achievement}
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

const UsedStack: FC<{ stack: string[]; }> = ({ stack }) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const { colorMode } = useColorMode();
  return (
    <VStack align={"flex-start"} borderRadius={"5px"} pt={2} px={2}>
      <Text fontWeight={"bold"} fontSize={isLargerThan600 ? "md" : "sm"}>
        Stack
      </Text>
      <Wrap spacing={2} w={"100%"} pb={2} px={0.5}>
        {stack.map((name, index) => (
          <WrapItem key={index}>
            <Tag
              fontSize={isLargerThan600 ? "sm" : "xx-small"}
              variant={"outline"}
              color={colorMode === "light" ? "#000000" : "#ffffff"}
            >
              {name}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

const Work: FC<WorkI> = ({
  title,
  description,
  details,
  images,
  url,
}) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  return (
    <VStack spacing={3} alignItems={"stretch"} p={3} position={"relative"}>
      <HStack
        align={"center"}
        justifyContent={"space-between"}
        borderRadius={"5px"}
        p={2}
      >
        <Text fontSize={isLargerThan600 ? "lg" : "md"} fontWeight={"bold"}>
          {title}
        </Text>
        <Box>
          {url && <SocialLink name={"website"} href={url} w="32px" h="32px" />}
        </Box>
      </HStack>
      <Description description={description} />
      <Stack
        direction={["column-reverse", "row"]}
        spacing={3}
        align={"flex-start"}
      >
        <Box w={isLargerThan600 ? "50%" : "100%"}>
          <Slider images={images.data.map(d => d.attributes.url)} />
        </Box>
        <Achievements achievements={details.achievements} />
      </Stack>
      <UsedStack stack={details.stack} />
    </VStack>
  );
};

interface WorkI {
  date: string;
  description: string;
  details: {
    achievements: string[];
    stack: string[];
  }
  images: {
    data: {
      attributes: {
        url: string;
      }
    }[]
  };
  title: string;
  url: string;
}

type WorksProps = {works: { data: {attributes:  WorkI}[]}}

const Works = (props: WorksProps) => {
  const { works: { data } } = props;
  
  const { colorMode } = useColorMode();
  return (
    <>
      <Seo
        metaTitle={"Roman Zhydyk's website & blog"}
        metaDescription={"Check out his latest work!"}
      />
      <ContentLayout title={"Latest Work"}>
        {data.map((work, i) => (
          <Animate key={i} delay={i * 0.2}>
            <GridItem
              bg={`${colorMode}.brand.200`}
              css={{ backdropFilter: "blur(1px)" }}
              borderRadius={"12px"}
            >
              <Work {...work.attributes} />
            </GridItem>
          </Animate>
        ))}
      </ContentLayout>
    </>
  );
};

export default Works;

// const WORK: WorkI[] = [
//   {
//     title: "Complete digitalization of core shipping operations",
//     description:
//       "Helping shipping companies harness digital to add new capabilities, increase efficiencies, and reduce operational costs",
//     details: {
//       achievements: [
//         "Saved 10x the time it took for the booking to be processed",
//         "Automated emailing and quote generation",
//         "Automated extensive document fillings",
//         "Created a better experience for customers and employees",
//       ],
//       stack: [
//         "TS",
//         "React",
//         "MUI",
//         "Google Cloud",
//         "Firebase",
//         "Express",
//         "Mailgun",
//       ],
//     },
//     date: new Date(),
//     images: {
//       data: [
//         {
//           attributes: {
//             url: "https://res.cloudinary.com/dawexjpl7/image/upload/v1675709839/work/transportation_home_ljkbia.jpg",
//           }
//         },
//         {
//           attributes: {
//             url: "https://res.cloudinary.com/dawexjpl7/image/upload/v1675710613/work/transportation_quotes_list_g9bo2d.jpg",
//           }
//         },
//         {
//           attributes: {
//             url: "https://res.cloudinary.com/dawexjpl7/image/upload/v1675710646/work/transportation_task_management_eftach.jpg",
//           }
//         },
//         {
//           attributes: {
//             url: "https://res.cloudinary.com/dawexjpl7/image/upload/v1675710673/work/transportation_my_day_z6jggf.jpg",
//           }
//         }
//       ]
//     },
//     url: "https://spicefactory.co/work/transportation/",
//   },
//   // {
//   //   title: "Powering contactless guest experiences at scale",
//   //   description:
//   //     "Delivering custom-built technology solutions that improve the experience quality across the guest journey",
//   //   achievements: [
//   //     "Enabled dynamic display of a single or multi-property view",
//   //     "Enabled property management to create and edit properties",
//   //     "Enabled service management to create and edit amenities and services",
//   //     "Created roles & permissions system",
//   //   ],
//   //   stack: ["TS", "React", "MUI", "Google Cloud", "Firebase", "Mailgun"],
//   //   images: [
//   //     "https://res.cloudinary.com/dawexjpl7/image/upload/v1675709928/work/nomadix_cover_uwqduv.jpg",
//   //     "https://res.cloudinary.com/dawexjpl7/image/upload/v1675710724/work/nomadix_dashboard_tugq4z.png",
//   //     "https://res.cloudinary.com/dawexjpl7/image/upload/c_pad,h_1150,w_1533/v1659819479/work/nomadix_ui_design_kdmcca.jpg",
//   //   ],
//   //   url: "https://spicefactory.co/work/hospitality/",
//   // },
// ];

type WorksData = { data: {attributes:  WorkI}[]}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: `${server}/graphql`,
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query<{works: WorksData}>({
      query: gql`
        query {
          works {
            data {
              attributes {
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                title
                description
                details
                url
                date
              }
            }
          }
        }
      `,
    });
    
    return { props: { works: data.works }, revalidate: 2 };
  } catch (error) {
    return { props: { notFound: true } };
  }
}

import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"
import { Link, graphql } from "gatsby"
import { FaArrowRight, FaWordpress } from "react-icons/fa"
import Layout from "../components/Layout"
import Container from "../components/Container"
import Testimonials from "../components/HomePage/Testimonials"
import WhosUsing from "../components/HomePage/WhosUsing"
import Meta from "../components/Meta"

const Home = ({ data }) => {
  return (
    <Layout>
      <Meta title="GraphQL API for WordPress" />
      <Box
        width={`100%`}
        background={useColorModeValue(`gray.50`, `gray.700`)}
        borderBottomWidth="1px"
        className="svelte-12nb7vhg"
      >
        <Container
          mt="0"
          className="jk-its-react-and-gatsby-but-svelte-looks-cool-hope-to-check-it-out-soon"
        >
          <Flex
            flexDirection="column"
            textAlign="center"
            align="center"
            justify="space-between"
          >
            <Box maxW="900px" mt={`30`}>
              <Heading as={`h1`} m="0" mb="3" size="4xl">
                GraphQL API for
              </Heading>
              <Heading as={`h1`} m="0" mb="3" size="4xl">
                WordPress
              </Heading>
              <Text fontSize="2xl" mt="10">
                WPGraphQL is a free, open-source WordPress plugin that provides
                an extendable GraphQL schema and API for any WordPress site.
              </Text>

              <Stack
                mt="10"
                mb="20"
                spacing="4"
                justify="center"
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  as="a"
                  size="lg"
                  href="/docs/introduction"
                  colorScheme="blue"
                  variant="solid"
                  aria-label="Get Started"
                  px="40px"
                  maxW={[`auto`, `300px`]}
                  m={`3`}
                  mb={`0`}
                  mt="0"
                  rightIcon={<FaArrowRight fontSize="0.8em" />}
                >
                  Get Started
                </Button>
                <Button
                  as="a"
                  size="lg"
                  href="https://wordpress.org/plugins/wp-graphql"
                  aria-label="Download the Plugin"
                  px="40px"
                  colorScheme="orange"
                  variant="solid"
                  maxW={[`auto`, `300px`]}
                  m={0}
                  mt={3}
                  ml="0!important"
                  rightIcon={<FaWordpress fontSize="0.8em" />}
                >
                  Download the Plugin
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box
        width={`100%`}
        background={useColorModeValue(`gray.50`, `gray.700`)}
        borderBottomWidth="1px"
      >
        <Container mt="0">
          <Flex
            flexDirection="column"
            textAlign="center"
            align="center"
            justify="space-between"
          >
            <Box maxW="900px" mt={`10`} mb={`20`}>
              <Heading as={`h2`} m="0" mb="3" size="2xl">
                Query what you need. Get exactly that.
              </Heading>
              <Text fontSize="2xl" mt="10">
                With GraphQL, the client makes declarative queries, asking for
                the exact data needed, and in exactly what was asked for is
                given in response, nothing more. This allows the client have
                control over their application, and allows the GraphQL server to
                perform more efficiently by only fetching the resources
                requested.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box
        width={`100%`}
        background={useColorModeValue(`white`, `gray.600`)}
        borderBottomWidth="1px"
      >
        <Container mt="0">
          <Flex
            flexDirection="column"
            textAlign="center"
            align="center"
            justify="space-between"
          >
            <Box maxW="900px" mt={`10`} mb={`20`}>
              <Heading as={`h2`} m="0" mb="3" size="2xl">
                Fetch many resources in a single request.
              </Heading>
              <Text fontSize="2xl" mt="10">
                GraphQL queries allow access to multiple root resources, and
                also smoothly follow references between connected resources.
                While a typical REST API would require round-trip requests to
                many endpoints, GraphQL APIs can get all the data your app needs
                in a single request. Apps using GraphQL can be quick even on
                slow mobile network connections.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box width={`100%`} background={useColorModeValue(`gray.50`, `gray.700`)}>
        <Container mt="0" pt="20" pb="20">
          <Flex
            flexDirection="column"
            textAlign="center"
            align="center"
            justify="space-between"
          >
            <Box maxW="900px" mt={`10`} mb={`20`}>
              <Heading as={`h2`} m="0" mb="3" size="2xl">
                Who's Using WPGraphQL?
              </Heading>
              <Text fontSize="2xl" mt="10">
                Digital agencies, product teams and freelancers around the world
                trust WPGraphQL in production to bridge modern front-end stacks
                with content managed in WordPress.
              </Text>
              <WhosUsing />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box width={`100%`} background={useColorModeValue(`white`, `gray.600`)}>
        <Container mt="0">
          <Flex
            flexDirection="column"
            textAlign="center"
            align="center"
            justify="space-between"
          >
            <Box maxW="900px" mt={`10`} mb={`20`}>
              <Heading as={`h2`} m="0" mb="3" size="2xl">
                Loved by developers, like you.
              </Heading>
              <Testimonials />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box
        width={`100%`}
        background={useColorModeValue(`gray.50`, `gray.700`)}
        borderBottomWidth="1px"
      >
        <Container mt="0" mb="10" minHeight={0}>
          <Flex
            flexDirection="column"
            textAlign="center"
            align="center"
            justify="space-between"
          >
            <Box maxW="900px" mt={`10`} mb={`10`}>
              <Heading as={`h2`} fontSize={`5xl`}>
                Start using WPGraphQL today!
              </Heading>
              <Stack
                mt="10"
                spacing="0"
                justify="center"
                direction={{ base: "column", sm: "row" }}
              >
                <Link to="/docs/introduction">
                  <Button
                    as="span"
                    colorScheme="blue"
                    variant="solid"
                    maxW={`300px`}
                    m={`3`}
                    mb={`5`}
                    rightIcon={<FaArrowRight fontSize="0.8em" />}
                  >
                    Get Started
                  </Button>
                </Link>
                <a href="https://wordpress.org/plugins/wp-graphql">
                  <Button
                    as="span"
                    colorScheme="orange"
                    variant="solid"
                    maxW={`300px`}
                    m={`3`}
                    mb={`5`}
                    rightIcon={<FaWordpress fontSize="0.8em" />}
                  >
                    Download the Plugin
                  </Button>
                </a>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}

export default Home

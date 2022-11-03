import React from "react"
import { Box } from "@chakra-ui/react"

const Container = ({ children, ...rest }) => (
  <Box
    as="div"
    minH="40vh"
    mx="auto"
    maxW="1300px"
    pt={8}
    px={5}
    mt="4rem"
    {...rest}
  >
    testing 1 2 3{` `}
    {children}
  </Box>
)

export default Container

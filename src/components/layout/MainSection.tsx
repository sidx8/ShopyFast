import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function MainSection() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"4xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          justifyContent={"center"}
          spacing={{ base: 6, md: 8 }}
          py={{ base: 10, md: 10 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.5,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: .5,
                },
              },
            }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"120%"}
            >
              Manage your Inventory <br />
              <Text as={"span"} color={"green.400"}>
                With ShopyFast
              </Text>
            </Heading>
          </motion.div>
          <Text color={"gray.800"}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={10}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              fontSize={{ base: "sm", md: "md" }}
              px="8"
              py="6"
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              fontWeight={520}
              boxShadow={"xl"}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
            <Button
              fontSize={{ base: "sm", md: "md" }}
              padding="6"
              rounded={"full"}
              fontWeight={520}
              color={"green.400"}
              boxShadow={"xl"}
              bg={"white"}
              href={"#"}
              _hover={{
                bg: "gray.100",
              }}
            >
              Discover Features
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import DesktopNav from "components/Navbar/DesktopNav";
import MobileNav from "components/Navbar/MobileNav";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box pt="5" px={{ base: "5", md: "10" }}>
      <Flex
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Stack
          spacing="2"
          direction={"row"}
          flex={{ base: 1, md: 0.5 }}
          justify={{ base: "center", md: "start" }}
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
        >
          <Image src="/abstract(1).svg" height={12} alt="Icon" />
          <Text
            pt="2"
            fontFamily={"heading"}
            fontWeight={550}
            fontSize="lg"
            color={useColorModeValue("gray.700", "white")}
          >
            ShopyFast
          </Text>
        </Stack>
        <DesktopNav />

        <Stack
          flex={{ base: 1, md: 0.5 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={550}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            padding="6"
            rounded={"full"}
            fontWeight={550}
            color={"green.400"}
            boxShadow={"lg"}
            bg={"white"}
            href={"#"}
            _hover={{
              bg: "gray.100",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
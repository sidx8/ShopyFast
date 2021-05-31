import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import ThemeToggle from "./ThemeToggle";

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
          <Image
            src="/abstract.svg"
            height={12}
            alt="Icon"
          />
          <Text
            pt='2'
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
          {/* <ThemeToggle /> */}
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

const DesktopNav = () => {
  return (
    <Stack
      justify={{ base: "center", md: "center" }}
      direction={"row"}
      spacing={5}
      display={{ base: "none", md: "flex" }}
      flex={{ base: 6 }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={useColorModeValue("gray.600", "gray.200")}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.800", "white"),
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={useColorModeValue("white", "gray.800")}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: "Products",
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "About Us",
    href: "#",
  },
];

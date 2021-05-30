import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box bg='#EAECF2' minHeight='100vh' maxWidth='100%' transition="0.5s ease-out">
      <Meta />
        <Box margin="0" as="main">
        <Header />
          {children}
      </Box>
    </Box>
  );
};

export default Layout;

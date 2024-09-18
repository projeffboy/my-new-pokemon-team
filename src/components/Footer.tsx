import { Box, Button, Stack } from "@mui/material";
import Manual from "./footer/Manual";
import Credits from "./footer/Credits";
import UpdateLog from "./footer/UpdateLog";
import LightDarkMode from "./footer/LightDarkMode";

const Footer = () => (
  <Stack
    component="footer"
    direction="row"
    spacing={2}
    justifyContent="center"
    alignItems="center"
  >
    {[
      <Manual />,
      <Button href="https://jefferytang.com">Jeffery Tang</Button>,
      <Credits />,
      <UpdateLog />,
      <LightDarkMode />,
    ].map((component, i) => (
      <Box key={i}>{component}</Box>
    ))}
  </Stack>
);

export default Footer;

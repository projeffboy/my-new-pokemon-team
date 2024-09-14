import { Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";

const App = () => (
  <>
    <CssBaseline />
    <Container maxWidth="xl">
      <Header />
      <main>Main</main>
      <footer>Footer</footer>
    </Container>
  </>
);

export default App;

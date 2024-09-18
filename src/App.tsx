import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <Container maxWidth="xl">
    <Header />
    <main>Main</main>
    <Footer />
  </Container>
);

export default App;

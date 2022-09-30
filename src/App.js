import { Box, Heading } from "@chakra-ui/react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Sharun/Footer/Footer";
import Navbar from "./Sharun/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;

import Dashboard from "./Components/Arsalan/Dashboard/Dashboard";
import Footer from "./Sharun/Footer/Footer";
import Navbar from "./Sharun/Navbar/Navbar";
import Arsalan from "./Components/Arsalan/Arsalan";
import SignUp from "./Sharun/SignUp/SignUp";
import SimpleCard from "./Sharun/SignIn/SignIn";

function App() {
  return (
    <>
      <Navbar />
      {/* <Dashboard /> */}
    
      <SignUp/>
      <SimpleCard/>
      <Footer />
    </>
  );
}

export default App;

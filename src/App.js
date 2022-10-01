import Dashboard from "./Components/Arsalan/Dashboard/Dashboard";
import Footer from "./Sharun/Footer/Footer";
import Navbar from "./Sharun/Navbar/Navbar";
import Arsalan from "./Components/Arsalan/Arsalan";

import { Customers } from "./Components/customers/Customers";
import { Features } from "./Components/features/Features";





function App() {
  const [userImage,setUserimage]=useState("")
  const [name,setName]=useState("")
  const [flag,setFlag]=useState(false)

  useEffect(()=>{
    setFlag(false)
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserimage(user.photoURL)
        setFlag(true)
        
        setName(user.displayName)
      }else {
        setUserimage("")
        setFlag(false)
        setName("")
      }

    })
  },[])
  
 
  return (
    <>

    <Navbar imageUrl={userImage} flag={flag} name={name} />
   <AllRoutes/>
     <Footer/>

      <Navbar />
      {/* <Dashboard /> */}
      {/* <Arsalan /> */}
     
      
      <Footer />

    </>
  );
}

export default App;

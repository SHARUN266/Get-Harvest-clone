import React, { useContext } from "react";
import { Center, Button, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import { ProjectData } from '../../Context/ProjectDataContext'
import { useNavigate } from "react-router-dom";
import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../BackEnd/Firebase";
/**
 * A button that logs the user in with Google.
 * @returns None
 */
export default function GoogleAuthButton() {
   
   const navigate=useNavigate()
   /**
    * A hook that returns the current inversion flag.
    * @returns The current inversion flag.
    */
   const {flag}=useContext(ProjectData)
   /**
    * Handles the login process for the user.
    * @returns None
    */
   const handleLogin=()=>{
    /**
     * Checks if the user is already logged in. If they are, they are redirected to the time page.
     * @param flag - a boolean that is true if the user is logged in.
     * @returns None
     */
    if(flag){
      alert("You are already login")
      navigate("/time")
    }else{
      signInWithRedirect(auth, provider);
      getRedirectResult(auth)
  .then((result) => {
    
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
   
   
   }
  /**
   * Create a CSS filter style sheet for the given filter config.
   * @param config - The filter configuration object.
   * @param url - The URL of the page that the filter is applied to.
   * @param frameURL - the URL of the frame that the filter is applied to.
   * @param fixes - The string of CSS fixes to apply to the page.
   * @param index - SitePropsIndex<InversionFix>
   * @returns A CSS style sheet that can be injected into the page.
   */

  console.log(auth,"me auth hu ")
  return (
    <Button display={'flex'} justifyContent="space-between" onClick={handleLogin} p="1rem" bg={"white"} w={"full"} variant={"outline"} >
      <FcGoogle  fontSize={'1.8rem'}/>
      <Center w="90%" textAlign={'center'} >
        <Text>Login with Google</Text>
      </Center>
    </Button>
  );
}

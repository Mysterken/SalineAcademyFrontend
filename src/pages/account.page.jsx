import Navbar from "../component/Navbar.jsx";
import {checkLoggedIn} from "../API/user.js";
import {useEffect} from "react";

export {Page}

function Page() {
  useEffect(() => {
     if (!checkLoggedIn()) {
       window.location.href = "/login"
     }
  })
  return (
    <>
      <Navbar/>
    </>
  )
}

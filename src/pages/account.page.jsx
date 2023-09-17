import Navbar from "../component/Navbar.jsx";
import {checkLoggedIn} from "../API/user.js";
import {useEffect, useState} from "react";
import {Box, Button} from "@mui/material";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

export {Page}

function Page() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
     if (!checkLoggedIn()) {
       window.location.href = "/login"
     } else {
       setIsLoggedIn(true)
     }
  }, [])

  function handleLogout() {
    toast.info('Logging out...', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      localStorage.removeItem("token")
      window.location.href = "/home"
    }, 1500)
  }

  return (
    <>
      <Navbar/>
      {isLoggedIn &&
        <Box sx={{ display: "flex" }}>
          <Button onClick={handleLogout} sx={{ m: "50px auto" }}>
            Logout
          </Button>
          <ToastContainer
            position="bottom-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Box>
      }
    </>
  )
}

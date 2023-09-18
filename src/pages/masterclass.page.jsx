import {useEffect, useState} from "react";
import {getMasterclass} from "../API/masterclass.js";
import Navbar from "../component/Navbar.jsx";
import {Box, Chip, Rating, Typography} from "@mui/material";
import ReactPlayer from "react-player";

export {Page}

function Page({url}) {

  const [masterclassId, setMasterclassId] = useState()
  const [masterclass, setMasterclass] = useState()

  useEffect(() => {
    url = url.split('/')
    setMasterclassId(url[url.length - 1])
  }, [])

  useEffect(() => {
    if (!masterclassId) return
    getMasterclass(masterclassId)
      .then((masterclass) => {
        setMasterclass(masterclass)
        console.log(masterclass)
      })
      .catch((error) => console.error(error))
  }, [masterclassId])

  return (
    <>
      <Navbar/>
      {masterclass &&
        <Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundImage: `url(${masterclass.thumbnailUrl + "/?blur=5"})`,
            backgroundSize: "cover",
            height: "85vh",
          }}>
            <Typography mb="50px" variant="h2" fontWeight="bold">{masterclass.title}</Typography>
            <Typography mb="25px" marginX="auto" maxWidth="60%" variant="h5">{masterclass.description}</Typography>
            <Box mb="25px">
              {masterclass.tags.map((tag, key) => (
                <Chip key={key} label={tag.name} variant="outlined" sx={{color: "white", margin: "0 5px"}}/>
              ))}
            </Box>
            <Rating name="read-only" defaultValue={masterclass.averageRating} readOnly/>
          </Box>
          <Box sx={{
            mt: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>
            {masterclass.lessons.map((lesson, key) =>
              <Box mb="25px" key={key}>
                <Typography mb="25px" variant="h4" fontWeight="bold">{lesson.title}</Typography>
                <Box display="flex" gap="50px">
                  <ReactPlayer url={lesson.videoUrl} controls={true} width="50vw" height={650}/>
                  <Typography maxWidth="500px" mt="25px" mb="25px" variant="h5">{lesson.description}</Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      }
    </>
  );
}

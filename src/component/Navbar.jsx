import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import {Home, LogoDev, MusicNote, Person, School, Tv} from "@mui/icons-material";
import {Box} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="relative" sx={{backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", marginTop: "16px"}}>
      <Toolbar>
        <a href="/home" style={{marginRight: "auto"}}>
          <LogoDev sx={{fill: "black"}}/>
        </a>
        <Box p="16px 32px" style={{
          display: "flex",
          gap: "48px",
          backgroundColor: "rgba(17, 18, 21, 0.9)",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "1000",
        }}>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Home sx={{marginRight: "15px"}}/>
            <Typography color="inherit" noWrap>
              HOME
            </Typography>
          </Box>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Tv sx={{marginRight: "15px"}}/>
            <Typography noWrap>
              WATCH
            </Typography>
          </Box>
          <Box style={{display: "flex", alignItems: "center"}}>
            <MusicNote sx={{marginRight: "15px"}}/>
            <Typography noWrap>
              LISTEN
            </Typography>
          </Box>
          <Box style={{display: "flex", alignItems: "center"}}>
            <School sx={{marginRight: "15px"}}/>
            <Typography noWrap>
              LEARN
            </Typography>
          </Box>
        </Box>
        <a href="/account" style={{marginLeft: "auto"}}>
          <Person sx={{fill: "black"}}/>
        </a>
      </Toolbar>
    </AppBar>
  )
}

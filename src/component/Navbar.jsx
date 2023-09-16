import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import {Home, LogoDev, MusicNote, Person, School, Tv} from "@mui/icons-material";
import {Box} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="relative" style={{backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none", margin: "16px"}}>
      <Toolbar>
        <LogoDev style={{marginRight: "auto"}}/>
        <Box p="16px 32px" style={{
          display: "flex",
          gap: "48px",
          backgroundColor: "rgba(17, 18, 21, 0.9)",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "1000",
        }}>
          <Box style={{display: "flex", alignItems: "center"}}>
            <Home style={{marginRight: "15px"}}/>
            <Typography color="inherit" noWrap>
              HOME
            </Typography>
          </Box>
          <Box style={{display: "flex", alignItems: "center"}}>
            <Tv style={{marginRight: "15px"}}/>
            <Typography noWrap>
              WATCH
            </Typography>
          </Box>
          <Box style={{display: "flex", alignItems: "center"}}>
            <MusicNote style={{marginRight: "15px"}}/>
            <Typography noWrap>
              LISTEN
            </Typography>
          </Box>
          <Box style={{display: "flex", alignItems: "center"}}>
            <School style={{marginRight: "15px"}}/>
            <Typography noWrap>
              LEARN
            </Typography>
          </Box>
        </Box>
        <Person style={{marginLeft: "auto"}}/>
      </Toolbar>
    </AppBar>
  )
}

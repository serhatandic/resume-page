import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Header from "./Components/Heading/Header";
import HeaderSum from "./Components/Heading/HeaderSum";
import Links from "./Components/Links";
import ProgressLine from "./Components/Progress/ProgressLine";
import ExperiencesBlock from "./Components/Experience/ExperiencesBlock";
import ProfilePic from "./Components/ProfilePic";
import Education from "./Components/Education";
import Skills from "./Components/Skills/Skills";
import MyProjects from "./Components/Projects/MyProjects";
import { styled } from "@mui/material/styles";

const ResponsiveBoxOuterScope = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
    height:"100%",
    alignItems: "center",
    padding:"0"
  },
}));

const ResponsiveBoxInnerScope = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    maxWidth: "460px",
    width:"90%",
    paddingLeft:"60px",
    marginRight:"60px"
  },
}));


function App() {

  return (
    <div className="App">
      <ResponsiveBoxOuterScope
        sx={{
          width: "800px",
          height: "1000px",
          backgroundColor: "#242424",
          margin: "auto",
          borderRadius: "7px",
          display: "flex",
          flexDirection: "column",
          padding:"2rem"
        }}
      >
        <ResponsiveBoxOuterScope sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ maxWidth: "500px" }}>
            <Header />
            <Box sx={{ display: "flex" }}>
              <HeaderSum />
              <Links />
            </Box>
            <ExperiencesBlock />
          </Box>
          <ResponsiveBoxInnerScope
            sx={{
              marginRight: "20px",
              marginTop: "70px",
              width: "250px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ProfilePic />
            <Skills />
            <Education />
          </ResponsiveBoxInnerScope>
        </ResponsiveBoxOuterScope>
        <MyProjects />
      </ResponsiveBoxOuterScope>
    </div>
  );
}

export default App;

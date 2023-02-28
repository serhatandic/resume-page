import { Box, Typography } from "@mui/material";
import Project from "./Project";
import MyProjectsList from "../Utils/MyProjects.json";
import { styled } from "@mui/material/styles";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    maxWidth:"460px",
  },
}));

const ResponsiveOuterBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));



const project1 = MyProjectsList.Project1;
const project2 = MyProjectsList.Project2;
const MyProjects = () => {
  return (
    <ResponsiveOuterBox sx={{ margin: "40px 20px 40px" }}>
      <Typography
        sx={{
          fontSize: "1.8rem",
          color: "#FAFAFA",
          fontFamily: "Montserrat",
          fontWeight: "600",
          marginTop: "30px",
        }}
      >
        My Projects
      </Typography>
      <hr style={{ width: "100%" }} />
      <ResponsiveBox sx={{ display: "flex" }}>
        <Project
          title={project1.title}
          link={project1.link}
          description={project1.description}
        />
        <Project
          title={project2.title}
          link={project2.link}
          description={project2.description}
        />
      </ResponsiveBox>
    </ResponsiveOuterBox>
  );
};

export default MyProjects;

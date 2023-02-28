import { Box, Grid, Typography } from "@mui/material";
import Skill from "./Skill";

const Skills = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "1.8rem",
          color: "#FAFAFA",
          fontFamily: "Montserrat",
          fontWeight: "600",
          marginTop: "41px",
        }}
      >
        Skills
      </Typography>
      <hr></hr>
      <Grid container spacing={1}>
        <Grid item>
          <Skill skill={"React"} />
        </Grid>
        <Grid item>
          <Skill skill={"Typescript"} />
        </Grid>
        <Grid item>
          <Skill skill={"Javascript"} />
        </Grid>
        <Grid item>
          <Skill skill={"Node.js"} />
        </Grid>
        <Grid item>
          <Skill skill={"Material UI"} />
        </Grid>
        <Grid item>
          <Skill skill={"Git"} />
        </Grid>
        <Grid item>
          <Skill skill={"Mocha"} />
        </Grid>
        <Grid item>
          <Skill skill={"Chai"} />
        </Grid>
        <Grid item>
          <Skill skill={"Jest"} />
        </Grid>
        <Grid item>
          <Skill skill={"HTML"} />
        </Grid>
        <Grid item>
          <Skill skill={"CSS"} />
        </Grid>
        <Grid item>
          <Skill skill={"Supabase"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;

import { Box, Typography } from "@mui/material";

const Education = () => {
  return (
    <Box>
      <Typography
        sx={{
          marginTop: "41px",
          fontSize: "1.8rem",
          color: "#FAFAFA",
          fontFamily: "Montserrat",
          fontWeight: "600",
          
        }}
      >
        Education
      </Typography>
      <hr></hr>
      <Typography
        sx={{
          marginTop: "20px",
          fontSize: "1rem",
          color: "#FAFAFA",
          fontFamily: "Montserrat",
          fontWeight: "200",
        }}
      >
        2019 - Present: Middle East Technical University, Computer Engineering
      </Typography>
    </Box>
  );
};

export default Education;

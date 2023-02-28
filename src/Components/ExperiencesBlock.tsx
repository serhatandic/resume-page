import { Box, Divider, Typography } from "@mui/material";
import ProgressFilled from "./ProgressFilled";
import Experience from "./Experience";
import experiences from "../Utils/Experiences.json";
import PorgressOutlined from "./ProgressOutlined";

const experience1 = experiences.Experience1;
const experience2 = experiences.Experience2;
const ExperiencesBlock = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginLeft: "20px",
        marginRight:"20px"
      }}
    >
      <Typography
        sx={{
          fontSize: "1.8rem",
          color: "#FAFAFA",
          fontFamily: "Montserrat",
          fontWeight: "600",
          marginTop: "30px",
        }}
      >
        Professional Experience
      </Typography>
      <hr style={{ width: "100%" }} />

      <Box sx={{ display: "flex" }}>
        <ProgressFilled date={experience2.date} />
        <Experience
          title={experience2.title}
          company={experience2.company}
          location={experience2.location}
          description={experience2.description}
          role={experience2.role}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <PorgressOutlined date={experience1.date} isFirst={true} />
        <Experience
          title={experience1.title}
          company={experience1.company}
          location={experience1.location}
          description={experience1.description}
          role={experience1.role}
        />
      </Box>
    </Box>
  );
};

export default ExperiencesBlock;

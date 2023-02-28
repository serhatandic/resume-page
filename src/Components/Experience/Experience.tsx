import { Box, Typography } from "@mui/material";

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  description: string;
  role: string;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  location,
  description,
  role,
}) => {
  return (
    <Box
      sx={{
        color: "#FAFAFA",
        marginLeft: "10px",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Typography
          sx={{ fontSize: "1rem", fontFamily: "Montserrat", fontWeight: "600" }}
        >
          {company}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Montserrat",
            fontWeight: "200",
          }}
        >
          {role} | {location}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "14px",
          fontFamily: "Montserrat",
          fontWeight: "200",
          marginTop: "10px",
          textAlign: "left",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Experience;

import { Box, Typography } from "@mui/material";

interface SkillProps {
  skill: string;
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return (
    <Box
      sx={{
        width: "70px",
        height: "25px",
        backgroundColor: "black",
        borderRadius: "4px",
        borderStyle: "solid",
        borderColor: "#FAFAFA",
        borderWidth: "1px",
        color: "#FAFAFA",
      }}
    >
      <Typography sx={{ fontSize: "12px", marginLeft: "4px", marginTop:"2.5px" }}>
        {skill}
      </Typography>
    </Box>
  );
};

export default Skill;

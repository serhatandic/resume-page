import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ProgressLine from "./ProgressLine";

interface ProgressFilledProps {
  date: string;
}

const ProgressFilled: React.FC<ProgressFilledProps> = ({ date }) => {
  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }}>
      <CircleIcon sx={{ color: "white" }} />
      <Typography
        sx={{
          color: "white" ,
          fontSize: "14px",
          fontFamily: "Montserrat",
          fontWeight: "200",
        }}
      >
        {date}
      </Typography>
      <ProgressLine />
    </Box>
  );
};

export default ProgressFilled;

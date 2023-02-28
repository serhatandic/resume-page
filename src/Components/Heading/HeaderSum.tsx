import { Box, Typography } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TranslateIcon from "@mui/icons-material/Translate";

const HeaderSum = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
        marginTop:"30px",
        gap: "20px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <MyLocationIcon sx={{ color: "white" }} />
        <Typography sx={{ marginLeft: "15px", color: "#FAFAFA" }}>
          Ankara, Turkey
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <AccessTimeIcon sx={{ color: "white" }} />
        <Typography sx={{ marginLeft: "15px", color: "#FAFAFA" }}>
          22 Years Old
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <WorkOutlineIcon sx={{ color: "white" }} />
        <Typography sx={{ marginLeft: "15px", color: "#FAFAFA" }}>
          1 Year Experience
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <TranslateIcon sx={{ color: "white" }} />
        <Typography sx={{ marginLeft: "15px", color: "#FAFAFA" }}>
          English, Turkish
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderSum;

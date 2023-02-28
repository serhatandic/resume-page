import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        marginLeft: "20px",
        marginTop: "20px",
        color: "#FAFAFA",
        fontFamily: "Montserrat",
      }}
    >
      <Typography sx={{ fontSize: "1.8rem", fontWeight: "600" }}>
        Serhat Andıç
      </Typography>
      <Typography sx={{ fontSize: "24px", fontWeight: "300", color: "#AAA" }}>
        Full Stack Software Engineer
      </Typography>
    </Box>
  );
};

export default Header;

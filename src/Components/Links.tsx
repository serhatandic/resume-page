import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";

const Links = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
        marginTop: "30px",
        gap: "20px",
      }}
    >
      <Link href="https://www.github.com/serhatandic" target="_blank">
        <Box sx={{ display: "flex" }}>
          <GitHubIcon sx={{ color: "white" }} />
          <Typography sx={{ marginLeft: "15px", color: "#FAFAFA" }}>
            Github Profile
          </Typography>
        </Box>
      </Link>

      <Link href="https://www.linkedin.com/in/serhatandic" target="_blank">
        <Box sx={{ display: "flex" }}>
          <LinkedInIcon sx={{ color: "white" }} />
          <Typography sx={{ marginLeft: "15px", color: "#FAFAFA" }}>
            Linkedin Profile
          </Typography>
        </Box>
      </Link>

      <Link href="mailto:serhatandic42@gmail.com" target="_blank">
        <Box sx={{ display: "flex" }}>
          <MailOutlineIcon sx={{ color: "white" }} />
          <Typography sx={{ marginLeft: "15px", color: "#FAFAFA" }}>
            Mail me
          </Typography>
        </Box>
      </Link>
      <Box sx={{ display: "flex" }}>
        <LanguageIcon sx={{ color: "white" }} />
        <Typography sx={{ marginLeft: "15px", color: "#FAFAFA" }}>
          mywebsite
        </Typography>
      </Box>
    </Box>
  );
};

export default Links;

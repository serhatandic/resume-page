import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width:"100%",
  },
}));


interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <ResponsiveBox
      sx={{ display: "flex", justifyContent: "left", flexDirection: "column", width:"50%" }}
    >
      <Typography
        sx={{
          fontSize: "1rem",
          color: "#FAFAFA",
          fontFamily: "Montserrat",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        {title}
      </Typography>
      <Link href={link} target={"_blank"}>
        <Typography
          sx={{
            fontSize: "0.7rem",
            color: "#FAFAFA",
            fontFamily: "Montserrat",
            fontWeight: "400",
            marginTop: "10px",
          }}
        >
          Check out
        </Typography>
      </Link>

      <Typography
        sx={{
          fontSize: "0.7rem",
          color: "#FAFAFA",
          fontFamily: "Montserrat",
          fontWeight: "400",
          marginTop: "10px",
        }}
      >
        {description}
      </Typography>

    </ResponsiveBox>
  );
};

export default Project;

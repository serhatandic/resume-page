import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ResponsiveProfilePicutre = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ProfilePic = () => {
  return (
    <ResponsiveProfilePicutre sx={{ width: "200px", alignSelf: "center" }}>
      <img
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "100%",
          objectFit: "cover",
        }}
        src="/myPhoto.jpeg"
        alt="profile pic"
      />
    </ResponsiveProfilePicutre>
  );
};

export default ProfilePic;

import { Box, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ProgressLine from "./ProgressLine";
interface ProgressFilledProps {
  date: string;
  isFirst?: boolean;
}
const PorgressOutlined: React.FC<ProgressFilledProps> = ({ date, isFirst }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RadioButtonUncheckedIcon sx={{ color: "white" }} />
      <Typography
        sx={{
          color: "white",
          fontSize: "14px",
          fontFamily: "Montserrat",
          fontWeight: "200",
        }}
      >
        {date}
      </Typography>
      {!isFirst ? <ProgressLine /> : null}
    </Box>
  );
};

export default PorgressOutlined;

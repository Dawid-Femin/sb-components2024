import classes from "./header.module.scss";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ImageSlider } from "../ImageSlider";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
          height: "600px",
          position: "relative",
        }}
        className={classes.root}
      >
        <Box sx={{ width: "35%" }}>
          <Typography component={"h1"}>Title</Typography>
          <Typography component={"h2"}>Description</Typography>
        </Box>
        <Box sx={{ width: "65%" }}>
          <ImageSlider />
        </Box>
        <Box
          sx={{
            height: "100px",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "linear-gradient(to top, white, transparent)",
            zIndex: 5,
          }}
        >
          {" "}
        </Box>
      </Box>
    </>
  );
};

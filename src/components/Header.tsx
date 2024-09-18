import { Typography, Grid2 as Grid, styled } from "@mui/material";
import leftFace from "src/img/landorus-face.png";
import rightFace from "src/img/ogerpon-teal-mask-by-jormxdos.png";

const leftFaceAlt = "Landorus Face";
const rightFaceAlt = "Ogerpon Teal Mask";

const Face = styled("img")({ height: 60 });

const Header = () => (
  <Grid
    component="header"
    container
    direction="column"
    spacing={4}
    rowSpacing={0}
    justifyContent="center"
    alignItems="center"
    mt={2}
  >
    <Grid container size={12} justifyContent="center" alignItems="center">
      <Grid>
        <Face src={leftFace} alt={leftFaceAlt} />
      </Grid>
      <Grid>
        <Typography variant="h3" component="h1">
          My Pokemon Team
        </Typography>
      </Grid>
      <Grid>
        <Face src={rightFace} alt={rightFaceAlt} />
      </Grid>
    </Grid>
    <Grid>
      <Typography variant="subtitle1" component="p">
        For Generation 6 to 9 (Scarlet/Violet)
      </Typography>
    </Grid>
    <Grid>
      <Typography variant="caption" component="p" sx={{ fontSize: "0.625rem" }}>
        Report Bugs to jeffery124@gmail.com
      </Typography>
    </Grid>
  </Grid>
);

export default Header;

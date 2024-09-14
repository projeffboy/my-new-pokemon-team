import { Grid2 as Grid, Typography } from "@mui/material";
import { css } from "@emotion/react";
import leftFace from "src/img/landorus-face.png";
import rightFace from "src/img/ogerpon-teal-mask-by-jormxdos.png";
import emotionStyled from "@emotion/styled";

function Header() {
  const leftFaceAlt = "Landorus Face";
  const rightFaceAlt = "Ogerpon Teal Mask";

  const Face = emotionStyled.img({ height: 60 });

  return (
    <header>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
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
      <Typography variant="subtitle1" component="p" align="center">
        For Generation 6 to 9 (Scarlet/Violet)
      </Typography>
      <Typography
        variant="caption"
        component="p"
        align="center"
        css={css({ fontSize: "0.625rem" })}
      >
        Report Bugs to jeffery124@gmail.com
      </Typography>
    </header>
  );
}

export default Header;

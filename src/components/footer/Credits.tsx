import { useState } from "react";
import {
  Box,
  Button,
  css,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Link,
  List,
  Typography,
} from "@mui/material";
import pokemonShowdownLogo from "src/img/pokemon-showdown-logo.png";
import CreditsList from "./credits/CreditsList";

export default function Credits() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  return (
    <>
      <Button onClick={toggleDialog}>Credits</Button>
      <Dialog
        open={isDialogOpen}
        onClose={toggleDialog}
        aria-labelledby="credits-dialog-title"
        aria-describedby="credits-dialog-description"
      >
        <DialogTitle id="credits-dialog-title">Credits</DialogTitle>
        <DialogContent id="credits-dialog-description">
          <Stack direction="row" spacing={2}>
            <Typography variant="body2" component="p">
              The folks at Pokemon Showdown are very generous to let me use all
              of their GIFs, sprites, and pokemon data. Absolutely
              indispensable!
            </Typography>
            <Link href="https://pokemonshowdown.com">
              <img
                src={pokemonShowdownLogo}
                alt="Pokemon Showdown Logo"
                css={css({ width: "100%" })}
              />
            </Link>
          </Stack>
          <Typography variant="h6" component="h2" sx={{ fontSize: "1.125rem" }}>
            Other
          </Typography>
          <List>
            <CreditsList />
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} color="primary">
            Go Back
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

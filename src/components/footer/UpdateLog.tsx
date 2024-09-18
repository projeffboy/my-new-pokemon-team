import { Folder } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const updates = [
  {
    date: "May 15, 2024",
    description: [
      <>
        You can import a Pokemon Showdown team with nicknames, although the
        nicknames are not saved (Credits: TBD).
      </>,
    ],
  },
  {
    date: "February 17, 2024",
    description: [
      <>
        Moves with variable base power like low kick, grass knot, and heavy slam
        count towards type coverage again (Credits: Timo).
      </>,
    ],
  },
  {
    date: "February 13, 2024",
    description: [<>Indigo Disk DLC update.</>],
  },
  {
    date: "October 28, 2023",
    description: [
      <>
        Moves with variable base power like low kick and grass knot now count
        towards type coverage (this used to work before gen 9).
      </>,
    ],
  },
  {
    date: "October 20, 2023",
    description: [<>Teal Mask DLC update moves (Credits: Anonymous).</>],
  },
  {
    date: "October 7, 2023",
    description: [
      <>Teal Mask DLC update (Credits: Agame4free).</>,
      <>
        Selecting Mega Sharpedo doesn't give it Sharp Beak now (Credits: Owen
        W.).
      </>,
    ],
  },
  {
    date: "April 8, 2023",
    description: [
      <>Added Iron Leaves and Walking Wake (Credits: Meta Maxis).</>,
    ],
  },
  {
    date: "Feb 14, 2023",
    description: [
      <>
        Fixed it so that moves with variable power, like low kick, are taken
        into account towards type coverage once again. (Credits: Jackalupe).
      </>,
    ],
  },
  {
    date: "Jan 17, 2023",
    description: [
      <>Mortal spin is treated as a spinner move (Credits: anonymous).</>,
    ],
  },
  {
    date: "Jan 10, 2023",
    description: [
      <>
        The Paldea sprites now match the names in the dropdown list (Credits:
        anonymous).
      </>,
    ],
  },
  {
    date: "Dec 18, 2022",
    description: [
      <>Items are updated for gen 9 (Credits: Abner Garcia II).</>,
      <>
        Fixed a bug where selecting a pokemon whose pre-evolution has a hyphen
        in their name crashes, like Basculeigon (Credits: anonymous).
      </>,
    ],
  },
  {
    date: "Nov 27, 2022",
    description: [
      <>Hisuain form pokemon have proper movesets (Credits: anonymous).</>,
    ],
  },
  {
    date: "Nov 20, 2022",
    description: [
      <>
        Sprites weren't working for pokemon of alternate formes, e.g. mega
        abomasnow (Credits: Cashton Bermingham).
      </>,
      <>
        Updated the the site for Pokemon Scarlet and Violet (generation 9).
        Expect bugs!
      </>,
      <>
        Moves with a 100% of inflicting a status condition (e.g. nuzzle) are
        counted towards the checklist. Curse is treated as a setup move.
      </>,
    ],
  },
  {
    date: "May 1, 2022",
    description: [
      <>
        Added floral healing and court change to team checklist. Renamed
        "Switch/Turn Move" to "Volt-turn Move".
      </>,
    ],
  },
  {
    date: "Jan 4, 2022",
    description: [<>Liquid voice affects team type coverage.</>],
  },
  {
    date: "Jan 3, 2022",
    description: [
      <>Fluffy and dry skin affects team defence (Anonymous x2).</>,
      <>Dark mode (to be improved).</>,
    ],
  },
  {
    date: "Nov 17, 2021",
    description: [
      <>
        Up until now, moves would not register for type coverage if you had a
        status or weak move of the same type on the same pokemon (Anonymous).
      </>,
    ],
  },
  {
    date: "May 4, 2021",
    description: [
      <>
        I used the replaceAll() Javascript function which breaks on Samsung
        browsers (Credits: Anonymous).
      </>,
    ],
  },
  {
    date: "Apr 29, 2021",
    description: [
      <>
        One of the offensive checklist items accepts either U-turn, Volt Switch,
        or Flip Turn instead of requiring both Volt Switch and U-turn.
      </>,
      <>Zygarde 10% and Oricorio-Pa'u sprites load properly now.</>,
      <>Florges and Floette don't crash anymore (Vegard Hamborg).</>,
    ],
  },
  {
    date: "Apr 8, 2021",
    description: [<>The checklist is green for checked items.</>],
  },
  {
    date: "Mar 31, 2021",
    description: [
      <>Choosing Sirfetch'd used to crash the site (dpplasma1).</>,
      <>
        Further digging uncovered that the entire Mr. Mime family crashed the
        site.
      </>,
      <>Galarian formes no longer take the base forme movesets instead.</>,
    ],
  },
  {
    date: "Jan 11, 2021",
    description: [
      <>
        Fixed flying press bug. Updated how galar sprites are presented.
        Movesets for alola formes no longer take the base forme movesets instead
        (
        <Link href="https://www.reddit.com/r/NintendoSwitch/comments/kuhc3d/pokemon_sword_and_shield_teambuilder/giv1p6v?utm_source=share&utm_medium=web2x&context=3">
          thouartthee
        </Link>
        ).
      </>,
      <>
        Updated type defence so that what was once -2 or 2 is now -1.5 or 1.5 (
        <Link href="https://www.reddit.com/r/stunfisk/comments/kuix21/updated_gen_8_teambuilder_mypokemonteamcom/gitspzk?utm_source=share&utm_medium=web2x&context=3">
          GoneWithLaw
        </Link>
        ).
      </>,
    ],
  },
  {
    date: "Jan 10, 2021",
    description: [
      <>
        Updated the site to accomodate generation 8 pokemon! Slight design
        tweaks.
      </>,
    ],
  },
  {
    date: "Mar 26, 2019",
    description: [
      <>
        Importing Pokemon Showdown teams with gender specified works now (
        <Link href="https://www.reddit.com/r/stunfisk/comments/az2f34/behold_the_ultimate_teambuilder/ejehmud?utm_source=share&utm_medium=web2x">
          jkelligan
        </Link>
        ).
      </>,
    ],
  },
  {
    date: "Mar 10, 2019",
    description: [
      <>
        Fixed a bug where changing search filters caused some of the selected
        pokemon names to disappear. Water Bubble gives you +1 for Fire (
        <Link href="https://www.reddit.com/r/stunfisk/comments/az2f34/behold_the_ultimate_teambuilder/ei6m1q0">
          beyardo
        </Link>
        ).
      </>,
      <>
        You can now pick Primal Kyogre and Primal Groudon through the Uber
        search filter. Was missing Fairy and Normal in the search filters.
        They're included now.
      </>,
    ],
  },
  {
    date: "Mar 9, 2019",
    description: [
      <>
        You can now click (as well as hover) over the types for more
        information. Good for phones. There's now a type chart button! Fixed a
        bug where alolan-form pokemon had the movesets of their non-alolan forms
        (
        <Link href="https://www.reddit.com/r/stunfisk/comments/az2f34/behold_the_ultimate_teambuilder/ei4t5g6">
          DJdeMaster
        </Link>
        ).
      </>,
      <>
        The search filter VGC 2018 is updated to VGC 2019 (
        <Link href="https://www.reddit.com/r/stunfisk/comments/az2f34/behold_the_ultimate_teambuilder/ei4xcwx">
          Elmodipus
        </Link>
        ).
      </>,
      <>
        Added the "superior" type chart (
        <Link href="http://i.imgur.com/fylyCdC.png">Bardock_RD</Link>
        ).
      </>,
      <>
        The code is now open sourced (
        <Link href="https://www.reddit.com/r/stunfisk/comments/az2f34/behold_the_ultimate_teambuilder/ei4yxo3">
          Crescive_Delta
        </Link>
        )!
      </>,
    ],
  },
  {
    date: "Mar 8, 2019",
    description: [
      <>
        Updated the Smogon formats/tiers (for the search filters). Included a
        manual page clarifying how to use this site.
      </>,
    ],
  },
  {
    date: "Mar 6, 2019",
    description: [
      <>Super effective STAB moves now count for +2 instead of +1.</>,
    ],
  },
  {
    date: "Feb 25, 2019",
    description: [
      <>
        Fixed a bug where alternate formes had the moveset of their base forme.
        For example, White Kyurem couldn't learn Fusion Flare (
        <Link href="https://www.reddit.com/r/pokemon/comments/aumnvh/brand_new_ultra_sun_and_moon_team_builder/eh95wr3">
          DMSivally
        </Link>
        ).
      </>,
      <>
        Fixing the above bug caused selecting Megas to break the app. This is
        fixed too now (
        <Link href="https://www.reddit.com/r/pokemon/comments/aumnvh/brand_new_ultra_sun_and_moon_team_builder/eha3o9p">
          kwiszat
        </Link>
        ).
      </>,
    ],
  },
];

export default function UpdateLog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  return (
    <>
      <Button onClick={toggleDialog}>Updates (May 15, 2024)</Button>
      <Dialog
        open={isDialogOpen}
        onClose={toggleDialog}
        aria-labelledby="update-log-dialog-title"
        aria-describedby="update-log-dialog-description"
      >
        <DialogTitle id="update-log-dialog-title">Update Log</DialogTitle>
        <DialogContent id="update-log-dialog-description">
          <Stack direction="row" justifyContent="center" my={2}>
            <Button
              variant="outlined"
              color="primary"
              href="https://github.com/projeffboy/my-pokemon-team"
            >
              <Folder />
              GitHub Repo
            </Button>
          </Stack>

          {updates.map(({ date, description }) => (
            <Box key={date}>
              <Typography variant="subtitle2" component="h2">
                {date}
              </Typography>
              <List dense>
                {description.map((update, i) => (
                  <ListItem key={i}>
                    <ListItemText primaryTypographyProps={{ variant: "body2" }}>
                      {update}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
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

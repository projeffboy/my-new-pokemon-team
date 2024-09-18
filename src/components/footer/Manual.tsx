import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  DialogActions,
  Link,
} from "@mui/material";

const rowsOfTypeEffectivness = [
  { effectiveness: "No effect", points: "+1.5", color: "success" },
  { effectiveness: "0.25x effective", points: "+1.5", color: "success" },
  { effectiveness: "0.5x effective", points: "+1", color: "success" },
  { effectiveness: "1x effective", points: "0", color: "primary" },
  { effectiveness: "2x super effective", points: "-1", color: "error" },
  { effectiveness: "4x super effective", points: "-1.5", color: "error" },
];

const rowsOfTerms = [
  {
    term: "Defogger",
    definition: "A pokemon that knows Defog (which blows away entry hazards).",
  },
  {
    term: "Reliable Recovery",
    definition:
      "Moves that are guaranteed to recover 50% or more of your HP every time you use it (under normal weather conditions). E.g. Recover, Softboiled, Milk Drink, Slack Off, Synthesis.",
  },
  {
    term: "Status Moves",
    definition:
      "Here, they refer to accurate moves that paralyze, burn, or poison, as well as moves that cause sleep. E.g. Toxic, Will-O-Wisp, Thunder Wave, Sing.",
  },
  {
    term: "Boosting Move",
    definition:
      "Moves that increase your stats (preferrably by 2+), like Swords Dance and Calm Mind.",
  },
  {
    term: "Choice Item",
    definition:
      "An item that increases a stat by 50% but locks you into one move. There are three of these items: Choice Band, Choice Specs, and Choice Scarf.",
  },
];

const H2 = ({
  children,
  marginTop = true,
}: {
  children: string;
  marginTop?: boolean;
}) => (
  <Typography
    variant="h6"
    component="h2"
    fontWeight="bold"
    mt={marginTop ? 4 : 0}
    mb={-0.25}
  >
    {children}
  </Typography>
);

const Subtitle = ({ children }: { children: String }) => (
  <Typography variant="subtitle2" gutterBottom fontWeight="bold">
    {children}
  </Typography>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="body2" component="p" gutterBottom>
    {children}
  </Typography>
);

export default function Manual() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  return (
    <>
      <Button onClick={toggleDialog}>Manual</Button>
      <Dialog
        open={isDialogOpen}
        onClose={toggleDialog}
        aria-labelledby="manual-dialog-title"
        aria-describedby="manual-dialog-description"
      >
        <DialogTitle id="manual-dialog-title">Manual Help Guide</DialogTitle>
        <DialogContent id="form-dialog-description">
          <H2 marginTop={false}>Team Defence</H2>
          <Subtitle>How is your team's type defence calculated?</Subtitle>
          <P>
            Every pokemon in your team is weak to certain types and resistant to
            other types. If a type is not very effective against one of your
            pokemon, you gain points. But if it's super effective, you lose
            points:
          </P>
          <Table sx={{ mb: 1 }}>
            <TableHead>
              <TableRow>
                <TableCell>Type Effectiveness Against You</TableCell>
                <TableCell align="right">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsOfTypeEffectivness.map(row => (
                <TableRow key={row.points}>
                  <TableCell>{row.effectiveness}</TableCell>
                  <TableCell align="right">
                    <Typography color={row.color}>{row.points}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <P>
            <strong>Note:</strong> Abilities like Levitate, Thick Fat, Filter,
            and Sap Sipper are taken into account. For example, if your Bronzong
            has Levitate, you get +1.5 for Ground. And if it has Heatproof, you
            get 0 for Fire instead.
          </P>

          <H2>Team Type Coverage</H2>
          <Subtitle>How is your team's type coverage calculated?</Subtitle>
          <P>
            First, what is type coverage? It's about how many types your moves
            are super effective against. If one of your moves is super effective
            against a type, you gain +1. If that move also has the same type as
            the pokemon using it (STAB), then you gain another +1.
          </P>
          <P>
            <strong>Note:</strong> Abilities like Aerilate and Pixilate are
            taken into account. So are moves like Freeze Dry and Flying Press.
            For example, Freeze Dry also gives you +1 against Water.
          </P>
          <H2>Formats (aka Tiers)</H2>
          <Subtitle>What is Ubers, OU, VGC, etc.?</Subtitle>
          <P>
            Ubers, OU, and VGC are formats (or tiers) that ban some pokemon and
            enforce certain rules. Battle Spot Singles/Doubles and VGC are the
            only ones endorsed by{" "}
            <Link href="https://www.pokemon.com/us/strategy/an-introduction-to-the-video-game-championships/">
              The Pokemon Company
            </Link>
            , while the other ones are maintained by{" "}
            <Link href="https://www.smogon.com/">Smogon</Link>. You can check
            out{" "}
            <Link href="https://www.smogon.com/ingame/battle/tiering-faq">
              Smogon's FAQ about tiers
            </Link>{" "}
            or{" "}
            <Link href="https://en.softonic.com/articles/competitive-pokemon-smogon">
              this guide that gives a brief description about each tier
            </Link>
            .
          </P>
          <H2>Team Checklist Terms</H2>
          <Subtitle>
            What do things like entry hazard, phazer, and volt-turn even mean?
          </Subtitle>
          <P>
            Smogon has a{" "}
            <Link href="https://www.smogon.com/dp/articles/pokemon_dictionary">
              dictionary for pokemon terms
            </Link>
            , but it's a bit outdated. Here are some of the terms it doesn't
            cover:
          </P>
          <Table padding="normal">
            <TableHead>
              <TableRow>
                <TableCell>Term</TableCell>
                <TableCell>Definition</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsOfTerms.map(row => (
                <TableRow key={row.term}>
                  <TableCell>{row.term}</TableCell>
                  <TableCell>{row.definition}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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

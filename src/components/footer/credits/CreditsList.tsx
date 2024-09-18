import {
  Business,
  Gesture,
  TableChart,
  List as ListIcon,
  ColorLens,
  People,
  Code,
  Layers,
  TrendingUp,
} from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Link } from "@mui/material";

const CreditsList = () =>
  [
    {
      icon: <Business />,
      text: "Nintendo, The Pokemon Company, Game Freak",
    },
    {
      icon: <Gesture />,
      text: "Ogerpon Teal Mask by jormxdos",
      link: "https://deviantart.com/jormxdos/art/Ogerpon-Teal-Mask-982365608",
    },
    {
      icon: <TableChart />,
      text: "Bulbapedia's Type Chart",
      link: "https://bulbapedia.bulbagarden.net/wiki/Type",
    },
    {
      icon: <ListIcon />,
      text: "Non-table Type Chart",
      link: "https://pinterest.ca/pin/307159637067301004/",
    },
    {
      icon: <ColorLens />,
      text: "Assigning each type a color",
      link: "https://guiguilegui.wordpress.com/2016/05/23/pokemon-type-classifier-using-their-colors",
    },
    {
      icon: <People />,
      text: "r/stunfisk",
      link: "https://reddit.com/r/stunfisk",
      secondaryText: "It's a good community",
    },
    {
      icon: <Code />,
      text: "Javascript React framework",
      link: "https://reactjs.org/",
    },
    {
      icon: <Code />,
      text: "MobX state management",
      link: "https://mobx.js.org/",
    },
    {
      icon: <Layers />,
      text: "Material UI",
      link: "https://material-ui.com/",
    },
    {
      icon: <TrendingUp />,
      text: "Google Analytics",
      link: "https://support.google.com/analytics/answer/1008015?hl=en",
      secondaryText:
        "For checking the viewcount and finding out where everyone is from (I didn't enable gender and age)",
    },
  ].map(({ icon, text, link, secondaryText }) => (
    <ListItem key={text}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={<Link href={link}>{text}</Link>}
        secondary={secondaryText || ""}
      />
    </ListItem>
  ));

export default CreditsList;

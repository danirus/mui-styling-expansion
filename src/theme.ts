import { Theme, createMuiTheme, createStyles } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

import background from './background.jpg';


export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: 16,
    button: {
      fontWeight: 600
    }
  },
});


export const baseStyles = ({ spacing }: Theme) => createStyles({
  root: {
    height: "100vh",
    background: `url(${background}) no-repeat center center fixed`,
    backgroundSize: "cover"
  },
  heading: {
    padding: spacing(2)
  },
  link: {
    paddingLeft: spacing(2),
    textDecoration: "none",

    "&:first-child": {
      paddingLeft: 0
    }
  }
});

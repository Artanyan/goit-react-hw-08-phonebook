import { NavLink } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#fff200',
    borderColor: '#035418',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#ffae00',
      borderColor: '#275232',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ff9100',
      borderColor: '#ffae00',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const myStyles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthNav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BootstrapButton variant="contained" color="primary">
        <NavLink
          to="/register"
          exact
          style={myStyles.link}
          activeStyle={myStyles.activeLink}
        >
          Sign Up
        </NavLink>
      </BootstrapButton>

      <BootstrapButton variant="contained" color="primary">
        <NavLink
          to="/login"
          exact
          style={myStyles.link}
          activeStyle={myStyles.activeLink}
        >
          Login
        </NavLink>
      </BootstrapButton>
    </div>
  );
}

import { NavLink } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '5px 10px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
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
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#0069d9',
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
    color: '#000',
  },
  activeLink: {
    color: '#fff',
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

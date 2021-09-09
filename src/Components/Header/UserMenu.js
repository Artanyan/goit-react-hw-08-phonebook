import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    fontSize: '25px',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
    },
  },
}));

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 20px',
    border: '3px solid',
    lineHeight: 1.5,
    backgroundColor: 'inherit',
    borderColor: '#000000',
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
      backgroundColor: '#fff',
      borderColor: '#fff',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default function UserMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6" noWrap>
        Welcome {userName}
      </Typography>

      <BootstrapButton
        variant="outlined"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </BootstrapButton>
    </div>
  );
}

import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from 'redux/auth';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    flexDirection: 'row',
    height: '65px',
    maxWidth: '1400px',
  },
  AppBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.AppBar}>
      <div className={classes.root}>
        <Navigation />
        {isLoggedIn && !isRefreshing ? <UserMenu /> : <AuthNav />}
      </div>
    </AppBar>
  );
}

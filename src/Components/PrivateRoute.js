import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({
  children,
  redirectTo = '/login',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isError = useSelector(authSelectors.getError);

  return (
    <Route {...routeProps}>
      {isLoggedIn && !isError ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

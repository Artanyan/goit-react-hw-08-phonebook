import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import { authOperations, authSelectors } from 'redux/auth';
import Header from 'Components/Header/Header';
import PrivateRoute from 'Components/PrivateRoute';
import PublicRoute from 'Components/PublicRoute';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePageView = lazy(() => import('views/HomePageView'));
const PhonebookView = lazy(() => import('views/PhonebookView'));
const LoginView = lazy(() => import('views/LoginView'));
const RegisterView = lazy(() => import('views/RegisterView'));

const App = () => {
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const dispatch = useDispatch();
  const isError = useSelector(authSelectors.getError);
  const customId = 'custom-id-yes';

  const notify = () =>
    toast.error(`${isError}`, {
      toastId: customId,
      position: toast.POSITION.TOP_CENTER,
    });

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  isError && notify();
  return (
    !isRefreshing && (
      <div className="mainWrapper">
        <ToastContainer />
        <Header />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomePageView />
            </PublicRoute>
            <PrivateRoute path="/phonebook">
              <PhonebookView />
            </PrivateRoute>
            <PublicRoute
              exact
              path="/login"
              restricted
              redirectTo={'./phonebook'}
            >
              <LoginView />
            </PublicRoute>
            <PublicRoute
              exact
              path="/register"
              restricted
              redirectTo={'./phonebook'}
            >
              <RegisterView />
            </PublicRoute>
          </Suspense>
        </Switch>
      </div>
    )
  );
};

export default App;

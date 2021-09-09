const getUserName = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
  getError,
};

export default authSelectors;

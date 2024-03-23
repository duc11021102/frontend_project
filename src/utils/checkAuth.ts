export const checkAuth = () => {
  let user;
  const _user = localStorage.getItem("USER");
  if (_user) {
    user = JSON.parse(_user);
  }
  if (user) {
    return {
      user: user,
      auth: true,
      role: user.role,
    };
  } else {
    return {
      user: null,
      auth: false,
      role: null,
    };
  }
};

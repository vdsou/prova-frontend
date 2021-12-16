/* eslint-disable no-use-before-define */
import { useEffect, useState } from 'react';
import api from '../../services/api';
// this hook will deal with user auth
const useAuth = () => {
  const [error, setError] = useState([]);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);
  const [hasTokenExpired, setHasTokenExpired] = useState(false);
  const [userInfo, setUserInfo] = useState({
    token: '',
    userId: '',
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const parseStoredToken = () => {
        const base64Url = storedToken.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          Buffer.from(base64, 'base64')
            .toString('ascii')
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join(''),
        );
        return JSON.parse(jsonPayload);
      };
      setIsUserAuthorized(true);
      const jwtPayload = parseStoredToken();
      setUserInfo({
        userId: jwtPayload.id,
      });
      setHasTokenExpired(jwtPayload.exp < Date.now() / 1000);
      if (hasTokenExpired) {
        handleUserLogout();
      }
      api.defaults.headers.authorization = `Bearer ${JSON.parse(storedToken)}`;
    }
  }, [hasTokenExpired]);

  const handleUserSignUp = ({ fullName, username, password }) => {
    api
      .post('/signup', {
        fullName,
        username,
        password,
      })
      .then(({ data }) => {
        setSignUpSuccess(data.success);
        window.location.href = '/welcome';
      })
      .catch((err) => {
        if (err.response) {
          const { message } = err.response.data;
          setError(message);
        }
      });
  };
  const handleUserSignIn = ({ username, password }) => {
    api
      .post('/signin', {
        username,
        password,
      })
      .then(({ data }) => {
        const { userToken } = data;
        localStorage.setItem('token', JSON.stringify(userToken));
        api.defaults.headers.authorization = `Bearer ${userToken}`;
        setUserInfo({
          ...userInfo,
          token: userToken,
        });
        setIsUserAuthorized(true);
        // navigate('/painel');
        window.location.href = '/painel';
      })
      .catch((err) => {
        if (err.response) {
          const { message } = err.response.data;
          setError(message);
        }
      });
  };
  const handleUserLogout = () => {
    localStorage.removeItem('token');
    api.defaults.headers.authorization = undefined;
  };
  return {
    handleUserSignUp,
    handleUserSignIn,
    handleUserLogout,
    userInfo,
    isUserAuthorized,
    error,
    signUpSuccess,
  };
};

export default useAuth;

// src/pages/AuthSuccessPage.js
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSpotifyAccessToken, setSpotifyTokenExpiresIn } from '../../Slices/spotifyAccessTokenSlice';


const AuthSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const SDKaccessToken = searchParams.get('access_token');
    const expiresIn = searchParams.get('expires_in');
    if (SDKaccessToken) {
      dispatch(setSpotifyAccessToken(SDKaccessToken));
      dispatch(setSpotifyTokenExpiresIn(expiresIn));
    }
    navigate('/');
  }, [searchParams, dispatch]);


  return (
    <div>
      <h1>Login Successful!</h1>
      <p>Redirecting you to the app...</p>
    </div>
  );
};

export default AuthSuccessPage;
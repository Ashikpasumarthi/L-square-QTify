// src/pages/AuthSuccessPage.js
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const AuthSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Get the access token from the URL
    const SDKaccessToken = searchParams.get('access_token');
    const expiresIn = searchParams.get('expires_in');

    if (SDKaccessToken) {
      // 2. Save the token (e.g., to localStorage or global state)
      localStorage.setItem('spotify_access_token', SDKaccessToken);
      // You can also save the expiration time to manage token refresh later
    }

    // 3. Redirect the user to the homepage
    navigate('/');
  }, [searchParams, navigate]);

  return (
    <div>
      <h1>Login Successful!</h1>
      <p>Redirecting you to the app...</p>
    </div>
  );
};

export default AuthSuccessPage;
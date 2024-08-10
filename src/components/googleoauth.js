// GoogleOAuth.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleOAuth = () => {
  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response);
    // Send response to your backend to handle authentication
  };

  const onFailure = (response) => {
    console.error('Login Failed: res:', response);
  };

  return (
    <GoogleOAuthProvider clientId="457435363093-kiipu69vm2o0t6jt9orr3c28oc8gs2ka.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleOAuth;

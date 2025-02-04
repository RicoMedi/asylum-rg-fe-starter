import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/protected/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  return (
    <button className="button_sign-up" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};

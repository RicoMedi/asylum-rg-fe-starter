import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const Profile = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div className="content-layout">
      <div>
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description"></p>
          <div className="profile-grid">
            <div className="profile__header">
              <div>
                <img
                  src={user.picture}
                  alt="Profile"
                  className="profile__avatar"
                />
              </div>
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <div className="profile__details">
              <div
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              />
            </div>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

const ProfileDropdown = ({ onLogout }) => {
  return (
    <div className="profile-dropdown">
      <ul className="dropdown-menu">
        <li>Profile</li>
        <li>Settings</li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;

import React from "react";
import Navbar from "../../Components/navbar/Navbar";

const Profile = () => {
  return (
    <div className="profile">
      <Navbar location="profil" />
      <div className="profile-pics">
        <div className="pdp"></div>
      </div>
    </div>
  );
};

export default Profile;

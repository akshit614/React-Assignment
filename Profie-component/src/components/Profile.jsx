/* eslint-disable react/prop-types */

import "./Profile.css";

const Profile = ({ name, age, location, followers, likes, photos, avatar }) => {
  return (
    <div className="profile">
      <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      <p className="profile-name"><b>{name}</b> {age}</p>
      {/* <p className="profile-age"></p> */}
      <p className="profile-location">{location}</p>
      <div className="profile-stats">
        <div>
          <span>{followers}</span>
          <p>Followers</p>
        </div>
        <div>
          <span>{likes}</span>
          <p>Likes</p>
        </div>
        <div>
          <span>{photos}</span>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;



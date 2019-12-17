import React from 'react';
import './Profile.css';

const Profile = ({ person }) => (
  <div className="profile-wrapper">
    {console.log(person)}
    <div className="profile-header">
      <img className="profile-pic" src={person.imgPath} alt="profile pic" />
      <h1 className="profile-heading">{person.firstName} {person.lastName}</h1>
      <p><a href={`https://github.com/${person.userName}`}>{`@${person.userName}`}</a></p>
    </div>
    <ol className="profile-repositories">
{
    person.repositories.map((repo) => (
  <li key={repo.url}><a className="profile-repo-link" href={repo.url}>{repo.name}</a></li>
 ))
  }
    </ol>
  </div>
);

export default Profile;

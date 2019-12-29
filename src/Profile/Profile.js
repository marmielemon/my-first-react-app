import React from 'react';
import './Profile.css';
import Button from '../components/Button/Button';
import Heading from '../components/Heading/Heading';


const Profile = ({ person }) => (
  <div className="profile-wrapper">
    {console.log(person)}
    <div className="profile-header">
      <img className="profile-pic" src={person.imgPath} alt="profile pic" />
      <h1 className="profile-heading">{person.firstName} {person.lastName}</h1>

       <Button
           link={`https://github.com/${person.userName}`}
           color="grey"
         >
           {`@${person.userName}`}
         </Button>
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

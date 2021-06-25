import { useState } from 'react';
import axios from 'axios';

const testData = [
  {
    "name": "Rhian",
    "company": "Codeminer42",
    "avatar_url": "https://avatars.githubusercontent.com/u/72531802?v=4"
  },
  {
    "name": "Angelica dos Santos",
    "company": "PUC Minas - Poços de Caldas",
    "avatar_url": "https://avatars.githubusercontent.com/u/65343425?v=4"
  },
  {
    "name": "Andre Paiva",
    "company": "Freelancer",
    "avatar_url": "https://avatars.githubusercontent.com/u/61209835?v=4"
  }
];

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
  );
}

const Card = ({avatar_url, name, company}) => {
  return (
    <div className="github-profile" style={{ margin: '1rem' }}>
      <img
        src={avatar_url}
        alt={name}
      />
      <div className="info">
        <div className="name">{name}</div>
        <div className="company">{company || <small class="gray-text">(No company)</small>}</div>
      </div>
    </div>
  );
}

const Form = ({onSubmit}) => {
  const [userName, setUserName] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);

      onSubmit(response.data);
      setUserName('');
    } catch(error) {
      if(error.response && error.response.status === 404) {
        return alert("This user could not be found.");
      }

      alert("There was an error fetching this username!");
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={userName}
        onChange={event => setUserName(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button>Add card</button>
    </form>
  );
}

const App = () => {
  const [profiles, setProfiles] = useState(testData)

  const addNewProfile = (newProfileData) => {
    setProfiles(previousProfiles => [...previousProfiles, newProfileData]);
  };

  return(
    <div>
      <div className="header">The GitHub Cards App</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;

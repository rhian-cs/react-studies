import { useEffect, useState } from "react";
import fetchGitHubProfile from "./utils/fetchGitHubProfile";

const initialUserNames = ["rhian-cs", "angelcomp", "afpaiva"];

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
  );
}

const Card = ({avatar_url, name, company}) => {
  return (
    <div className="github-profile">
      <img
        src={avatar_url}
        alt={name}
      />
      <div className="info">
        <div className="name">{name}</div>
        <div className="company">{company || <small className="gray-text">(No company)</small>}</div>
      </div>
    </div>
  );
}

const Form = ({onSubmit}) => {
  const [userName, setUserName] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const fetchResponse = await fetchGitHubProfile(userName);

    if(!fetchResponse.success) {
      return alert(fetchResponse.errorMessage);
    }

    onSubmit(fetchResponse.data);
    setUserName("");
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

const fetchInitialUserNames = (initialUserNames, addNewProfile) => {
  initialUserNames.map(async userName => {
    const fetchResponse = await fetchGitHubProfile(userName);

    if(!fetchResponse.success) { return; }

    addNewProfile(fetchResponse.data)
  });
}

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const getProfilesIds = (profilesList) => profilesList.map((profile) => profile.id);

  const profilesWithNewProfile = (previousProfiles, newProfileData) => {
    if(getProfilesIds(previousProfiles).includes(newProfileData.id)) {
      alert("This user is already in the list!");
      return previousProfiles;
    }
    return [...previousProfiles, newProfileData];
  }

  const addNewProfile = (newProfileData) => {
    setProfiles(previousProfiles => profilesWithNewProfile(previousProfiles, newProfileData));
  };

  useEffect(() => {
    if(!profiles.length) {
      fetchInitialUserNames(initialUserNames, addNewProfile);
    }
  });

  return(
    <div>
      <div className="header">The GitHub Cards App</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;

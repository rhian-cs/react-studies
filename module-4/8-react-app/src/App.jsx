import { useEffect, useState } from "react";

import fetchGitHubProfile from "./utils/fetchGitHubProfile";

import CardList from "./components/CardList"
import Form from "./components/Form"

const initialUserNames = ["rhian-cs", "angelcomp", "afpaiva"];

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

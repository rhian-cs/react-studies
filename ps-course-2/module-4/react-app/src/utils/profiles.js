const getProfilesIds = (profilesList) => profilesList.map((profile) => profile.id);

const profilesWithNewProfile = (previousProfiles, newProfileData) => {
  if(getProfilesIds(previousProfiles).includes(newProfileData.id)) {
    alert("This user is already in the list!");
    return previousProfiles;
  }

  return [...previousProfiles, newProfileData];
}

export { profilesWithNewProfile };

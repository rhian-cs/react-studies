import {get} from "axios";

const fetchGitHubProfile = async (userName) => {
  try {
    const axiosResponse = await get(`https://api.github.com/users/${userName}`);

    return { success: true, data: axiosResponse.data, errorMessage: "" };
  } catch(error) {
    let errorMessage = "There was an error fetching this username!";

    if(error.response && error.response.status === 404) {
      errorMessage = "This user could not be found.";
    }

    return { success: false, data: {}, errorMessage };
  }
}

export default fetchGitHubProfile;

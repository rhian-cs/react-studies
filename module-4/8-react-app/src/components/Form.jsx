import { useState } from "react";

import fetchGitHubProfile from "../utils/fetchGitHubProfile";

const Form = ({ onSubmit }) => {
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

export default Form;
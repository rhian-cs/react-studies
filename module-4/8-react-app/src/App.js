import React from 'react';
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

class Card extends React.Component {
  render() {
    const profile = this.props;

    return (
      <div className="github-profile" style={{ margin: '1rem' }}>
        <img
          src={profile.avatar_url}
          alt={profile.name}
        />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: '' }

  handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`)

    this.props.onSubmit(response.data);
    this.setState({ userName: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: testData
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return(
      <div>
        <div className="header">The GitHub Cards App</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;

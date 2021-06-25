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
      {testData.map(profile => <Card {...profile} />)}
    </div>
  );
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    
    return (
      <div className="github-profile" style={{ margin: '1rem' }}>
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <div className="header">{this.props.title}</div>
        <CardList />
      </div>
    );
  }
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);

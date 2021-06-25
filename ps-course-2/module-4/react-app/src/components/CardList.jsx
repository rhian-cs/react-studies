import Card from "./Card"

const CardList = ({ profiles }) => {
  return (
    <div>
      {profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
  );
}

export default CardList;
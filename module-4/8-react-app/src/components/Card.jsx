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

export default Card;
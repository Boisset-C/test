import "./testCard.scss";

export function TestCard(props) {
  return (
    <div className="test-card-container">
      <div className="test-image-wrapper">
        <img className="test-image" src={props.image} alt="upcoming guest" />
        <div className="caption">
          <h5 className="test-name">{props.name}</h5>
          <p className="test-text">{props.bio}</p>
        </div>
      </div>
    </div>
  );
}

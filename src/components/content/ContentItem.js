import { Link } from "react-router-dom";

const ContentItem = ({ hotel }) => {
  return (
    <>
      <div className="listing">
        <img src={hotel.image_url} alt={hotel.name} />
        <div className="listing__content">
          <h4>{hotel.name}</h4>
          <p>
            <strong>{hotel.price} NOK</strong>
          </p>
          <div className="listing__btnContainer">
            <Link to={`/hotel/${hotel.id}`} className="listing__btn">
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentItem;

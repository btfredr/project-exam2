import { Link } from "react-router-dom";

const FeaturedItem = ({ hotel }) => {
  return (
    <>
      <div className="featuredListing">
        <img src={hotel.image_url} alt={hotel.name} />
        <div className="featuredListing__content">
          <h4>{hotel.name}</h4>
          <p>
            <strong>{hotel.price} NOK</strong>
          </p>
          <div className="featuredListing__btnContainer">
            <Link to={`/hotel/${hotel.id}`} className="listing__btn">
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;

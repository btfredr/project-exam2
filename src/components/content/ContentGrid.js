import ContentItem from "./ContentItem";
import Spinner from "../../assets/Spinner.gif";

const ContentGrid = ({ hotels, isLoading }) => {
  return isLoading ? (
    <img src={Spinner} alt="Loading" className="loading" />
  ) : (
    <section className="listings">
      {hotels.map((hotel) => (
        <ContentItem key={hotel.id} hotel={hotel}></ContentItem>
      ))}
    </section>
  );
};

export default ContentGrid;

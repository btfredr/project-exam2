import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";

import FeaturedHotels from "./FeaturedHotels";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home">
        <div className="home__background">
          <div className="home__box">
            <h1 className="home__title">
              Looking for a place to stay?
              <span className="home__bar"></span>
            </h1>
            <div className="home__text">
              <Paragraph content="High quality rooms starting at 249 NOK" />
            </div>

            <div>
              <a href="#featured" className="home__btn">
                View Featured Hotels
              </a>
            </div>
          </div>
        </div>

        <div className="container" id="featured">
          <div className="home__title2">
            <Heading title="Featured Rooms" />
            <span className="home__bar"></span>
          </div>
          <FeaturedHotels />
        </div>
        <div className="home__filler">.</div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

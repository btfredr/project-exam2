import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

import ContentGrid from "../components/content/ContentGrid";
import SearchBar from "../components/SearchBar";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      const result = await axios(
        "https://ancient-beach-84390.herokuapp.com/hotels"
      );

      setHotels(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    fetchHotels();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Available listings" />
        <SearchBar
          hotels={hotels}
          value={value}
          onChange={(val) => setValue(val)}
        />
        <ContentGrid isLoading={isLoading} hotels={hotels} />
      </div>
      <Footer />
    </>
  );
};

export default Hotels;

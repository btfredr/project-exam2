import { useEffect, useState } from "react";
import axios from "axios";

import FeaturedGrid from "../components/content/FeaturedGrid";

const FeaturedHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      const result = await axios(
        "https://ancient-beach-84390.herokuapp.com/hotels"
      );

      setHotels(result.data);
      setIsLoading(false);
    };
    fetchHotels();
  }, []);
  return (
    <>
      <FeaturedGrid isLoading={isLoading} hotels={hotels} />
    </>
  );
};

export default FeaturedHotels;

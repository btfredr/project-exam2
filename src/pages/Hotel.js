import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import Spinner from "../assets/Spinner.gif";
import { useParams } from "react-router-dom";
import Modal from "@material-ui/core/Modal";

const Hotel = () => {
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openBooking, setOpenBooking] = useState(false);

  const { id } = useParams();

  const url = BASE_URL + "/hotels/" + id;

  useEffect(
    function () {
      async function fetchHotel() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            setHotel(json);
          } else {
            setError("An error occurred");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setIsLoading(false);
        }
      }
      fetchHotel();
    },
    [url]
  );

  if (isLoading) {
    return <img src={Spinner} alt="Loading" className="loading" />;
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title={hotel.name} />
        <div className="imageContainer">
          <div className="hotelImage">
            <img src={hotel.image_url} alt={hotel.name} />
          </div>
        </div>
        <div className="hotel">
          <div className="hotel__left">
            <h2>{hotel.Heading}</h2>
            <Paragraph content={hotel.description} />
            <div className="hotel__btnContainer">
              <button
                className="hotel__bookBtn"
                onClick={() => setOpenBooking(true)}
              >
                Book Room
              </button>
            </div>
          </div>
          <div className="hotel__right">
            <Modal open={openBooking} onClose={() => setOpenBooking(false)}>
              <BookingForm hotel={hotel} setOpenBooking={setOpenBooking} />
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;

import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { enquirySchema } from "../utils/schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    ["@media (max-width:768px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "100%",
      height: "100vh",
    },
  },
}));

const BookingForm = ({ hotel, setOpenBooking }) => {
  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const enquiryPath = BASE_URL + "/enquiries";

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(enquirySchema),
  });
  useEffect(() => {
    setTotalPrice(
      Math.floor((new Date(endDate) - new Date(startDate)) / 86400000) *
        parseFloat(hotel.price)
    );
  }, [endDate, startDate]);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setPostError(null);
    console.log(data);
    data = { ...data, total: totalPrice, hotelName: hotel.name };
    try {
      const response = await axios.post(enquiryPath, data);
      console.log(response);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={modalStyle} className={classes.paper}>
      <center>
        <h1 className="nav__logo">Holidaze</h1>
      </center>
      <form className="bookingForm" onSubmit={handleSubmit(onSubmit)}>
        {postError && <p>{postError}</p>}
        <Button onClick={() => setOpenBooking(false)}>Close</Button>
        <fieldset disabled={submitting}>
          <label>Name</label>
          <input
            type="string"
            name="name"
            ref={register}
            placeholder="Enter your full name..."
          />
          {errors.name && (
            <span className="form__error">{errors.name.message}</span>
          )}

          <div>
            <label>Email</label>
            <input
              type="string"
              name="email"
              ref={register}
              placeholder="Enter your email..."
            />
            {errors.email && (
              <span className="form__error">{errors.email.message}</span>
            )}
          </div>
          <div className="hotel__dates">
            <div className="hotel__dateContainer">
              <label>Check in</label>
              <input
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
                type="date"
                name="startDate"
                ref={register}
              />
              {errors.startDate && (
                <span className="form__error">{errors.startDate.message}</span>
              )}
            </div>

            <div className="hotel__dateContainer">
              <label>Check out</label>
              <input
                onChange={(e) => setEndDate(e.target.value)}
                value={endDate}
                type="date"
                name="endDate"
                ref={register}
              />
              {errors.endDate && (
                <span className="form__error">{errors.endDate.message}</span>
              )}
            </div>
          </div>
          <label>Guests</label>
          <select name="capacity" ref={register}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          {errors.capacity && (
            <span className="form__error">{errors.capacity.message}</span>
          )}
          {success ? (
            <p className="form__success">Your booking was confirmed!</p>
          ) : null}
          <button type="submit" className="form__btn">
            {submitting ? "Booking ..." : "Book"}
          </button>
          <label>Price</label>
          <p>{hotel.price} NOK</p>
          <label>Total</label>
          <p>{totalPrice ? totalPrice : hotel.price} NOK</p>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;

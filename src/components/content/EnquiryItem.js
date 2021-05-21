const EnquiryItem = ({ enquiry }) => {
  return (
    <div className="message">
      <div className="message__content">
        <label>Name:</label>
        <p>{enquiry.name}</p>
        <label>Hotel Name:</label>
        <p>{enquiry.hotelName}</p>
        <label>Total:</label>
        <p>{enquiry.total} NOK</p>
        <label>Email:</label>
        <p>{enquiry.email}</p>
        <label>Start Date:</label>
        <p>{enquiry.startDate}</p>
        <label>End Date:</label>
        <p>{enquiry.endDate}</p>
      </div>
    </div>
  );
};

export default EnquiryItem;

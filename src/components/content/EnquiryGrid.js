import EnquiryItem from "./EnquiryItem";
import Spinner from "../../assets/Spinner.gif";

const EnquiryGrid = ({ enquiries, isLoading }) => {
  return isLoading ? (
    <img src={Spinner} alt="Loading" className="loading" />
  ) : (
    <section className="messages">
      {enquiries.map((enquiry) => (
        <EnquiryItem key={enquiry.id} enquiry={enquiry}></EnquiryItem>
      ))}
    </section>
  );
};

export default EnquiryGrid;

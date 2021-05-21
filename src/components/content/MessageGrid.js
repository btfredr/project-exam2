import MessageItem from "./MessageItem";
import Spinner from "../../assets/Spinner.gif";

const ContentGrid = ({ messages, isLoading }) => {
  return isLoading ? (
    <img src={Spinner} alt="Loading" className="loading" />
  ) : (
    <section className="messages">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message}></MessageItem>
      ))}
    </section>
  );
};

export default ContentGrid;

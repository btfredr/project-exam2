import Paragraph from "../Paragraph";

const MessageItem = ({ message }) => {
  return (
    <div className="message">
      <div className="message__content">
        <label>Name:</label>
        <Paragraph content={message.name} />
        <label>Email:</label>
        <Paragraph content={message.email} />
        <label>Message:</label>
        <Paragraph content={message.message} />
      </div>
    </div>
  );
};

export default MessageItem;

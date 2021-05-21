import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Link to="/" className="footer__logo">
          <h1>Holidaze</h1>
        </Link>
        <Paragraph content="&copy; 2021" />
      </footer>
    </>
  );
};

export default Footer;

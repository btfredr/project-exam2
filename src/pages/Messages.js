import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CONTACT_PATH } from "../utils/constants";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";

import MessageGrid from "../components/content/MessageGrid";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  useEffect(() => {
    const fetchMessages = async () => {
      const result = await axios(CONTACT_PATH);

      setMessages(result.data);
      setIsLoading(false);
    };
    fetchMessages();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Messages" />
        <MessageGrid isLoading={isLoading} messages={messages} />
      </div>
      <Footer />
    </>
  );
};

export default Messages;

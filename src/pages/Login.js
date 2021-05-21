import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Login" />
        <LoginForm />
      </div>

      <Footer />
    </>
  );
};

export default Login;

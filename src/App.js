import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Add from "./pages/Add";
import Enquiries from "./pages/Enquiries";
import Messages from "./pages/Messages";
import Hotel from "./pages/Hotel";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/hotel/:id" component={Hotel} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/add" component={Add} />
          <Route path="/enquiries" component={Enquiries} />
          <Route path="/messages" component={Messages} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

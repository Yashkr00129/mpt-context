import { Provider } from "./Context/Context";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import EditAssignments from "./Components/Edit";
import Homepage from "./Components/Homepage";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

function App() {
  
  return (
    <Provider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<Form />} />
          <Route path="/edit/:id" element={<EditAssignments />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

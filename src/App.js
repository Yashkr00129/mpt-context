import { Provider } from "./Context/Context";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import EditAssignments from "./Components/Edit";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <Provider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<Form />} />
          <Route path="/edit/:id" element={<EditAssignments />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Feeds from "./Pages/Feeds"
import Login from "./Pages/Login";
import Register from "./Pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Feeds />} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<h1>No found</h1>} />
      </Routes>

    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Podcast";
import Landingpage from "./LandingPage";
import Navbar from "./Navbar";
import Videos from "./Videos";
import Blogs from "./Blogs";
import Blogstwo from "./Blogstwo";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/podcast" element={<About />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogstwo" element={<Blogstwo />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

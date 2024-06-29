import styles from "./style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Apply,
  ApplyProgram,
  // Apply1,
  // Apply2,
  // Apply3,
  // Apply4,
  // Apply5,
  Works,
  Partners,
} from "./components";
// import { ApplyProgram } from "./components/Main/Apply";
import Career from "./components/CareerNav";
import FAQPage from "./components/FAQPage";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Router>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="career" element={<Career />} />
            <Route path="apply" element={<Apply />} />
            {/* <Route path="apply-STEM" element={<Apply1 />} />
            <Route path="apply-IT" element={<Apply2 />} />
            <Route path="apply-IT-program" element={<Apply3 />} />
            <Route path="apply-diploma" element={<Apply4 />} />
            <Route path="apply-CBT" element={<Apply5 />} /> */}
            <Route path="/apply/:program" element={<ApplyProgram />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/how-it-works" element={<Works />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;

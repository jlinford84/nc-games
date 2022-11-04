import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import IndividualReview from "./components/IndividualReview";
import ReviewComments from "./components/ReviewComments";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SortHandle from "./components/SortHandle";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<SortHandle />} />
          <Route path="/category/:category_name" element={<Category />} />
          <Route path="/reviews/:id" element={<IndividualReview />} />
          <Route path="/reviews/:id/comments" element={<ReviewComments />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

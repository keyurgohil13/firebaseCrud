import { Route, Routes } from "react-router-dom";
import EditBook from "./componants/EditBook/EditBook";
import Home from "./containers/Home";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/editBook" element={<EditBook />}/> 
      </Routes>
    </>
  );
}

export default App;

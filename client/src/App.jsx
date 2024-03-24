import { Route, Routes } from "react-router-dom";

import EditorLayout from "./layout/EditorLayout.jsx";
import HomePage from  "./pages/HomePage.jsx"

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path="/editor/:roomId" element={<EditorLayout />} />
    </Routes>
  )
}

export default App;

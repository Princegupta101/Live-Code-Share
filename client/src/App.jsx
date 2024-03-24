import { Route, Routes } from "react-router-dom";

import HomePage from  "./pages/HomePage.jsx"

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>
  )
}

export default App;

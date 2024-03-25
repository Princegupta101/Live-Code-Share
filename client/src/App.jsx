import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import Toast from "./components/Toast/Toast.jsx"
import EditorLayout from "./layout/EditorLayout.jsx";
import HomePage from  "./pages/HomePage.jsx"

function App() {
  return (
    <BrowserRouter>
      <Toast/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/editor/:roomId" element={<EditorLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

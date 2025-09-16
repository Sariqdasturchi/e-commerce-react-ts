import type React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/home";
import Header from "./components/header/header";



const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
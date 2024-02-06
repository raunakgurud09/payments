import { BrowserRouter, Routes, Route } from "react-router-dom"
import Success from "./pages/Success"
import Products from "./pages/Products"
import Failure from "./pages/Failure"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Products} />
        <Route path="/success" Component={Success} />
        <Route path="/failure" Component={Failure} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

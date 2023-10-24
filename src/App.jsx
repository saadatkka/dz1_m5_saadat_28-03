
import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout.jsx";
import Createpost from "./pages/createpost.jsx";
import Postpage from "./pages/postpage.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Postpage/>}/>
                <Route path='/createpost' element={<Createpost/>}/>
            </Route>
        </Routes>

    </>
  )
}

export default App

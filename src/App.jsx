import { BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Step1 from "./components/report/Step1"
import Step2 from "./components/report/Step2"

function App() {
 

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/report/step1" element={<Step1 />}/>
          <Route path="/report/step2" element={<Step2 />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

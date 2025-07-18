import { Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom"
import Homepage from "./pages/Home"
import Hero from "./components/Hero"
import Mentor from "./pages/Mentors"
import AIGuide from "./pages/AiGuide"
import Contact from "./pages/Contact"
import Companies from "./pages/Companies"
import StudentProjects from "./pages/Projects"
import CourseModulePage from "./pages/Courses"
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mentors" element={<Mentor />} />
        <Route path="/aiguide" element={<AIGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/project" element={<StudentProjects />} />
        <Route path="/courses" element={<CourseModulePage/>}/>
      </Routes>
    </div>
  )
}

export default App

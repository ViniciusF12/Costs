import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import NewProject from './Components/Pages/NewProject';
import Container from './Components/Layout/Container';
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Projects from './Components/Pages/Projects';
import Project from './Components/Pages/Project';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newproject" element={<NewProject />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;

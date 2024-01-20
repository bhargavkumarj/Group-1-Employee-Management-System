//App.js
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import SignupForm from './components/SignupForm';
import EmployeeTable from './components/EmployeeTable';
import CompanyDetails from './components/CompanyDetails';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path="/home" exact element={<Home />} /> */}
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/" exact element={<Sidebar/>} />
          <Route path="/signup" exact element={<SignupForm/>} />
          <Route path="/" exact component={SignupForm} />
          <Route path="/employeeTable" component={EmployeeTable} />
          <Route path="/company" component={CompanyDetails} />
          <Route path="/" element={<EmployeeTable />} />
          <Route path="/add" element={<SignupForm />} />
        <Route path="/update/:id" element={<SignupForm />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}



export default App;

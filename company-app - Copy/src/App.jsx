import { Routes, Route, useLocation } from "react-router-dom"; // Remove BrowserRouter from here
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import "./App.css"; 
import Home from "./Pages/Home";
import MasterData from "./Pages/MasterData";
import Machine from './Pages/Machine';
import MachineType from './Pages/MachineType';
import MainSection from './Pages/MainSection';
import Parameter from './Pages/Parameter';
import ParameterQualifiedValue from './Pages/ParameterQualifiedValue';
import SectionTemplate from './Pages/SectionTemplate';
import SubSection from './Pages/SubSection';
import Tolerance from './Pages/Tolerance';
// import UserManage from "./Pages/Usermanage"; // Comment out if not needed
import Login from "./Pages/Login";

const App = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/";
  const isAdminDashPage = location.pathname === "/admindash"; 
  const showTopbar = !(isLoginPage || isAdminDashPage);

  return (
    <div className="app-wrapper">
      <Topbar show={showTopbar} />
      {showTopbar && <Sidebar />}
      
      <div className={`main-content ${isLoginPage || isAdminDashPage ? "login-page" : ""}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/masterData" element={<MasterData />} />
          <Route path="/machine" element={<Machine />} />
          <Route path="/machine-type" element={<MachineType />} />
          <Route path="/main-section" element={<MainSection />} />
          <Route path="/parameter" element={<Parameter />} />
          <Route path="/parameter-qualified-value" element={<ParameterQualifiedValue />} />
          <Route path="/section-template" element={<SectionTemplate />} />
          <Route path="/sub-section" element={<SubSection />} />
          <Route path="/tolerance" element={<Tolerance />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

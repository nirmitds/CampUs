import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Register from "./pages/Register";

import StudentLayout from "./layout/StudentLayout";
import Dashboard from "./pages/StudentDashboard";
import Exchange from "./pages/Exchange";
import Academic from "./pages/Academic";
import Emergency from "./pages/Emergency";
import Wallet from "./pages/Wallet";
import Profile from "./pages/StudentProfile";

// Academic Pages
import Notes from "./pages/Notes";
import Assignments from "./pages/Assignments";
import Timetable from "./pages/Timetable";
import Results from "./pages/Results";
import Doubts from "./pages/Doubts";
import Groups from "./pages/Groups";

// Emergency Pages
import Security from "./pages/Security";
import Medical from "./pages/Medical";
import ReportIssue from "./pages/ReportIssue";
import Support from "./pages/Support";

// About Page
import About from "./pages/About";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* AUTH PAGES */}

        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />



        {/* STUDENT PANEL */}

        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <StudentLayout />
            </ProtectedRoute>
          }
        >

          {/* Dashboard */}

          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />



          {/* Main Pages */}

          <Route path="exchange" element={<Exchange />} />
          <Route path="academic" element={<Academic />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />



          {/* Academic Section */}

          <Route path="notes" element={<Notes />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="results" element={<Results />} />
          <Route path="doubts" element={<Doubts />} />
          <Route path="groups" element={<Groups />} />



          {/* Emergency Section */}

          <Route path="security" element={<Security />} />
          <Route path="medical" element={<Medical />} />
          <Route path="report" element={<ReportIssue />} />
          <Route path="support" element={<Support />} />

        </Route>


      </Routes>

    </BrowserRouter>

  );

}

export default App;
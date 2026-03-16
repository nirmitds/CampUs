import React, { useState } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/campus.png";

function AdminLayout() {

  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  const getLinkStyle = ({ isActive }) => ({
    ...linkStyle,
    background: isActive ? "#1e293b" : "transparent",
    borderLeft: isActive ? "4px solid #3b82f6" : "4px solid transparent"
  });

  return (

    <div style={layoutStyle}>

      {/* Overlay */}

      {open && (
        <div
          style={overlay}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}

      <div
        style={{
          ...sidebarStyle,
          transform: open ? "translateX(0)" : "translateX(-100%)"
        }}
      >

        <h2 style={{ marginBottom: "30px" }}>Admin Panel</h2>

        <NavLink onClick={closeSidebar} style={getLinkStyle} to="/admin/dashboard">
          📊 Dashboard
        </NavLink>

        <NavLink onClick={closeSidebar} style={getLinkStyle} to="/admin/users">
          👥 Users
        </NavLink>

        <NavLink onClick={closeSidebar} style={getLinkStyle} to="/admin/exchanges">
          🔁 Exchange Requests
        </NavLink>

        <NavLink onClick={closeSidebar} style={getLinkStyle} to="/admin/reports">
          📄 Reports
        </NavLink>

        <NavLink onClick={closeSidebar} style={getLinkStyle} to="/admin/settings">
          ⚙️ Settings
        </NavLink>

        <button style={logoutBtn} onClick={logout}>
          Logout
        </button>

      </div>


      {/* Main Area */}

      <div style={mainArea}>

        {/* Topbar */}

        <div style={topbar}>

          <div style={topLeft}>

            <button
              style={menuButton}
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

            {/* Hide back button on admin dashboard */}

            {location.pathname !== "/admin/dashboard" && (

              <button
                style={backButton}
                onClick={goBack}
              >
                ←
              </button>

            )}

          </div>

          <div style={topCenter}>
            CampUs Admin
          </div>

          <div style={topRight}>
            <img
              src={logo}
              alt="Campus"
              style={logoStyle}
            />
          </div>

        </div>


        {/* Page Content */}

        <div style={contentStyle}>
          <Outlet />
        </div>

      </div>

    </div>

  );

}

export default AdminLayout;


/* ================= STYLES ================= */

const layoutStyle = {
  display: "flex",
  minHeight: "100vh",
  width: "100%"
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
  zIndex: 900
};

const sidebarStyle = {
  width: "230px",
  background: "#0f172a",
  color: "white",
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  transition: "0.3s ease",
  zIndex: 1000
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginBottom: "15px",
  fontSize: "15px",
  padding: "10px",
  borderRadius: "6px",
  transition: "0.2s"
};

const logoutBtn = {
  marginTop: "auto",
  background: "#ef4444",
  border: "none",
  padding: "10px",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer"
};

const mainArea = {
  flex: 1,
  width: "100%"
};

const topbar = {
  height: "60px",
  background: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  position: "sticky",
  top: 0,
  zIndex: 500
};

const topLeft = {
  width: "120px",
  display: "flex",
  alignItems: "center",
  gap: "10px"
};

const topCenter = {
  flex: 1,
  textAlign: "center",
  fontWeight: "700",
  fontSize: "25px"
};

const topRight = {
  width: "120px",
  display: "flex",
  justifyContent: "flex-end"
};

const menuButton = {
  fontSize: "26px",
  border: "none",
  background: "none",
  cursor: "pointer",
  height: "40px",
  width: "40px"
};

const backButton = {
  fontSize: "22px",
  border: "none",
  background: "none",
  cursor: "pointer"
};

const logoStyle = {
  width: "40px",
  height: "40px",
  objectFit: "contain"
};

const contentStyle = {
  padding: "30px",
  background: "#f1f5f9",
  minHeight: "calc(100vh - 60px)"
};
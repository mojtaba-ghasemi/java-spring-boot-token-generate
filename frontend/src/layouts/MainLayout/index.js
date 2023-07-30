import React from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logos/while-logo.svg";
import { navItems } from "../../constants";
import { Text } from "../../components";
import "./index.scss";
export default function MainLayout() {
  
 
  return (
    <Row className="MainLayout align-items-start overflow-hidden">
      <Col  xs="12" lg="3" xl="2" className="sidebar-section p-0">
        <div className="sidebar bg-dark p-4 position-relative">
          <div
            className="toggle position-absolute display-5"
          >
            <i className="light d-block text-light bi bi-triangle-fill" />
            <i className="dark d-block text-dark bi bi-triangle-fill position-absolute top-0 left-0" />
          </div>
          <div>
            <img className="w-100 mb-5" src={logo} alt="logo" />
            <div className="nav-items">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.pathname}
                  className={({ isActive }) =>
                    `d-flex align-items-center w-100 text-white py-2 col-gap-2 border transition ${
                      isActive
                        ? "active border-danger"
                        : "border-white opacity-5"
                    }`
                  }
                >
                  <i className={`bi bi-${item.icon}`} />
                  <Text value={item.title} />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </Col>
      <Col xs="12" lg="9" xl="10" className="main-section">
        <header className="row w-100 p-3 d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between">
          <Col xs="12" lg="6">
            <InputGroup className="rounded overflow-hidden shadow-sm">
              <InputGroup.Text className="bg-white border-0">
                <i className="bi bi-search" />
              </InputGroup.Text>
              <FormControl
                className="shadow-none border-0"
                placeholder="Search..."
              />
            </InputGroup>
          </Col>
          <Col xs="12" lg="6">
            <div className="w-fit d-flex flex-center col-gap-3 mx-auto me-lg-0">
              <div>
                <h6 className="fw-bold"></h6>
                <p className="text-secondary"></p>
              </div>
            </div>
          </Col>
        </header>
        <main className="px-3 pb-5">
          <Outlet />
        </main>
      </Col>
    </Row>
  );
}

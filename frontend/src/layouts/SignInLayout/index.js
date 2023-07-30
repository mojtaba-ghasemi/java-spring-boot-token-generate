import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import "./index.scss";
export default function SignInLayout() {
  return (
    <React.Fragment>
      <div className="SignInLayout d-flex flex-column">
        <header className="container py-3">
        </header>
        <main className="py-4 my-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Welcome to the Help Center. This page is designed to guide users through
        the main features of the website and make navigation easier. Whether you
        need help finding information, understanding how to use a page, or
        learning what each section does, this help area provides simple
        explanations and support so you can use the website with confidence.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

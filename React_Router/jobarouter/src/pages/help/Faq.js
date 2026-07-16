import React from "react";

function Faq() {
  return (
    <div className="faq">
      <h3>Frequently Asked Questions</h3>

      <div className="question">
        <p>
          <strong>What is Jobarouter?</strong>
        </p>
        <p>
          Jobarouter is a simple React website that helps users explore
          different pages using React Router. It is built to practice routing,
          layouts, navigation, and page structure.
        </p>
      </div>

      <div className="question">
        <p>
          <strong>How do I navigate between pages?</strong>
        </p>
        <p>
          You can use the navigation links at the top of the page to move
          between Home, About, Help, and other sections without refreshing the
          browser.
        </p>
      </div>

      <div className="question">
        <p>
          <strong>What is the purpose of this website?</strong>
        </p>
        <p>
          The purpose of this website is to practice building a React app with
          multiple pages, reusable components, and clean routing using React
          Router.
        </p>
      </div>

      <div className="question">
        <p>
          <strong>Why is the page not refreshing when I click links?</strong>
        </p>
        <p>
          React Router changes the page content on the client side, so the
          browser does not need to fully reload the website.
        </p>
      </div>

      <div className="question">
        <p>
          <strong>Where does the page content appear?</strong>
        </p>
        <p>
          The page content appears inside the Outlet component in the layout.
          The layout stays the same, while the Outlet changes based on the
          current route.
        </p>
      </div>
    </div>
  );
}

export default Faq;

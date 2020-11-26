import React from "react";

export default function Header(props) {
  return (
    // <header style={headerStyle}>
    //     <h1>Todo App {props.app_version}</h1>
    // </header>
    <div className="navbar navbar-dark bg-dark">
      
        <a className="navbar-brand" href="/">
          <img
            src="/logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Todo List {props.app_version}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link"
              href="https://github.com/lgalonso/react-todo"
            >
              <i className="fab fa-github"></i>
              GitHub Repo
            </a>
          </div>
        </div>
    </div>
  );
}

// const headerStyle = {
//   background: "#333",
//   color: "white",
//   textAlign: "center",
//   padding: "10px",
// };

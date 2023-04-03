import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      data-bs-theme="dark"
      style={{
        backgroundColor: 'var(--greenBg)'
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Ações Ambientais
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="flora">
                Flora
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fauna">
                Fauna
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/arqueologia">
                Arqueologia
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aguas">
                Águas
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Viveiros
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    target="_blank"
                    className="dropdown-item"
                    href="https://drive.google.com/file/d/1irjRqrJmyrBm6qNMXhOOkfTBrJt-ohsZ/view?usp=sharing"
                  >
                    Mapa das Sementeiras
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="dropdown-item"
                    href="https://drive.google.com/file/d/1EOQozKbjeocNsIi3K3YNf4Z0fnuzQhts/view?usp=sharing"
                  >
                    Mapa da Rustificação
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

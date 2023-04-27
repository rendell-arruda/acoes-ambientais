import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

export default function Header() {
  async function handleLogout() {
    await logout();
  }
  const { logout } = useContext(AuthContext);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      data-bs-theme="dark"
      style={{
        backgroundColor: 'var(--greenBg)'
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
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
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flora">
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
                    href="https://drive.google.com/file/d/1irjn2_kQmv_MAjeXKx-ygtmoGleDLJ8T/view?usp=sharing"
                  >
                    Mapa das Sementeiras
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="dropdown-item"
                    href="https://drive.google.com/file/d/1REa1xNZhPUifPW9sGeRqcESdwgIsX6wm/view?usp=sharing"
                  >
                    Mapa da Rustificação
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a onClick={handleLogout} className="nav-link text-primary">
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

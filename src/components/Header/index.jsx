import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    // <div className="menu-container">
    //   <nav
    //     className="navbar navbar-expand-lg navbar-dark"
    //     data-bs-theme="dark"
    //     style={{
    //       backgroundColor: 'var(--greenBg)'
    //     }}
    //   >
    //     <div classNameName="container-fluid d-flex justify-content-">
    //       <Link className="navbar-brand" to="/">
    //         Ações Ambientais | RMB
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNavDropdown"
    //         aria-controls="navbarNavDropdown"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page"></Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/flora">
    //               Flora
    //             </Link>
    //           </li>

    //           <li className="nav-item">
    //             <Link className="nav-link" href="#links-importantes">
    //               Links Importantes
    //             </Link>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <Link
    //               className="nav-link dropdown-toggle"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //               id="viveiros"
    //             >
    //               Viveiros
    //             </Link>
    //             <ul className="dropdown-menu">
    //               <li>
    //                 <a
    //                   className="dropdown-item"
    //                   href="https://drive.google.com/file/d/1irjRqrJmyrBm6qNMXhOOkfTBrJt-ohsZ/view?usp=sharing"
    //                   target="_blanck"
    //                 >
    //                   Sementeira - Casa P4
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   className="dropdown-item"
    //                   href="https://drive.google.com/file/d/1EOQozKbjeocNsIi3K3YNf4Z0fnuzQhts/view?usp=sharing"
    //                   target="_blanck"
    //                 >
    //                   Rustificação - Casa P6
    //                 </a>
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      data-bs-theme="dark"
      style={{
        backgroundColor: 'var(--greenBg)'
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from 'react'

const Navbar = () => {
    return (
      <nav 
      className="navbar navbar-expand-lg navbar-light fixed-top py-3" 
      data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center fw-semi-bold fs-3" href="/">
            <img className="me-3" src="assets/img/gallery/logo.png" alt="dumps solutions" />
          </a>
          <button className="navbar-toggler collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto pt-2 pt-lg-0 font-base">
              <li className="nav-item px-2" data-anchor="data-anchor">
                <a className="nav-link fw-medium active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <a className="nav-link" href="/vendors">Vendors</a>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <a className="nav-link" href="/guarantee">Guarantee</a>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <a className="nav-link" href="/search">Search</a>
              </li>
            </ul>
            <form className="ps-lg-5 d-flex gap-2">
              <button className="btn btn-outline-primary order-0">Login</button>
              <button className="btn btn-primary order-0">Register</button>
            </form>
          </div>
        </div>
      </nav>
        
    )
}

export default Navbar

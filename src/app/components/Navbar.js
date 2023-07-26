import React from 'react'


export default function Navbar() {
  return (
    <div className="container">
  <nav className="navbar navbar-expand-lg" >
  <div class="container-fluid  Header ">
    <a class="navbar-brand  Header-text" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active Header-text" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link Header-text" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle Header-text" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu Header-text">
            <li><a class="dropdown-item Header-text" href="#">Action</a></li>
            <li><a class="dropdown-item Header-text" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item Header-text" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled Header-text">Disabled</a>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
  </div>
  )
}

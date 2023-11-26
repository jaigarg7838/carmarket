import React, { Component } from "react";
import "boxicons/css/boxicons.min.css";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Link from "next/link";

export default function Footer(){
    return(
        <div className='footer-specs about' id='Footer'>
  
<div class="d-flex flex-column h-100">





    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6 ">
                    <h5 class="h1 text-white">CarMarket</h5>
                    <p class="small text-white">Explore the world's of car with us</p>
                    <p class="small text-white mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#"></a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3 text-decoration-underline">Quick links</h5>
                    <ul class="list-unstyled text-white">
                    <li>
            <Link className="link-color" href="/">Home</Link>
          </li>
          <li>
            <Link className="link-color" href="/#About">About</Link>
          </li>
          <li>
            <Link className="link-color" href="/#Budget">Cars</Link>
          </li>
          <li>
            <Link className="link-color" href="/#Electric">Electric Car</Link>
          </li>
          <li>
            <Link className="link-color" href="/#Footer">Contact</Link>
          </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3 text-decoration-underline">Budget Cars</h5>
                    <ul class="list-unstyled text-white">
                    <li>
            <Link className="link-color" href="/components/undertenlakh">UnderTenLakh</Link>
          </li>
          <li>
            <Link className="link-color" href="/components/undertwentylakh">UnderTwentyLakh</Link>
          </li>
          <li>
            <Link className="link-color" href="/components/underthirtylakh">UnderThirtyLakh</Link>
          </li>
          <li>
            <Link className="link-color" href="/components/underfiftylakh">UnderFiftyLakh</Link>
          </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3 text-decoration-underline">Contact Us</h5>
                    <p class="small text-white">Email id:- jaigarg7838@gmail.com</p>
                    <p class="small text-white">LinkedIn:- https://www.linkedin.com/in/jai-garg-795173218/</p>
                </div>
            </div>
        </div>
    </footer>
</div>
</div>
    );
}


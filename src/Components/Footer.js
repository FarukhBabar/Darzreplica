import React from 'react'
import "../Components/full.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  const ins = "https://www.instagram.com/invites/contact/?i=1gfo9q0zfeur5&utm_content=5x06kax "
  const linked ="https://www.linkedin.com/in/farukh-babar-7a87542a8"
  
  return (
    <div>
<footer className="f1 footer mt-5">
  <div className="footer-top">
    <div className="container">
      <div className="footer-border-bottom pb-6 mb-5">
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-3 my-4">
          <div className="text-white-65 mb-4 te1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
          <div className="nav footer-socila-icon">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <Link to={ins} target="_blank">
              <i className="fab fa-instagram" />
            </Link>
            <Link to={linked} target='_blank'>
              <i className="fab fa-linkedin-in" />
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-lg-2 my-4">
          <h5 className="te1 h6 mb-4">Customer</h5>
          <ul className="list-unstyled bdddf footer-links">
            <li>
              <a href="#">Get Corpo</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-2 my-4">
          <h5 className="te1 h6 mb-4">Product</h5>
          <ul className="list-unstyled bdddf footer-links te1">
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Join our team</a>
            </li>
            <li>
              <a href="#">Elements</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-2 my-4">
          <h5 className="te1 h6 mb-4">Company</h5>
          <ul className="list-unstyled bdddf footer-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Legal &amp; Security</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">We're hiring!</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 my-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050398.573097836!2d68.9966984!3d30.36295725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1709438242569!5m2!1sen!2s" 
        width="300" height="250" allowfullscreen="" loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"></iframe>  
         {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050398.57309783!2d68.9966984!3d30.36295725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1709550579872!5m2!1sen!2s" 
         width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      */}
          </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom footer-border-top light py-3">
    <div className="container text-center">
      <p className="m-0">© 2021 copyright <a href="#" className="text-reset text-white">Bootdey.com</a></p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer

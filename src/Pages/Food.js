import React from 'react'
import "../Components/full.css"
import Foods from "../Components/Foods"
import Footer from '../Components/Footer'
const Food = () => {
  return (
    <div className='foodspag'>
    <div className="d-flex row foodh mt-1">
  <div className="foo ms-3 mb-3 col-lg-2 col-md-6 col-sm-12  ">
    <img src="https://static-01.daraz.pk/p/7b5db45e9390bdaf5a80135390be451e.jpg" alt className="fo mt-2" />
    <p className="ms-5">Whole Spices</p>
  </div>
  <div className="foo ms-3 mb-3 col-lg-4 col-md-6 col-sm-12 ">
    <img src="https://static-01.daraz.pk/p/71c85eb7f34008fb2d9f6af656a7da71.jpg" alt className="fo mt-2" />
    <p className="ms-5">Whole Spices</p>
  </div>
  <div className="foo ms-3 mb-3 col-lg-4 col-md-6 col-sm-12">
    <img src="https://static-01.daraz.pk/p/b7f5bdeebaaa7dcf627de3195040cf43.jpg" alt className="fo mt-2 " />
    <p className="ms-5">Whole Spices</p>
  </div>
  <div className="foo ms-3 mb-3 col-lg-4 col-md-6 col-sm-12 ">
    <img src="https://static-01.daraz.pk/p/4b4e7350f4356afc57f861c7eeee58b4.jpg" alt className="fo mt-2" />
    <p className="ms-5">Whole Spices</p>
  </div>
  <div className="foo ms-3 mb-3 col-lg-4 col-md-6 col-sm-12">
    <img src="https://static-01.daraz.pk/p/356909afb2514094f45f1350c36f0404.jpg" alt className="fo mt-2" />
    <p className="ms-5">Whole Spices</p>
  </div>
  <div className="foo1 ms-3 mb-3 col-lg-4 col-md-6 col-sm-12">
    <img src="https://static-01.daraz.pk/p/f32c1cee176edf944dad98bd8d36e8de.jpg" alt className="fo mt-2" />
    <p className="ms-5">Whole Spices</p>
  </div>
</div>

        <Foods/>
        <Footer/>
    </div>
  )
}

export default Food